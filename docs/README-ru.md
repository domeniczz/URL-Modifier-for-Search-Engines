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

Этот скрипт для Tampermonkey улучшает использование поисковых систем, изменяя URL-адреса в результатах поиска, перенаправляя на альтернативные сайты. Обеспечивает более настраиваемый и эффективный опыт просмотра.

Модификация URL осуществляется с использованием регулярных выражений.

### Поддержка поисковых систем

- [Google](https://www.google.com)
- [SearXNG](https://searx.space/) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Вы можете вручную добавить селектор DOM в код, чтобы поддержать другие поисковые системы.

Не может поддерживать [Bing](https://www.bing.com), потому что он предоставляет только промежуточные ссылки.

### Встроенные переадресации

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (инстанс [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (инстанс [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (инстанс [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

Вы можете добавить собственные правила переадресации в скрипт.

Другие альтернативные приватные фронтенды, смотрите [LibRedirect](https://libredirect.github.io/index.html).

---

## Список задач

1. Добавить поддержку большего количества поисковых систем.
2. Рефакторинг кода для упрощения чтения и модификации.

---

## Вики

### Правила модификации URL

Правила модификации URL в [регулярных выражениях](https://ru.wikipedia.org/wiki/Регулярные_выражения)

| Переменная  | Описание                                                |
| ----------- | ------------------------------------------------------- |
| matchRegex  | регулярное выражение для сопоставления оригинальных URL |
| replaceWith | регулярное выражение для замены                         |

### Правила селекторов

[Селекторы](https://developer.mozilla.org/ru/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) для обновления DOM-элементов результатов поисковых систем

| Переменная      | Описание                                                     |
| --------------- | ------------------------------------------------------------ |
| selector        | селектор DOM-элемента                                        |
| updateText      | флаг, нужно ли обновлять текст или значение href элемента    |
| childSelector   | селектор для дочернего DOM-элемента под родительским элементом |
| updateChildText | флаг, нужно ли обновлять внутренний текст дочернего элемента |
| containProtocol | флаг, нужно ли включать протокол (например, https://) в домен |
| displayMethod   | обязательно, метод отображения URL<br/>метод 1: формат "хлебные крошки"<br/>метод 2: полный URL<br/>метод 3: полный URL без протокола |

### Поисковые системы

Список доменов поисковых систем, определенных пользователем

| Переменная               | Описание                                                     |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | домен поисковой системы                                      |
| resultContainerSelectors | опционально, установить контейнер DOM результатов поиска, чтобы сузить диапазон динамического наблюдения |