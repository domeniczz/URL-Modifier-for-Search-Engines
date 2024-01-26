# URL-Modifier-for-Search-Engines

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
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

**Каталог**:

- [Введение](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md#Introduction)
- [Список задач](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md#Список-задач)
- [Вики](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md#Вики)

## Введение

Скрипт для [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), установить с Greasy Fork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- GitHub Репозиторий: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Репозиторий: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Этот скрипт для Tampermonkey улучшает использование поисковых систем, изменяя URL-адреса в результатах поиска, перенаправляя на альтернативные сайты. Обеспечивает более настраиваемый и эффективный опыт просмотра.

Модификация URL осуществляется с использованием регулярных выражений.

<div align="center">
    <span>Результат поиска без изменения URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Результат поиска после изменения URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Поддержка поисковых систем

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
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

Вы можете вручную добавить селектор DOM в код, чтобы поддержать другие поисковые системы.

Не может поддерживать [Bing](https://www.bing.com), потому что он предоставляет только промежуточные ссылки.

4get, Lilo и Entireweb не изменяют отображаемые URL-адреса соответственно при изменении ссылок. Эта проблема возникает из-за того, что я стремлюсь сделать свой код максимально универсальным, но у этих поисковых систем необычная структура DOM для отображения URL-адресов, что делает поддержку этих систем утомительной, учитывая их относительно небольшую пользовательскую базу.

> Просто заметка сбоку, [Kagi](https://kagi.com) - это поисковик с встроенной функцией перенаправления URL-адресов, которую стоит попробовать. Я пользователь Kagi и очень доволен этим продуктом, поэтому я делаю им рекламу здесь.

Найдите больше поисковых систем:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Встроенные переадресации

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
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (e.g. [antifandom.com](https://antifandom.com/))
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (e.g. [nu.vern.cc](https://nu.vern.cc))
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

Вы можете добавить собственные правила переадресации в скрипт.

Другие альтернативные приватные фронтенды, смотрите:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## Список задач

1. Добавить поддержку большего количества поисковых систем.
2. Рефакторинг кода для упрощения чтения и модификации.

---

## Вики

### urlModificationRules

Правила модификации URL в [регулярных выражениях](https://ru.wikipedia.org/wiki/Регулярные_выражения)

| Переменная  | Описание                                                |
| ----------- | ------------------------------------------------------- |
| matchRegex  | регулярное выражение для сопоставления оригинальных URL |
| replaceWith | регулярное выражение для замены                         |

### selectorRules

[Селекторы](https://developer.mozilla.org/ru/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) для обновления DOM-элементов результатов поисковых систем

| Переменная      | Описание                                                     |
| --------------- | ------------------------------------------------------------ |
| selector        | селектор DOM-элемента                                        |
| updateText      | флаг, нужно ли обновлять текст или значение href элемента    |
| childSelector   | селектор для дочернего DOM-элемента под родительским элементом |
| updateChildText | флаг, нужно ли обновлять внутренний текст дочернего элемента |
| containProtocol | флаг, нужно ли включать протокол (например, https://) в домен |
| displayMethod   | обязательно, метод отображения URL<br/>метод 1: формат "хлебные крошки"<br/>метод 2: полный URL<br/>метод 3: полный URL без протокола |
| multiElementsForUrlDisplay | флаг того, отображается ли URL в нескольких элементах DOM |

### searchEngines

Список доменов поисковых систем, определенных пользователем

| Переменная               | Описание                                                     |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | домен поисковой системы                                      |
| resultContainerSelectors | опционально, установить контейнер DOM результатов поиска, чтобы сузить диапазон динамического наблюдения |
| attribute                | укажите дополнительный атрибут URL-ссылки в &lt;a&gt; помимо 'href' (например, 'data-target')<br/>не нужно указывать это, если все атрибуты ссылки 'href' |

