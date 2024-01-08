# URL-Modifier-for-Search-Engines

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
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

**Catalogue**:

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introduction)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introduction

A [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script, install from GreasyFork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

This Tampermonkey script enhances your search engine usage by modifying URLs in the search result of search engines, redirecting to alternative sites. Allows a more customized and efficient browsing experience.

URL modification uses Regular Expression.

### Search Engine support

- [Google](https://www.google.com)
- [SearXNG](https://searx.space) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

You can manually add DOM selector in the code to support other search engines.

Can't support [Bing](https://www.bing.com), because it only provide intermediate links.

### Built-in redirection

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (instance [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instance [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (instance [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

You can add custom redirection rules into the script yourself.

Other alternatives privacy friendly frontends, see [LibRedirect](https://libredirect.github.io/index.html).

---

## TODO

1. Add supports for more search engines.
2. Refactor the code to make it easier to read and modify.

---

## Wiki

### urlModificationRules

URL modification rules in [regular expression](https://en.wikipedia.org/wiki/Regular_expression)

| Variable    | Description                                   |
| ----------- | --------------------------------------------- |
| matchRegex  | regular expression for matching original URLs |
| replaceWith | regular expression for replacement            |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) rules for the DOM elements needs updating for search engine results

| Variable                   | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| selector                   | selector for DOM element                                     |
| updateText                 | flag for whether to update the text or href value of the element |
| childSelector              | selector for child DOM element under parent element          |
| updateChildText            | flag for whether to update the inner text of the child element |
| containProtocol            | flag for whether to contain protocol (e.g. https://) in the domain |
| displayMethod              | required, URL display method<br/>method 1: breadcrumb format<br/>method 2: full URL<br/>method 3: full URL without protocol |
| multiElementsForUrlDisplay | flag for whether the displayed URL is separated into multiple DOM elements |
| hasSubResults              | flag for whether the search engine can have sub-results      |
| subResultSelector          | selector for sub-results                                     |

### searchEngines

User-defined list of search engine domains

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | search engine's domain                                       |
| resultContainerSelectors | optional, set search result container DOM, to narrow down the range of dynamic observation |

