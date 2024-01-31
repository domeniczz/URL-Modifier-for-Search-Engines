# تغییردهنده-URL-برای-موتورهای-جستجو

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a>
</div>
<br/>

**فهرست**:

- [مقدمه](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md#مقدمه)
- [کارهای-باقی‌مانده](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md#کارهای-باقیمانده)
- [ویکی](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md#ویکی)

## مقدمه

یک اسکریپت [Tampermonkey](https://github.com/Tampermonkey/tampermonkey)، نصب از Greasy Fork: [تغییردهنده URL برای موتورهای جستجو](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- مخزن GitHub: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- مخزن Codeberg: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

این اسکریپت Tampermonkey کاربرد موتورهای جستجوی شما را با تغییر URL‌ها در نتایج جستجوی موتورهای جستجو بهبود می‌بخشد و امکان تجربه مرورگری سفارشی‌تر و کارآمدتر را فراهم می‌کند.

تغییر URL با استفاده از عبارت باقاعده (Regular Expression) انجام می‌شود.

<div align="center">
    <span>نتیجه جستجو بدون تغییر URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>نتیجه جستجو پس از تغییر URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### پشتیبانی از موتورهای جستجو

- [Google](https://www.google.com/supported_domains)
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
- [LibreY](https://github.com/Ahwxorg/LibreY/blob/main/instances.json)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

می‌توانید به صورت دستی انتخاب‌گر DOM را در کد اضافه کنید تا از موتورهای جستجوی دیگر پشتیبانی کنید.

نمی‌توان از [Bing](https://www.bing.com) پشتیبانی کرد، زیرا فقط لینک‌های میانی ارائه می‌دهد.

4get، Lilo و Entireweb URL‌های نمایش داده شده را متناسب با تغییر لینک‌ها تغییر نمی‌دهند. این مسئله به این دلیل وجود دارد که من هدفم این است که کد خود را تا حد امکان عمومی‌تر کنم، اما این موتورهای جستجو ساختار DOM غیرمعمولی برای نمایش URL‌ها دارند که پشتیبانی از این موتورها را با توجه به پایگاه کاربری نسبتاً کوچک‌شان، خسته‌کننده می‌کند.

> فقط یک یادداشت کناری، [Kagi](https://kagi.com) یک موتور جستجو با قابلیت تغییر مسیر URL داخلی است، ارزش امتحان کردن دارد. من یک کاربر Kagi هستم و از این محصول بسیار راضی هستم، بنابراین اینجا به آنها تبلیغ می‌کنم.

سایر موتورهای جستجو را پیدا کنید:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### تغییر مسیر داخلی

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (مثلاً [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (مثلاً [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (مثلاً [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (مثلاً [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (مثلاً [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (مثلاً [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (مثلاً [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (مثلاً [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (مثلاً [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (مثلاً [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (مثلاً [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (مثلاً [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (مثلاً [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (مثلاً [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (مثلاً [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (مثلاً [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (مثلاً [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (مثلاً [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (مثلاً [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (مثلاً [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (مثلاً [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (مثلاً [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

شما می‌توانید قوانین تغییر مسیر سفارشی خود را به اسکریپت اضافه کنید.

برای سایر رابط‌های جلویی دوستدار حریم خصوصی، ببینید:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

ارائه‌دهندگان خدمات:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

برای استفاده آسان، ما می‌توانیم از [Farside](https://github.com/benbusby/farside) استفاده کنیم که به طور خودکار به نسخه‌های کاری جایگزین‌های محوریت حریم خصوصی هدایت می‌کند به جای اینکه خودمان قواعد عبارت منظم را بنویسیم. با این حال، این روش از کنترل دقیق‌تر بر URL‌های مطابقت‌یافته پشتیبانی نمی‌کند.

> برای اطلاعات بیشتر، ویکی برای راه‌اندازی farside در [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/einaregilsson/Redirector

- نمونه الگوی ورودی: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- هدایت به: `https://farside.link/$1`

- اضافه کردن به اسکریپت:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- نمونه URL: `https://www.youtube.com/watch?v=abc123`

- نتیجه URL: `https://farside.link/youtube.com/watch?v=abc123`

---

## کارهای-باقی‌مانده

1. اضافه کردن پشتیبانی برای موتورهای جستجوی بیشتر.
2. بازنویسی کد برای آسان‌تر خواندن و تغییر دادن آن.

---

## ویکی

### urlModificationRules

قوانین تغییر URL در [عبارت باقاعده](https://fa.wikipedia.org/wiki/عبارت_باقاعده)

| متغیر       | توضیحات                                  |
| ----------- | ---------------------------------------- |
| matchRegex  | عبارت باقاعده برای مطابقت با URLهای اصلی |
| replaceWith | عبارت باقاعده برای جایگزینی              |

### selectorRules

قوانین [انتخاب‌گر](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) برای به‌روز رسانی عناصر DOM نتایج جستجوی موتورهای جستجو

| متغیر                      | توضیحات                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| selector                   | انتخاب‌گر برای عنصر DOM                                                                            |
| updateText                 | پرچم برای آیا باید متن یا مقدار href عنصر به‌روز رسانی شود                                         |
| childSelector              | انتخاب‌گر برای عنصر فرزند DOM زیر عنصر والد                                                        |
| updateChildText            | پرچم برای آیا باید متن داخلی عنصر فرزند به‌روز رسانی شود                                           |
| containProtocol            | پرچم برای آیا باید پروتکل (مثلاً https://) در دامنه وجود داشته باشد                                |
| useTopLevelDomain          | پرچم برای آیا از دامنه سطح بالا هنگام نمایش آدرس‌های اینترنتی استفاده شود                          |
| displayMethod              | لازم، روش نمایش URL<br/>روش 1: فرمت breadcrumb<br/>روش 2: URL کامل<br/>روش 3: URL کامل بدون پروتکل |
| multiElementsForUrlDisplay | پرچم برای آیا URL نمایش داده شده به چندین عنصر DOM تقسیم می‌شود                                    |

### searchEngines

لیست تعریف شده توسط کاربر از دامنه‌های موتور جستجو

| متغیر                    | توضیحات                                                                                                                                             |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| hosts                    | دامنه موتور جستجو                                                                                                                                   |
| resultContainerSelectors | اختیاری، مشخص کردن ظرف نتیجه جستجو DOM، برای محدود کردن دامنه مشاهده دینامیک                                                                        |
| attribute                | مشخص کردن ویژگی لینک URL اضافی در &lt;a&gt; به جز 'href' (مثلاً 'data-target')<br/>نیازی به مشخص کردن این نیست اگر تمام ویژگی‌های لینک 'href' هستند |
