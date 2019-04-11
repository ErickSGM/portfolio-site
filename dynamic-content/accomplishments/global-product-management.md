---
templateKey: accomplishment-item
title: Global product fetching and monitoring
description: Project to fetch product information from global list of service nodes
tags:
  - .net
  - elasticsearch
  - react
  - soap
  - analytics
---

Implemented the global product data retrieving and sharing for a company that manages barcodes, products and companies information all around the globe. We had to implement a data transfer specification using SOAP in .net, which we ended using WCF, and we had to deal with some edges cases with some country nodes. We logged all the requests on elasticsearch and created a dashboard for monitoring the requests, country nodes, countries that were not responding, and the overall performance of the service. We developed the search and management website using react and material design, back in 2015.
