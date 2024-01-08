# Modificador-de-URL-para-Motores-de-Búsqueda

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Catálogo**:

- [Introducción](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introducción)
- [Pendientes](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Pendientes)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introducción

Un script de [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instálalo desde GreasyFork: [Modificador de URL para Motores de Búsqueda](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Este script de Tampermonkey mejora tu uso de motores de búsqueda modificando URLs en los resultados de búsqueda de motores de búsqueda, redirigiendo a sitios alternativos. Permite una experiencia de navegación más personalizada y eficiente.

La modificación de URL utiliza Expresión Regular.

### Soporte de Motores de Búsqueda

- [Google](https://www.google.com)
- [SearXNG](https://searx.space) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Puedes añadir manualmente un selector DOM en el código para soportar otros motores de búsqueda.

No puede soportar [Bing](https://www.bing.com), porque solo proporciona enlaces intermedios.

### Redirecciones integradas

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (instancia [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instancia [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (instancia [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

Puedes añadir tus propias reglas de redirección en el script.

Para otras alternativas de frontends amigables con la privacidad, ver [LibRedirect](https://libredirect.github.io/index.html).

---

## Pendientes

1. Añadir soporte para más motores de búsqueda.
2. Refactorizar el código para hacerlo más fácil de leer y modificar.

---

## Wiki

### reglasDeModificaciónDeURL

Reglas de modificación de URL en [expresión regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)

| Variable    | Descripción                                          |
| ----------- | ---------------------------------------------------- |
| matchRegex  | expresión regular para coincidir con URLs originales |
| replaceWith | expresión regular para el reemplazo                  |

### reglasDeSelector

Reglas de [Selector](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) para los elementos DOM que necesitan actualización en los resultados de los motores de búsqueda

| Variable        | Descripción                                                  |
| --------------- | ------------------------------------------------------------ |
| selector        | selector para el elemento DOM                                |
| updateText      | indicador de si actualizar el texto o el valor href del elemento |
| childSelector   | selector para el elemento DOM hijo bajo el elemento padre    |
| updateChildText | indicador de si actualizar el texto interno del elemento hijo |
| containProtocol | indicador de si incluir el protocolo (ej. https://) en el dominio |
| displayMethod   | requerido, método de visualización de URL<br/>método 1: formato de migas de pan<br/>método 2: URL completa<br/>método 3: URL completa sin protocolo |
| multiElementsForUrlDisplay | indicador de si la URL mostrada está dividida en múltiples elementos del DOM |
| hasSubResults     | indicador de si el motor de búsqueda puede tener subresultados |
| subResultSelector | selector para subresultados                                   |

### motoresDeBúsqueda

Lista definida por el usuario de dominios de motores de búsqueda

| Variable                 | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | dominio del motor de búsqueda                                |
| resultContainerSelectors | opcional, establecer contenedor DOM de resultado de búsqueda, para reducir el rango de observación dinámica |