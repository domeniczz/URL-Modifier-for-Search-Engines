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

- Github Repositorio: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repositorio: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Este script de Tampermonkey mejora tu uso de motores de búsqueda modificando URLs en los resultados de búsqueda de motores de búsqueda, redirigiendo a sitios alternativos. Permite una experiencia de navegación más personalizada y eficiente.

La modificación de URL utiliza Expresión Regular.

<div align="center">
    <span>Resultado de búsqueda sin modificación de URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Resultado de búsqueda después de la modificación de URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Soporte de Motores de Búsqueda

- [Google](https://www.google.com)
- [Yandex](https://yandex.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Ecosia](https://www.ecosia.org)
- [Presearch](https://presearch.com)
- [Swisscows](https://swisscows.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

Puedes añadir manualmente un selector DOM en el código para soportar otros motores de búsqueda.

No puede soportar [Bing](https://www.bing.com), porque solo proporciona enlaces intermedios.

> Solo un pequeño apunte, [Kagi](https://kagi.com) es un motor de búsqueda con funcionalidad de redirección de URL incorporada, que vale la pena probar. Soy usuario de Kagi y estoy muy satisfecho con este producto, así que les estoy dando un reconocimiento aquí.

Encuentra más motores de búsqueda:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Redirecciones integradas

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (e.g. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (e.g. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (e.g. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (e.g. [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (e.g. [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (e.g. [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (e.g. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (e.g. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (e.g. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- ArXiv PDF -> ArXiv Abstract
- ...

Puedes añadir tus propias reglas de redirección en el script.

Para otras alternativas de frontends amigables con la privacidad, ver:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## Pendientes

1. Añadir soporte para más motores de búsqueda.
2. Refactorizar el código para hacerlo más fácil de leer y modificar.

---

## Wiki

### urlModificationRules

Reglas de modificación de URL en [expresión regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)

| Variable    | Descripción                                          |
| ----------- | ---------------------------------------------------- |
| matchRegex  | expresión regular para coincidir con URLs originales |
| replaceWith | expresión regular para el reemplazo                  |

### selectorRules

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

### searchEngines

Lista definida por el usuario de dominios de motores de búsqueda

| Variable                 | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | dominio del motor de búsqueda                                |
| resultContainerSelectors | opcional, establecer contenedor DOM de resultado de búsqueda, para reducir el rango de observación dinámica |
| attributed               | especificar atributo de enlace adicional en <a> aparte de 'href' (por ejemplo, 'data-target')<br/>no es necesario especificar esto si todos los atributos de enlace son 'href' |

