# Модифікатор-URL-для-Пошукових-Систем

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-sv.md">Svenska</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fi.md">Suomi</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pl.md">Polski</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Român</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Каталог**:

- [Вступ](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md#Вступ)
- [Завдання](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md#Завдання)
- [Вікі](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md#Вікі)

## Вступ

Скрипт для [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), встановіть з Greasy Fork: [Модифікатор URL для пошукових систем](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Якщо у вашому браузері не встановлено Tampermonkey, ви можете встановити його з [Магазину Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) або [Магазину Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

- Репозиторій GitHub: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Репозиторій Codeberg: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Будь ласка, залиште мені зірочку на GitHub або Codeberg, якщо ви знайшли мій скрипт корисним! Дякую! 😘</b>

Цей скрипт для Tampermonkey покращує ваше використання пошукових систем шляхом модифікації URL-адрес у результатах пошуку пошукових систем, перенаправляючи на альтернативні сайти, що дозволяє отримати більш налаштований і ефективний досвід перегляду. Ви також можете додати власне правило модифікації URL до скрипта та вітаєтеся додати свої правила до цього скрипта, щоб зробити його набагато кориснішим.

Модифікація URL використовує Регулярні Вирази.

<div align="center">
    <span>Результат пошуку без модифікації URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Результат пошуку після модифікації URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Підтримка Пошукових Систем

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
- [OceanHero](https://oceanhero.today/search)
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

Ви можете вручну додати селектор DOM у код, щоб підтримати інші пошукові системи.

Не може підтримувати [Bing](https://www.bing.com), тому що надає лише проміжні посилання.

Для пошукових систем, таких як Yahoo, Lycos, AlohaFind, скрипт підтримує видалення посилань перенаправлення і видобування справжнього URL. Наприклад, посилання перенаправлення Yahoo є "https://r.search.yahoo.com/...". Якщо ви не використовуєте ці пошукові системи, ви можете обрати використання [правил модифікації URL](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) без сумісності з посиланнями перенаправлення. До речі, ви можете побачити всі вбудовані правила модифікації URL регулярними виразами [тут](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

> Просто зауваження, [Kagi](https://kagi.com) - це пошукова система з вбудованою функцією перенаправлення URL-адрес, варто спробувати. Я користувач Kagi і дуже задоволений цим продуктом, тому даю їм відгук тут.

Знайдіть більше пошукових систем:

- [Карта Пошукових Систем](https://www.searchenginemap.com)
- [Вечірка Пошукових Систем](https://searchengine.party)

### Вбудоване Перенаправлення

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (напр., [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (напр., [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (напр., [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (напр., [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (напр., [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (напр., [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (напр., [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (напр., [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (напр., [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (напр., [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (напр., [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (напр., [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (напр., [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (напр., [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (напр., [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (напр., [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (напр., [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (напр., [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (напр., [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (напр., [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (напр., [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (напр., [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Ви можете додати власні правила перенаправлення до скрипта.

Інші альтернативні приватні фронтенди, дивіться:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Провайдери послуг:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

До речі, ви могли б використовувати [Farside](https://github.com/benbusby/farside), який автоматично перенаправляє на робочі інстанції приватно-орієнтованих альтернативних фронтендів, замість того, щоб писати правила регулярних виразів самостійно.

Однак, цей метод не підтримує більш детальний контроль над відповідними URL-адресами, і він дійсно повільний, оскільки потрібне перенаправлення через farside. Якщо ви все ж хочете використовувати це, ви можете розкоментувати відповідну частину в `urlModificationRules`.

- Приклад шаблону включення: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Перенаправити до: `https://farside.link/$1`

- Додати до скрипта:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Приклад URL: `https://www.youtube.com/watch?v=abc123`

- Результат URL: `https://farside.link/youtube.com/watch?v=abc123`

> До відома, вікі для налаштування farside в [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

---

## Завдання

1. Додати підтримку більше пошукових систем.
2. Рефакторинг коду для поліпшення його читабельності та можливості модифікації.

---

## Вікі

### urlModificationRules

Правила модифікації URL у [регулярних виразах](https://uk.wikipedia.org/wiki/Pегулярних_виразах)

| Змінна      | Опис                                        |
| ----------- | ------------------------------------------- |
| matchRegex  | регулярний вираз для збігу оригінальних URL |
| replaceWith | регулярний вираз для заміни                 |

### selectorRules

[Селектори](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) правил для DOM елементів, які потребують оновлення для результатів пошукових систем

| Змінна                               | Опис                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | селектор для DOM елементу                                    |
| parentSelector                       | селектор для батьківського елементу лінку та текстового елементу |
| linkNodeSelector                     | селектор для елементу лінку під елементом, вказаним `parentSelector` |
| textNodeSelector                     | селектор для текстового елементу під елементом, вказаним `parentSelector` |
| updateChildText                      | прапорець для оновлення внутрішнього тексту дочірнього елементу, вказаного `childSelector` |
| childSelector                        | селектор для дочірнього DOM елементу під елементом, вказаним `selector` або `textNodeSelector` |
| updateTextWithoutOverwrite           | прапорець для оновлення текстового вузла без перезапису інших вузлів під DOM елементом |
| updateTextByOverwritecontainProtocol | прапорець для оновлення вмісту шляхом перезапису всього під DOM елементомпрапорець для вказівки, чи містити протокол (наприклад, https://) у домені |
| useTopLevelDomain                    | прапорець для використання домену верхнього рівня при відображенні URL-адрес |
| urlDisplayMethod                     | обов'язково, метод відображення URL<br/>метод 1: формат "breadcrumb"<br/>метод 2: повний URL<br/>метод 3: повний URL без протоколу |
| multiElementsForUrlDisplay           | прапорець для вказівки, що відображуваний URL розділений на декілька DOM елементів<br/>метод 1: частини URL розкидані по паралельних елементах<br/>метод 2: частини URL розкидані по непаралельних елементах<br/>метод 3: так само, як метод 2, але оновлення елементів без очищення їхнього оригінального вмісту |

### searchEngines

Користувацьки визначений список доменів пошукових систем

| Змінна                   | Опис                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | домен пошукової системи                                      |
| resultContainerSelectors | необов'язково, встановити контейнер результатів пошуку DOM, щоб звузити діапазон динамічного спостереження |
| attribute                | вказати додатковий атрибут посилання URL в &lt;a&gt; окрім 'href' (наприклад, 'data-target')<br/>немає необхідності вказувати це, якщо всі атрибути посилань є 'href' |
