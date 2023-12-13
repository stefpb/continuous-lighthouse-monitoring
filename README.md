# Continuous Lighthouse Monitoring

This repository contains the Kubernetes configuration for the Continuous Lighthouse Monitoring.

## Prerequisites

- Kubernetes cluster
- kubectl
- kustomize

## Deployment

Before deploying the application, make sure to create the necessary namespace in your Kubernetes cluster and apply the configuration:

```bash
kubectl create namespace frmg-radar
kubectl kustomize | kubectl apply -f -
```

## Components
The Kubernetes configuration includes the following components:

- VictoriaMetrics: Time Series Database
- Grafana: Visualization and analytics software
- Lighthouse: Automated tool for improving the quality of web pages

Each component has its own service, deployment, and persistent volume claim (PVC) defined in the kustomize/base directory.

## Persistent Volume Claims
The lighthouse-reports-pvc PVC is used for storing the Lighthouse reports. It requests a storage of 1Gi and can be mounted by a single node in read-write mode.