---
title: 'Covid Radar'
desc: 'The covid radar prediction project'
---

### Un simple modelo predictivo y rastreador para los casos de COVID19 en España.

Durante la primera oleada de COVID19 en España los datos sobre esta eran bastante confusos por lo que pensamos en hacer un modelo que calculase cuantas infecciones estaban sucediendo al minuto, en tiempo real.

Para ello ideamos un sistema que calculase las metricas de los anteriores registros y observase la diferencia entre los mismos para estimar la situación en el momento de mirar la aplicación y así ayudarnos a tomar más conciencia de la situación.

Cada 24h cuando el ministerio lanzaba nuevos datos, estos se contrastaban por nuestros servicios automatizados y aplicaban el modelo de nuevo, autocorrigiendose.

La cifra casos/minuto se convirtió en una forma muy directa de analizar en que estado estabamos respecto a otros dias.

Con el tiempo los datos del ministerio han ido variando en forma y cantidad por lo que actualmente el proyecto está suscrito a una API publica que recoge datos sobre COIVD19 a nivel mundial.

### Puntos Clave

- La web se sirve de forma estática y se regenera, en cuestión de segundos, cada vez que entran nuevos datos, el acceso es hiper-rapido y el disponibilidad es total.
- Ofrece el mejor rendimiento en cualquier parte del mundo, esté donde esté nuestra web esta desplegada en el router mas cercano a su posición para asegurarse de ofrecerle el menor tiempo de respuesta posible.
- Soporta cantidades ingentes de trafico sin verse perjudicado el rendimiento.
- Diseño centrado en móvil, compatible con los todos los demás dispositivos.
