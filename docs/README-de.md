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

Dieses Tampermonkey-Skript verbessert Ihre Nutzung von Suchmaschinen, indem es URLs in den Suchergebnissen von Suchmaschinen modifiziert und zu alternativen Seiten weiterleitet. Ermöglicht ein personalisierteres und effizienteres Surferlebnis.

URL-Modifikation verwendet Reguläre Ausdrücke.

Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

### Unterstützung für Suchmaschinen

- [Google](https://www.google.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Sie können manuell DOM-Selektor im Code hinzufügen, um andere Suchmaschinen zu unterstützen.

Kann [Bing](https://www.bing.com) nicht unterstützen, da es nur Zwischenlinks bereitstellt.

### Eingebaute Weiterleitung

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (Instanz [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (Instanz [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (Instanz [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

Sie können benutzerdefinierte Weiterleitungsregeln in das Skript selbst einfügen.

Andere alternative datenschutzfreundliche Frontends finden Sie unter:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)

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