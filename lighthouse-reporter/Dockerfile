FROM node:20.10-alpine
ENV DATABASE_URL=http://localhost:8428
ENV LIGHTHOUSE_JSON='testreports/reportshuhu.report.json'

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "start" ]
