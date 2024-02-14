# 搜索引擎結果 URL 修改器

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-he.md">עִבְרִית</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pl.md">Polski</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Român</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**目錄**：

- [介紹](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md#介紹)
- [待辦事項](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md#待辦事項)
- [維基](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md#維基)

## 介紹

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) 腳本，從 Greasy Fork 安裝：[搜索引擎結果 URL 修改器](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

如果您的瀏覽器中沒有安裝 Tampermonkey，您可以從 [Chrome 網上應用店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)或 [Firefox 網上應用店](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)進行安裝。

- GitHub 儲存庫: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 儲存庫: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>如果您覺得我的腳本有用，請在 GitHub 或 Codeberg 上給我一個星標！謝謝！😘</b>

這個 Tampermonkey 腳本通過修改搜索引擎結果中的 URL，重定向到替代網站，從而增強了您的搜索引擎使用體驗，允許更自定義和高效的瀏覽體驗。您還可以添加自定義的 URL 修改規則到腳本中，並歡迎將您的規則提交給這個腳本，使其變得更加有用。

URL 修改使用正則表達式。

<div align="center">
    <span>不修改 URL 的搜尋結果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>修改 URL 的搜尋結果後：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### 支持的搜索引擎

- [Google](https://www.google.com)
- [Yahoo](https://search.yahoo.com)
- [Yahoo Japan ヤフー](https://www.yahoo.co.jp)
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
- [Proton](https://www.pronto.com)
- [Anoox](https://anoox.com)

您可以在代碼中手動添加 DOM 選擇器以支援其他搜索引擎。

無法支援 [Bing](https://www.bing.com)和[Baidu](https://www.baidu.com)，因為它們只提供重定向鏈接，這些鏈接並沒有明確顯示目標 URL。

對於像 Yahoo、Lycos、AlohaFind 這樣的搜索引擎，該腳本支持去除重定向鏈接並提取真實 URL。例如，Yahoo 的重定向鏈接是 “https://r.search.yahoo.com/...”。如果您不使用這些搜索引擎，您可以選擇使用 [URL 修改規則](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js)來避免重定向鏈接兼容性問題。順便說一下，您可以在[這裡](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt)查看所有內置的 RegEx URL 修改規則。

> 順便一提，[Kagi](https://kagi.com) 是一個內建 URL 重定向功能的搜尋引擎，值得一試。我是 Kagi 的用戶，我對這個產品很滿意，因此在這裡為他們做個廣告。

尋找更多的搜索引擎：

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 內置重定向

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (例：[safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (例：[quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (例：[nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (例：[code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (例：[yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (例：[hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (例：[ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (例：[ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (例：[bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (例：[rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (例：[hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (例：[antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (例：[nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (例：[sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (例：[ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (例：[dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (例：[tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (例：[rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (例：[pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (例：[mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (例：[sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (例：[uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

您可以在腳本中自行添加自定義重定向規則。

其他隱私前端替代，請參見：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

服務提供者：

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

值得一提的是，您可以使用 [Farside](https://github.com/benbusby/farside)，它能自動重定向到運作中的隱私導向的替代前端，而無需我們自己編寫正則表達式規則。

然而，這種方法不支援對匹配的 URL 進行更細緻的控制，且因需要通過 farside 進行重定向，這實際上相當慢。如果您還是想使用這個方法，可以在 `urlModificationRules` 中取消註釋相應的部分。

- 包含模式範例：`^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- 重定向到：`https://farside.link/$1`

- 添加到腳本：
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- 範例 URL：`https://www.youtube.com/watch?v=abc123`

- 結果 URL：`https://farside.link/youtube.com/watch?v=abc123`

> 參考資料，關於在 [Redirector](https://github.com/einaregilsson/Redirector) 中設置 farside 的 wiki：https://github.com/benbusby/farside/wiki/Browser-Extension

---

## 待辦事項

1. 增加對更多搜索引擎的支援。
2. 重構代碼以使其更易於閱讀和修改。

---

## 維基

### urlModificationRules

[正則表達式](https://zh.wikipedia.org/zh-tw/正则表达式) 的URL 修改規則

| 參數        | 描述                          |
| ----------- | ----------------------------- |
| matchRegex  | 用於匹配原始 URL 的正則表達式 |
| replaceWith | 用於替換的正則表達式          |

### selectorRules

用於搜索引擎結果的 DOM 元素更新的[選擇器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)規則

| 參數                                 | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM 元素的選擇器                                             |
| parentSelector                       | 鏈結元素和文本元素的父元素的選擇器                           |
| linkNodeSelector                     | 在由 `parentSelector` 指定的元素下的鏈結元素的選擇器         |
| textNodeSelector                     | 在由 `parentSelector` 指定的元素下的文本元素的選擇器         |
| updateChildText                      | 是否更新由 `childSelector` 指定的子元素的內部文本的標誌      |
| childSelector                        | 在由 `selector` 或 `textNodeSelector` 指定的元素下的子 DOM 元素的選擇器 |
| updateTextWithoutOverwrite           | 更新文本節點而不覆蓋其他節點的標誌                           |
| updateTextByOverwritecontainProtocol | 通過覆蓋 DOM 元素下的所有內容來更新內容的標誌，是否包含協議（例如：https://）的標誌 |
| useTopLevelDomain                    | 是否在顯示 URL 時使用頂級域名的標誌                          |
| urlDisplayMethod                     | 必填，URL 顯示方法<br/>方法 1：麵包屑格式<br/>方法 2：完整 URL<br/>方法 3：不含協議的完整 URL |
| multiElementsForUrlDisplay           | 顯示的 URL 是否分成多個 DOM 元素的標誌<br/>方法 1：URL 部分被分散到平行元素中<br/>方法 2：URL 部分被分散到非平行元素中<br/>方法 3：與方法 2 相同，但更新元素時不清除它們的原始內容 |

### searchEngines

用戶定義的搜索引擎域名列表

| 參數                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | 搜索引擎的域名                                               |
| resultContainerSelectors | 可選，設置搜索結果容器 DOM，以縮小動態觀察範圍               |
| attribute                | 指定 &lt;a&gt; 中的其他 URL 鏈接屬性，而不僅僅是 'href'（如 'data-target'）<br/>如果所有鏈接屬性都是 'href'， |
