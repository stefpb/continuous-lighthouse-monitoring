import fs from 'node:fs/promises';

const lighthouseJsonFile = process.env.LIGHTHOUSE_JSON ?? './testreports/report.json';
const hostname = process.env.DATABASE_URL ?? 'http://localhost:8428';
const url = `${hostname}/api/v1/import/prometheus`;

const processLighthouseData = async () => {
  try {
    const content = await fs.readFile(lighthouseJsonFile, 'utf-8');
    const json = JSON.parse(content);
    const fetchTime = new Date(json.fetchTime).getTime();
    console.log('fetchTime:', fetchTime);

    const data = Object.values(json.categories)
      .map(
        (category) =>
          `lighthouse{category="${category.id}"} ${category.score} ${fetchTime}`,
      )
      .join('\n');
    console.log(data);

    // do a post request to push the data to prometheus

    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });

    console.log(response.status);
  } catch (error) {
    console.error('Error processing lighthouse data:', error);
  }
};

processLighthouseData();
