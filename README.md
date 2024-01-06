# URL-Modifier-for-Search-Engines

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introduction)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introduction

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) Script.

Modify URLs in the search result of search engines, redirect the URL to alternatives sites or just do some other useful modification.

URL modification uses Regular Expression.

**Search Engine support**:

- [Google](https://www.google.com)
- [SearXNG](https://searx.space/) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

You can manually add HTML selector in the code to support other search engines.

Can't support [Bing](https://www.bing.com), because it only provide intermediate links.

**Built-in redirection**:

- Wikipedia -> [Wikiwand](https://www.wikiwand.com)
- Reddit -> [Old Reddit](https://old.reddit.com)
- Twitter -> [Nitter](https://nitter.net)
- Youtube -> [Invidious](https://docs.invidious.io/instances) (instance [yewtu.be](https://yewtu.be))
- Stack Overflow -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instance [code.whatever.social](https://code.whatever.social))
- Medium -> [Freedium](https://freedium.cfd)
- NPR -> [NPR Text](https://text.npr.org)
- Imgur -> [Rimgo](https://rimgo.codeberg.page/) (instance [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
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

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) rules for each search engine results

| Variable        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| selector        | selector for DOM element                                     |
| updateText      | flag for whether to update the text or href value of the element |
| childSelector   | selector for child DOM element under parent element          |
| updateChildText | flag for whether to update the inner text of the child element |
| containProtocol | flag for whether to contain protocol (e.g. https://) in the domain |
| displayMethod   | required, URL display method.<br/>method 1: breadcrumb format<br/>method 2: full URL<br/>method 3: full URL without protocol |

### searchEngines

User-defined list of search engine instance URLs

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | search engine's domain                                       |
| resultContainerSelectors | optional, set search result container DOM, to narrow down the range of dynamic observation |

