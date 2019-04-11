---
templateKey: accomplishment-item
title: SEO Optimization
description: Brazilian national product database
tags:
  - seo
  - react
  - .net
  - elasticsearch
---

The company that holds the Brazilian national products database was suffering from service pirating, in other words, there was a third party that was caching the products information, and they were performing better at Search Engines, aggravating the situation. They were getting the data from our open trial APIs, that, even though limited the damage to a certain extent, was an open door from which someone could gradually steal data. While we could not generate an optimized static page for every item in the database, since it was the company business model, of selling products information, we ended creating a static page for the top most searched products of each month. It was backed by elastic search and hangfire doing background jobs. This way, even if we opened a little bit our database, it served the purpose of marketing. Eventually, we regained the first ranked searches for those high on demand products.
