---
title: 'Covid Radar'
desc: 'The covid radar prediction project'
icon: '/images/projects/covid-radar.png'
url: 'https://covid-radar.xyz/'
technologies: 'react javascript gatsby netlify'
---

A simple predictive model and tracker for COVID19 Spain cases.

## History

During the first wave of COVID19 in Spain the data on this was quite confusing so we thought of making a model that would calculate how many infections were happening per minute, in real time.

To do this we devised a system that calculated the metrics of the previous records and observed the difference between them to predict the next movements.

Every 24 hours when the ministry released new data, it was checked by our automated services and applied the model again, self-correcting and showing the prediction to the minute and for the next batch of data.

The number of cases/minute became a very direct way of analyzing where we were in relation to other days.

Over time, the ministry's data has been changing in form and quantity, so the project currently subscribes to a public API that collects data on COIVD19 worldwide.

## Key points

- The website is served in a static way and regenerates, in a matter of seconds, every time new data is entered, so not only is access fast, there is no downtime.
- It offers the best performance anywhere in the world, wherever our website is deployed in the closest router to your position to ensure that you get the shortest possible response time.
- Supports huge amounts of traffic without compromising performance.
- Mobile-first design, compatible with all other devices
