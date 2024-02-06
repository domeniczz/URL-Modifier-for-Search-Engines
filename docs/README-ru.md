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

- [Google](https://www.google.com/supported_domains)
- [Yahoo](https://search.yahoo.com)
- [Yahoo Japan](https://www.yahoo.co.jp)
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
- [Oscobo](https://oscobo.com)
- [GOOD](https://good-search.org)
- [All the internet](https://www.alltheinternet.com)
- [AOL](https://www.aol.com)
- [OneSearch](https://www.onesearch.com)
- [Info](https://info.com)
- [Swisscows](https://swisscows.com)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
- [Lycos](https://search.lycos.com)
- [AlohaFind](https://alohafind.com)
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

Вы можете вручную добавить селектор DOM в код, чтобы поддержать другие поисковые системы.

Не может поддерживать [Bing](https://www.bing.com), потому что он предоставляет только промежуточные ссылки.

Для поисковых систем вроде Yahoo, Lycos, AlohaFind, этот скрипт поддерживает удаление перенаправляющих ссылок и извлечение реального URL. Например, перенаправляющая ссылка Yahoo - это "https://r.search.yahoo.com/...". Если вы не используете эти поисковые системы, вы можете выбрать использование [Правил модификации URL](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) без совместимости с перенаправляющими ссылками. Кстати, все встроенные правила модификации URL RegEx вы можете найти [здесь](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

4get не изменяют отображаемые URL-адреса соответственно при изменении ссылок. Эта проблема возникает из-за того, что я стремлюсь сделать свой код максимально универсальным, но у этих поисковых систем необычная структура DOM для отображения URL-адресов, что делает поддержку этих систем утомительной, учитывая их относительно небольшую пользовательскую базу.

> Просто заметка сбоку, [Kagi](https://kagi.com) - это поисковик с встроенной функцией перенаправления URL-адресов, которую стоит попробовать. Я пользователь Kagi и очень доволен этим продуктом, поэтому я делаю им рекламу здесь.

Найдите больше поисковых систем:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Встроенные переадресации

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (например [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (например [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (например [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (например [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (например [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (например [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (например [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (например [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (например [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (например [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (например [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (например [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (например [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- 
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (например [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (например [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (например [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (например [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (например [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (например [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (например [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (например [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (например [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Вы можете добавить собственные правила переадресации в скрипт.

Другие альтернативные приватные фронтенды, смотрите:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Поставщики услуг:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Стоит отметить, что вы можете использовать [Farside](https://github.com/benbusby/farside), который автоматически перенаправляет на работающие инстанции альтернативных фронтендов, ориентированных на конфиденциальность, вместо того, чтобы писать собственные правила регулярных выражений.

Однако, этот метод не поддерживает детальный контроль над соответствующими URL и действительно медленный, так как требуется перенаправление через Farside. Если вы все же хотите использовать это, вы можете раскомментировать соответствующую часть в `urlModificationRules`.

- Пример шаблона включения: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Перенаправить на: `https://farside.link/$1`

- Добавить в скрипт:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Пример URL: `https://www.youtube.com/watch?v=abc123`

- Результат URL: `https://farside.link/youtube.com/watch?v=abc123`

> Для справки, вики по настройке farside в [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

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

| Переменная                           | Описание                                                     |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | селектор для элемента DOM                                    |
| parentSelector                       | селектор для родительского элемента ссылки и текстового элемента |
| linkNodeSelector                     | селектор для элемента ссылки под элементом, указанным `parentSelector` |
| textNodeSelector                     | селектор для текстового элемента под элементом, указанным `parentSelector` |
| updateChildText                      | флаг для обновления внутреннего текста дочернего элемента, указанного `childSelector` |
| childSelector                        | селектор для дочернего элемента DOM под элементом, указанным `selector` или `textNodeSelector` |
| updateTextWithoutOverwrite           | флаг для обновления текстового узла без перезаписи других узлов под элементом DOM |
| updateTextByOverwritecontainProtocol | флаг для обновления содержимого путем перезаписи всего под элементом DOMфлаг для указания протокола (напр., https://) в домене |
| useTopLevelDomain                    | флаг для использования домена верхнего уровня при отображении URL |
| urlDisplayMethod                     | обязательно, метод отображения URL<br/>метод 1: формат "хлебных крошек"<br/>метод 2: полный URL<br/>метод 3: полный URL без протокола |
| multiElementsForUrlDisplay           | флаг для отображения URL, разделенного на несколько элементов DOM<br/>метод 1: Части URL распределяются по параллельным элементам<br/>метод 2: Части URL распределяются по непараллельным элементам<br/>метод 3: такой же, как метод 2, но обновление элементов происходит без очистки их исходного содержимого |

### searchEngines

Список доменов поисковых систем, определенных пользователем

| Переменная               | Описание                                                     |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | домен поисковой системы                                      |
| resultContainerSelectors | опционально, установить контейнер DOM результатов поиска, чтобы сузить диапазон динамического наблюдения |
| attribute                | укажите дополнительный атрибут URL-ссылки в &lt;a&gt; помимо 'href' (например, 'data-target')<br/>не нужно указывать это, если все атрибуты ссылки 'href' |
