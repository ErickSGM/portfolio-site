---
templateKey: accomplishment-item
title: Warehouse relevant data search
description: Project for searching all data on a warehouse and return the most relevant ones
tags:
  - .net
  - elasticsearch
  - react
  - saas
  - plugins
---

Architected and participated in the development of a search engine for warehouse management. It had to show any information that each of their partners wanted and rank them for each different user role in their system. That way, each user only sees relevant information to be efficient in their job. We used elastic search and developed a resolver schema, somewhat similar in concept of what Graphql does today. Also, each partner can come with their plugins, all it needs to do is show the system how the information is indexed, how should we fetch the data and how it is related to other information that we have. To do this, we leveraged aspects of asp.net core and created a micro frontend system with react, typescript, redux, saga and material UI.
