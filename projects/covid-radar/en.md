---
title: 'Covid Radar'
desc: 'A simple predictive and tracking model for COVID19 cases in Spain'
---

### A simple predictive and tracking model for COVID19 cases in Spain.

During the first wave of COVID19 in Spain the data on this was quite confusing so we thought of making a model that would calculate how many infections were happening per minute, in real time.

To do this we devised a system that that calculated the metrics of the previous records and observe the difference between them to estimate the situation at the time of looking at the application and thus help us become more aware of the situation.

Every 24 hours when the ministry released new data, it was checked by our automated services and applied the model again, self-correcting.

The number of cases/minute became a very direct way of analyzing where we were in relation to other days.

Over time, the ministry's data has been changing in form and quantity, so the project currently subscribes to a public API that collects data on COIVD19 worldwide.

### Key points

- The website is served in a static way and regenerates, in a matter of seconds, every time new data is entered, access is hyper-fast and availability is total.
- It offers the best performance anywhere in the world, wherever our website is deployed in the closest router to your position to ensure that you get the shortest possible response time.
- Supports huge amounts of traffic without compromising performance.
- Mobile-first design, compatible with all other devices
