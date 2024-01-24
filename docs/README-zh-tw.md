# 搜索引擎結果 URL 修改器

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**目錄**：

- [介紹](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#介紹)
- [待辦事項](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#待辦事項)
- [維基](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#維基)

## 介紹

一個[Tampermonkey](https://github.com/Tampermonkey/tampermonkey)腳本，從 GreasyFork 安裝：[搜索引擎結果 URL 修改器](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

- Github 儲存庫: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 儲存庫: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

這個 Tampermonkey 腳本通過修改搜索引擎搜索結果中的 URL，重新導向到替代網站，增強了您的搜索引擎使用體驗。允許更自定義和高效的瀏覽體驗。

URL 修改使用正則表達式。

<div align="center">
    <span>不修改 URL 的搜尋結果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>修改 URL 的搜尋結果後：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### 支持的搜索引擎

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
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

您可以在代碼中手動添加 DOM 選擇器以支援其他搜索引擎。

無法支援 [Bing](https://www.bing.com)，因為它只提供中間鏈接。

> 順便一提，[Kagi](https://kagi.com) 是一個內建 URL 重定向功能的搜尋引擎，值得一試。我是 Kagi 的用戶，我對這個產品很滿意，因此在這裡為他們做個廣告。

尋找更多的搜索引擎：

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 內置重定向

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
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- ArXiv PDF -> ArXiv Abstract
- ...

您可以在腳本中自行添加自定義重定向規則。

其他隱私前端替代，請參見：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## 待辦事項

1. 增加對更多搜索引擎的支援。
2. 重構代碼以使其更易於閱讀和修改。

---

## 維基

### urlModificationRules

[正則表達式](https://zh.wikipedia.org/zh-tw/正则表达式) 的URL 修改規則

| 變量        | 描述                          |
| ----------- | ----------------------------- |
| matchRegex  | 用於匹配原始 URL 的正則表達式 |
| replaceWith | 用於替換的正則表達式          |

### selectorRules

用於搜索引擎結果的 DOM 元素更新的[選擇器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)規則

| 變量            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| selector        | DOM 元素的選擇器                                             |
| updateText      | 是否更新元素的文本或 href 值的標誌                           |
| childSelector   | 父元素下子 DOM 元素的選擇器                                  |
| updateChildText | 是否更新子元素的內部文本的標誌                               |
| containProtocol | 是否在域名中包含協議（例如https://）的標誌                   |
| displayMethod   | 必需，URL 顯示方法<br/>方法1：麵包屑格式<br/>方法2：完整 URL<br/>方法3：不帶協議的完整 URL |
| multiElementsForUrlDisplay | 是否將顯示的 URL 分割成多個 DOM 元素 |

### searchEngines

用戶定義的搜索引擎域名列表

| 變量                     | 描述                                           |
| ------------------------ | ---------------------------------------------- |
| hosts                    | 搜索引擎的域名                                 |
| resultContainerSelectors | 可選，設置搜索結果容器 DOM，以縮小動態觀察範圍 |
| attribute                | 指定 &lt;a&gt; 中的其他 URL 鏈接屬性，而不僅僅是 'href'（如 'data-target'）<br/>如果所有鏈接屬性都是 'href'，

