## Créditos / Agradecimientos

Este proyecto está basado en **Fortune Cookie**, un pequeño proyecto HTML/CSS/JS creado por *Ana Paula Bertuol* (repositorio original: https://github.com/anaaaab/fortune-cookie).  
He modificado y ampliado la funcionalidad, diseño y frases para adaptarlo a este proyecto.

# Selección de frases por query

El sitio permite elegir qué conjunto de frases cargar mediante un parámetro en la URL:

Si la URL no incluye ningún parámetro, se cargan por defecto las frases de brainrot.json.

Si se agrega el parámetro ?mode=generales, se cargan las frases desde generales.json.

Ejemplos:

Versión por defecto (brainrot):
https://usuario.github.io/proyecto/

Frases generales:
https://usuario.github.io/proyecto/?mode=generales

Esto permite reutilizar el mismo sitio con distintos conjuntos de frases sin duplicar código ni ramas.