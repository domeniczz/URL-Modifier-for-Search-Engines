# URL-Modifier-for-Search-Engines

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

**TODOs**:

1. Add supports for more search engines.
2. Refactor the code to make it easier to read and modify.
