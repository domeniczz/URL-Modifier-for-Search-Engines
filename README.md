# URL-Modifier-for-Search-Engines

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-sv.md">Svenska</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fi.md">Suomi</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Českina</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-he.md">עִבְרִית</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pl.md">Polski</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Română</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catalogue**:

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introduction)
- [Search Engine Support](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Search-Engine-Support)
- [Built-in Redirection](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Built-in-Redirection)
- [Todo](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Todo)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introduction

A [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script, install from Greasy Fork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

If you do not have Tampermonkey installed in your browser, you can install it from [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox Web Store](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey).

- GitHub Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Please give me a Star on GitHub or Codeberg if you found my script useful! Thank you! 😘</b>

This Tampermonkey script enhances your search engine usage by modifying URLs in the search result of search engines, redirecting to alternative sites, allowing for a more customized and efficient browsing experience. You can also add you custom URL modification rule to the script and are welcomed to commit your rules to this script to make it much more useful.

URL modification uses Regular Expression.

<div align="center">
    <span>Search result without URL modification:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Search result after URL modification:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

## Search Engine Support

- [Google](https://www.google.com)
- [Bing](https://www.bing.com)
- [Yahoo](https://search.yahoo.com)
- [Yahoo Japan ヤフー](https://www.yahoo.co.jp)
- [Baidu](https://www.baidu.com)
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
- [Whoogle](https://github.com/benbusby/whoogle-search/blob/main/misc/instances.txt)
- [eTools](https://www.etools.ch)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)
- [Qwant](https://www.qwant.com)
- [Ecosia](https://www.ecosia.org)
- [Oscobo](https://oscobo.com)
- [GOOD](https://good-search.org)
- [All the internet](https://www.alltheinternet.com)
- [Searchalot](https://www.searchalot.com)
- [AOL](https://www.aol.com)
- [OneSearch](https://www.onesearch.com)
- [Info](https://info.com)
- [OceanHero](https://oceanhero.today/search)
- [Swisscows](https://swisscows.com)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [TadaDoo](https://www.tadadoo.com)
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
- [Lycos](https://search.lycos.com)
- [AlohaFind](https://alohafind.com)
- [Murena Spot](https://spot.ecloud.global)
- [Qmamu](https://qmamu.com)
- [Carrot2](https://search.carrot2.org)
- [Nona](https://www.nona.de)
- [SAPO](https://www.sapo.pt)
- [Exalead](https://www.exalead.com/search/web/)
- [Biglobe ビッグローブ](https://www.biglobe.ne.jp)
- [Goo 検索](https://search.goo.ne.jp)
- [Walla! וואלה! חיפוש](https://search.walla.co.il)
- [Cốc Cốc](https://coccoc.com)
- [Seznam](https://www.seznam.cz)
- [StartSiden SØK](https://www.startsiden.no/sok)
- [Marginalia](https://search.marginalia.nu)
- [Mwmbl](https://mwmbl.org)
- [Naver 네이버](https://www.naver.com)
- [Gibiru](https://gibiru.com)
- [Lukol](https://www.lukol.com)
- [Draze](http://www.draze.com)
- [Yelliot](https://www.yelliot.com)
- [eFind](https://efind.com)
- [Fireball](https://fireball.de)
- [Freespoke](https://freespoke.com)
- [GoGoPrivate](https://gogoprivate.com)
- [Result Hunter](https://resulthunter.com)
- [GiveWater](https://www.givewater.com)
- [Excite](https://results.excite.com)
- [WebCrawler](https://www.webcrawler.com)
- [MetaCrawler](https://www.metacrawler.com)
- [Dogpile](https://www.dogpile.com)
- [Infospace](https://www.infospace.com)
- [RefSeek](https://www.refseek.com)
- [ZapMeta](https://www.zapmeta.com)
- [iZito](https://www.izito.com)
- [Ask](https://www.ask.com)
- [Pronto](https://www.pronto.com)
- [Anoox](https://anoox.com)
- [Kagi](https://kagi.com)

You can manually add DOM selector in the code to support other search engines.

For search engine Bing, if you get redirection link "https://www.bing.com/ck/a..." in search results, disabling "Open links in a new tab or window" in the Bing settings can get rid of it.

For search engines like Yahoo, Lycos, AlohaFind, the script support getting rid of redirection links and extract the real URL. For example, the Yahoo redirection link is "https://r.search.yahoo.com/...". If you do not use these search engines, you can choose to use [URL modification rules](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) without redirection link compatibility. BTW, you can see all built-in RegEx URL modification rules [here](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

For Baidu, the script can get rid of redirection link of text search results, but won't work for image and video results. Because the principle is extract the original URL link explicitly shown in the DOM elements of search results. Baidu does not provide original link explicitly for some results, thus, the script won't work for that kinds of results. FYI, tampermonkey script [AC-baidu_RedirectRemove](https://greasyfork.org/en/scripts/14178-ac-baidu-重定向优化百度搜狗谷歌必应搜索-favicon-双列) can get rid of all uncessary redirection for Baidu.

> Just a side note, [Kagi](https://kagi.com) is a search engine with built-in URL redirection functionality, worth trying out. I am a user of Kagi, and I am very satisfied with this product, so I'm giving them a shout-out here.

Find more search engines:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

## Built-in Redirection

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (e.g. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (e.g. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) ([Has been discontinued](https://github.com/zedeus/nitter/issues/1175))
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
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (e.g. [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (e.g. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (e.g. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (e.g. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (e.g. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (e.g. [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

You can add custom redirection rules into the script yourself.

Other alternatives privacy friendly frontends, see:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Service providers:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

FWIW, you could use [Farside](https://github.com/benbusby/farside) that automatically redirect to working instances of privacy-oriented alternative frontends instead of writing regular expression rules on our own.

However, this method does not support finer-grained control over matched URLs and it is really slow since a redirection by farside is needed. If you want to use this anyway, you can uncomment the corresponding part in `urlModificationRules`.

- Include pattern example: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Redirect to: `https://farside.link/$1`

- Add to script:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Example URL: `https://www.youtube.com/watch?v=abc123`

- Result URL: `https://farside.link/youtube.com/watch?v=abc123`

> FYI, wiki for setting up farside in [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

---

## Todo

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

| Variable                             | Description                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | selector for DOM element                                     |
| parentSelector                       | selector for parent of link element and text element         |
| linkNodeSelector                     | selector for link element under the the element specified by `parentSelector` |
| textNodeSelector                     | selector for text element under the the element specified by `parentSelector` |
| updateChildText                      | flag for whether to update the inner text of the child element specified by `childSelector` |
| childSelector                        | selector for child DOM element under the element specified by `selector` or `textNodeSelector` |
| updateTextWithoutOverwrite           | flag for update the textnode without overwriting other nodes under the DOM element |
| updateTextByOverwritecontainProtocol | flag for update the content by overwriting everything under the DOM elementflag for whether to contain protocol (e.g. https://) in the domain |
| useTopLevelDomain                    | flag for whether to use the top-level domain when displaying URLs |
| urlDisplayMethod                     | required, URL display method<br/>method 1: breadcrumb format<br/>method 2: full URL<br/>method 3: full URL without protocol |
| multiElementsForUrlDisplay           | flag for whether the displayed URL is separated into multiple DOM elements<br/>method 1: URL parts are scattered into parallel elements<br/>method 2: URL parts are scattered into non-parallel elements<br/>method 3: same as method 2, but update elements without clearing their original contents |

### searchEngines

User-defined list of search engine domains

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | search engine's domain                                       |
| resultContainerSelectors | optional, set search result container DOM, to narrow down the range of dynamic observation |
| attribute                | specify additional URL link attribute in &lt;a&gt; other than 'href' (e.g. 'data-target')<br/>no need to specify this if all the link attributes are 'href' |
