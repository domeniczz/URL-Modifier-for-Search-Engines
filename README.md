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

You can manually add HTML selector in the code to support other search engines.

Can't support [Bing](https://www.bing.com), because it only provide intermediate links.

**Built-in redirection**:

- Reddit -> Old Reddit
- Wikipedia -> Wikiwand
- Medium -> Freedium
- ArXiv PDF -> ArXiv Abstract
- ...

You can add custom redirection rules into the script yourself.

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

| Variable          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| selector          | selector for DOM element                                     |
| updateText        | flag for whether to update the text or href value of the element |
| childSelector     | selector for child DOM element under parent element          |
| updateChildText   | flag for whether to update the inner text of the child element |
| useTopLevelDomain | flag for whether to use top-level domain in text             |
| containProtocol   | flag for whether to contain protocol (e.g. https://) in top-level domain |

