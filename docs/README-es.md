# Modificador-de-URL-para-Motores-de-Búsqueda

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catálogo**:

- [Introducción](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md#Introducción)
- [Pendientes](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md#Pendientes)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md#Wiki)

## Introducción

Un script de [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instálalo desde Greasy Fork: [Modificador de URL para Motores de Búsqueda](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- GitHub Repositorio: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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

- [Google](https://www.google.com/supported_domains)
- [Yandex](https://yandex.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Ghostery](https://ghosterysearch.com)
- [Presearch](https://presearch.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [LibreY](https://github.com/Ahwxorg/LibreY/blob/main/instances.json)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)
- [Qwant](https://www.qwant.com)
- [Ecosia](https://www.ecosia.org)
- [OceanHero](https://oceanhero.today/search)
- [Swisscows](https://swisscows.com)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
- [Murena Spot](https://spot.ecloud.global)
- [Nona](https://www.nona.de)
- [Exalead](https://www.exalead.com/search/web/)
- [Seznam](https://www.seznam.cz)
- [Gibiru](https://gibiru.com)
- [Lukol](https://www.lukol.com)
- [GiveWater](https://www.givewater.com)
- [Excite](https://results.excite.com)
- [WebCrawler](https://www.webcrawler.com)
- [MetaCrawler](https://www.metacrawler.com)
- [Dogpile](https://www.dogpile.com)

Puedes añadir manualmente un selector DOM en el código para soportar otros motores de búsqueda.

No puede soportar [Bing](https://www.bing.com), porque solo proporciona enlaces intermedios.

4get no cambian las URL mostradas correspondientemente cuando se cambian los enlaces. Este problema existe porque intento hacer mi código lo más generalizado posible, pero estos motores de búsqueda tienen una estructura DOM inusual para mostrar URLs, lo que hace tedioso dar soporte a estos motores considerando su base de usuarios relativamente pequeña.

> Solo un pequeño apunte, [Kagi](https://kagi.com) es un motor de búsqueda con funcionalidad de redirección de URL incorporada, que vale la pena probar. Soy usuario de Kagi y estoy muy satisfecho con este producto, así que les estoy dando un reconocimiento aquí.

Encuentra más motores de búsqueda:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Redirecciones integradas

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (por ejemplo [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (por ejemplo [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (por ejemplo [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (por ejemplo [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (por ejemplo [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (por ejemplo [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (por ejemplo [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (por ejemplo [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (por ejemplo [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (por ejemplo [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (por ejemplo [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (por ejemplo [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (por ejemplo [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (por ejemplo [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (por ejemplo [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (por ejemplo [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (por ejemplo [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (por ejemplo [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (por ejemplo [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (por ejemplo [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (por ejemplo [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (por ejemplo [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Puedes añadir tus propias reglas de redirección en el script.

Para otras alternativas de frontends amigables con la privacidad, ver:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Proveedores de servicios:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Para un uso fácil, podríamos usar [Farside](https://github.com/benbusby/farside) que redirige automáticamente a instancias funcionales de interfaces alternativas orientadas a la privacidad en lugar de escribir nuestras propias reglas de expresiones regulares. Sin embargo, este método no admite un control más detallado sobre las URL coincidentes.

> Para tu información, wiki para configurar farside en [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/einaregilsson/Redirector

- Ejemplo de patrón incluido: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Redirigir a: `https://farside.link/$1`

- Agregar al script:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- URL de ejemplo: `https://www.youtube.com/watch?v=abc123`

- URL resultante: `https://farside.link/youtube.com/watch?v=abc123`

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

| Variable                             | Descripción                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | selector para el elemento DOM                                |
| parentSelector                       | selector para el padre del elemento de enlace y el elemento de texto |
| linkNodeSelector                     | selector para el elemento de enlace bajo el elemento especificado por `parentSelector` |
| textNodeSelector                     | selector para el elemento de texto bajo el elemento especificado por `parentSelector` |
| updateChildText                      | indicador para si actualizar el texto interno del elemento hijo especificado por `childSelector` |
| childSelector                        | selector para el elemento DOM hijo bajo el elemento especificado por `selector` o `textNodeSelector` |
| updateTextWithoutOverwrite           | indicador para actualizar el nodo de texto sin sobrescribir otros nodos bajo el elemento DOM |
| updateTextByOverwritecontainProtocol | indicador para actualizar el contenido sobrescribiendo todo bajo el elemento DOM indicador para si contener el protocolo (por ejemplo, https://) en el dominio |
| useTopLevelDomain                    | indicador para si usar el dominio de nivel superior al mostrar URLs |
| urlDisplayMethod                     | requerido, método de visualización de URL<br/>método 1: formato de breadcrumb<br/>método 2: URL completa<br/>método 3: URL completa sin protocolo |
| multiElementsForUrlDisplay           | indicador para si la URL mostrada se separa en múltiples elementos DOM |

### searchEngines

Lista definida por el usuario de dominios de motores de búsqueda

| Variable                 | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | dominio del motor de búsqueda                                |
| resultContainerSelectors | opcional, establecer contenedor DOM de resultado de búsqueda, para reducir el rango de observación dinámica |
| attributed               | especificar atributo de enlace adicional en <a> aparte de 'href' (por ejemplo, 'data-target')<br/>no es necesario especificar esto si todos los atributos de enlace son 'href' |
