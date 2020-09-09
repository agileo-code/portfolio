---
title: 'Covid Radar'
desc: 'The covid radar prediction project'
---

##### Un simple model predictiu i rastrejador per als casos de COVID19 a Espanya.

Durant la primera onada de COVID19 a Espanya les dades sobre aquesta eren bastant confusos pel que pensem a fer un model que calculés quantes infeccions estaven succeint al minut, en temps real.

Per a això ideem un sistema que calculés les metricas dels anteriors registres i observés la diferència entre els mateixos per a estimar la situació en el moment de mirar l'aplicació i així ajudar-nos a prendre més consciència de la situació.

Cada 24h quan el ministeri llançava noves dades, aquests es contrastaven pels nostres serveis automatitzats i aplicaven el model de nou, autocorrigiendose.

La xifra casos/minut es va convertir en una forma molt directa d'analitzar en què estat estabamos respecte a altres dies.

Amb el temps les dades del ministeri han anat variant en forma i quantitat pel que actualment el projecte està subscrit a una API publica que recull dades sobre COIVD19 a nivell mundial.

##### Punts Clau

- La web se serveix de manera estàtica i es regenera, en qüestió de segons, cada vegada que entren noves dades, l'accés és hiper ràpid i el disponibilitat és total.
- Ofereix el millor rendiment en qualsevol part del món, estigui on estigui la nostra web aquesta desplegada en l'encaminador mes pròxim a la seva posició per a assegurar-se d'oferir-li el menor temps de resposta possible.
- Suporta quantitats ingents de trafico sense veure's perjudicat el rendiment.
- Disseny centrat en mòbil, compatible amb els tots els altres dispositius.
