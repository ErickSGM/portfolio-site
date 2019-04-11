---
templateKey: accomplishment-item
title: Full wharehouse management reestructure using .net
description: Delage - General logistics
tags:
  - .net
  - microservices
  - actor model
  - react
  - event-sourcing
  - saas
---

Architected and participated in the development of a new and improved warehouse management system. We moved from a monolith to a full microservices infrastructure, using elastic principles, actor model, CQRS and event sourcing principles. One of the biggest challenges was to make each warehouse address state transactional, we accomplished that using Actor Model so that we scaled to thousands of change requests per second while keeping it consistent. Another hurdle we overcame was to keep each service totally independent, using a lot of event sourcing through kafka and also creating short circuits, making the overall system more resilient and responsive.
