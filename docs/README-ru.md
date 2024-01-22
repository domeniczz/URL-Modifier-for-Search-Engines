# URL-Modifier-for-Search-Engines

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Каталог**:

- [Введение](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introduction)
- [Список задач](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [Вики](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Введение

Скрипт для [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), установить с GreasyFork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- Github Репозиторий: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Mojeek](https://www.mojeek.com)
- [Torry](https://www.torry.io)

Вы можете вручную добавить селектор DOM в код, чтобы поддержать другие поисковые системы.

Не может поддерживать [Bing](https://www.bing.com), потому что он предоставляет только промежуточные ссылки.

### Встроенные переадресации

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (instance [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (instance [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instance [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (instance [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (instance [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (instance [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (instance [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (instance [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (instance [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (instance [sd.vern.cc](https://sd.vern.cc))
- ArXiv PDF -> ArXiv Abstract
- ...

Вы можете добавить собственные правила переадресации в скрипт.

Другие альтернативные приватные фронтенды, смотрите:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [vern.cc](https://vern.cc)
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

