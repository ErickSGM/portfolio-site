---
templateKey: accomplishment-item
title: Customer database syncronization
description: Project to syncronize database between our own and the client's
tags:
  - .net
  - actor model
  - streams
  - reactive
---

One of our clients needed to have some service that synchronized their customer database with their database, so both would exchange information one to the other. To achieve this, we developed a service using actor model and streams to apply some processing, business logic, and mapping to move information between databases. Each side had a pulling mechanism which fed the stream with incoming entries, and we had monitoring all over the stream pipeline so we could monitor the throughput and adjust the throttling so we wouldn't overstress their databases.
