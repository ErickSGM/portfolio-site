---
templateKey: accomplishment-item
title: Analytics election campaign planning
description: MVP project to help planning election campaigns
tags:
  - angular
  - node
  - azure
  - AI
  - analytics
---

In only a few days we had to create and present an MVP for an interested company showcasing what could be done using a little bit of AI and text analysis and how it could help politicians to plan for the elections. We've created an azure function that was trigged now and then and searched for tweets with specifics hashtags and then saved the result on elasticSearch. Then we had another azure function that got those tweets and sent to Azure Text Analysis so we could get the user feeling and the topics from these tweets. Later we crossed that information with public data from the Brazilian Institute of Geography and Statistics and open data from google trends. We compiled all these data in a dashboard, used to assist consultants with the task to help politicians plan and save money for the campaign.
