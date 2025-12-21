## Créditos / Agradecimientos

Este proyecto está basado en **Fortune Cookie**, un pequeño proyecto HTML/CSS/JS creado por *Ana Paula Bertuol*  
(repositorio original: https://github.com/anaaaab/fortune-cookie).  
He modificado y ampliado la funcionalidad, el diseño y las frases para adaptarlo a este proyecto.

---

## Selección de frases por query

El sitio permite elegir qué conjunto de frases cargar mediante un parámetro en la URL.

Si la URL no incluye ningún parámetro, se cargan por defecto las frases de `brainrot.json`.

Si se agrega el parámetro `?frases=nombre`, se cargan las frases desde el archivo correspondiente dentro de la carpeta `quotes`.

Ejemplos:

Versión por defecto (brainrot):  
https://usuario.github.io/proyecto/

Frases generales:  
https://usuario.github.io/proyecto/?frases=generales

Esto permite reutilizar el mismo sitio con distintos conjuntos de frases sin duplicar código ni ramas.

---

## Índice de modos disponibles

<!-- FRASES_START -->
## Modos de frases
- [Brainrot](https://vitoia4.github.io/galletita_de_la_fortuna/?frases=brainrot)
- [Generales](https://vitoia4.github.io/galletita_de_la_fortuna/?frases=generales)
- [Todas](https://vitoia4.github.io/galletita_de_la_fortuna/?frases=todas)

<!-- FRASES_END -->
