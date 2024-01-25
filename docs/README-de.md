# URL-Modifier-für-Suchmaschinen

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Katalog**:

- [Einführung](https://github.com/domeniczz/URL-Modifier-für-Suchmaschinen#Einführung)
- [TODO](https://github.com/domeniczz/URL-Modifier-für-Suchmaschinen#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-für-Suchmaschinen#Wiki)

## Einführung

Ein [Tampermonkey](https://github.com/Tampermonkey/tampermonkey)-Skript, installiert von GreasyFork: [URL-Modifier für Suchmaschinen](https://greasyfork.org/de/scripts/483597-url-modifier-für-suchmaschinen).

- Github Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Dieses Tampermonkey-Skript verbessert Ihre Nutzung von Suchmaschinen, indem es URLs in den Suchergebnissen von Suchmaschinen modifiziert und zu alternativen Seiten weiterleitet. Ermöglicht ein personalisierteres und effizienteres Surferlebnis.

URL-Modifikation verwendet Reguläre Ausdrücke.

<div align="center">
    <span>Suchergebnis ohne URL-Änderung:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Suchergebnis nach URL-Änderung:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Unterstützung für Suchmaschinen

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

Sie können manuell DOM-Selektor im Code hinzufügen, um andere Suchmaschinen zu unterstützen.

Kann [Bing](https://www.bing.com) nicht unterstützen, da es nur Zwischenlinks bereitstellt.

> Kurze Anmerkung: [Kagi](https://kagi.com) ist eine Suchmaschine mit integrierter URL-Umleitungsfunktion, die es sich lohnt, auszuprobieren. Ich bin ein Nutzer von Kagi und bin sehr zufrieden mit diesem Produkt, deshalb gebe ich ihnen hier einen Hinweis.

Finde mehr Suchmaschinen:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Eingebaute Weiterleitung

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
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (e.g. [hckrnws.com](https://hckrnws.com))
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (e.g. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (e.g. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (e.g. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (e.g. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (e.g. [uf.vern.cc](https://uf.vern.cc))
- ArXiv PDF -> ArXiv Abstract
- ...

Sie können benutzerdefinierte Weiterleitungsregeln in das Skript selbst einfügen.

Andere alternative datenschutzfreundliche Frontends finden Sie unter:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## TODO

1. Unterstützung für weitere Suchmaschinen hinzufügen.
2. Den Code überarbeiten, um ihn leichter lesbar und modifizierbar zu machen.

---

## Wiki

### urlModificationRules

URL-Modifikationsregeln in [regulären Ausdrücken](https://de.wikipedia.org/wiki/Regulärer_Ausdruck)

| Variable    | Beschreibung                                          |
| ----------- | ----------------------------------------------------- |
| matchRegex  | Regulärer Ausdruck zum Abgleichen ursprünglicher URLs |
| replaceWith | Regulärer Ausdruck für den Ersatz                     |

### selectorRules

[Selektor](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)-Regeln für die DOM-Elemente, die für Suchmaschinenergebnisse aktualisiert werden müssen

| Variable        | Beschreibung                                                 |
| --------------- | ------------------------------------------------------------ |
| selector        | Selektor für DOM-Element                                     |
| updateText      | Flag, ob der Text oder der href-Wert des Elements aktualisiert werden soll |
| childSelector   | Selektor für Kind-DOM-Element unter übergeordnetem Element   |
| updateChildText | Flag, ob der Innentext des Kind-Elements aktualisiert werden soll |
| containProtocol | Flag, ob das Protokoll (z. B. https://) in der Domain enthalten sein soll |
| displayMethod   | erforderlich, Anzeigemethode der URL<br/>Methode 1: Breadcrumb-Format<br/>Methode 2: vollständige URL<br/>Methode 3: vollständige URL ohne Protokoll |
| multiElementsForUrlDisplay | Kennzeichen dafür, ob die angezeigte URL in mehrere DOM-Elemente aufgeteilt ist |

### searchEngines

Benutzerdefinierte Liste von Suchmaschinendomains

| Variable                 | Beschreibung                                                 |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | Domain der Suchmaschine                                      |
| resultContainerSelectors | optional, Suchergebnis-Container-DOM einstellen, um den Bereich der dynamischen Beobachtung einzugrenzen |
| attribute                | Geben Sie ein zusätzliches URL-Link-Attribut in &lt;a&gt; an, das neben 'href' verwendet wird (z.B. 'data-target')<br/>Wenn alle Link-Attribute 'href' sind, ist keine zusätzliche Angabe erforderlich. |

