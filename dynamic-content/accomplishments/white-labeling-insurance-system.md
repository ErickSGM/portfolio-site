---
templateKey: accomplishment-item
title: White labeling insurance system
description: One of the biggest insurance company in Brazil
tags:
  - react
  - redux
  - microservices
  - saas
  - microfrontend
---

We've managed to transform an insurance company system to make it support SaaS/White labeling, so it requires little to none work to customize for each of their clients, instead of forks and a few weeks that we had to do before this transformation. To do this, we implemented different javascript loading for each client and made a lot of customization points where we can specify which component may render, the props it receives, and the overall stylization. Even though our squad works mostly with react, because we are in a micro frontend architecture, we need to integrate frontend made with Angular 6 and react through web components, as each team has the freedom to choose their language and stack.
