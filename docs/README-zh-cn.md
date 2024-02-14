# 搜索引擎结果 URL 修改器

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
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

**目录**：

- [简介](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md#简介)
- [待办事项](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md#待办事项)
- [维基](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md#维基)

## 简介

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) 脚本，从 Greasy Fork 安装：[搜索引擎结果 URL 修改器](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

如果您的浏览器中没有安装 Tampermonkey，您可以从 [Chrome 网上应用店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)或 [Firefox 网上应用店](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)进行安装。

- GitHub 仓库: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 仓库: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>如果您觉得我的脚本有用，请在 GitHub 或 Codeberg 上给我一个星标！谢谢！😘</b>

这个 Tampermonkey 脚本通过修改搜索引擎结果中的 URL，重定向到替代网站，从而增强了您的搜索引擎使用体验，允许更自定义和高效的浏览体验。您还可以添加自定义的 URL 修改规则到脚本中，并欢迎将您的规则提交给这个脚本，使其变得更加有用。

URL 修改使用正则表达式。

<div align="center">
    <span>不修改 URL 的搜索结果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>修改 URL 的搜索结果后：</span><br/>
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

您可以手动在代码中添加 DOM 选择器以支持其他搜索引擎。

无法支持[Bing](https://www.bing.com)和[Baidu](https://www.baidu.com)，因为它们只提供重定向链接，这些链接并没有明确显示目标 URL。

对于像 Yahoo、Lycos、AlohaFind 这样的搜索引擎，该脚本支持去除重定向链接并提取真实 URL。例如，Yahoo 的重定向链接是 “https://r.search.yahoo.com/...”。如果您不使用这些搜索引擎，您可以选择使用 [URL 修改规则](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js)来避免重定向链接兼容性问题。顺便说一下，您可以在[这里](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt)查看所有内置的 RegEx URL 修改规则。

> 顺便一提，[Kagi](https://kagi.com) 是一个内置 URL 重定向功能的搜索引擎，值得一试。我是 Kagi 的用户，我对这个产品很满意，因此在这里给他们做个广告。

寻找更多的搜索引擎：

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 内置重定向

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

您可以自行添加自定义重定向规则到脚本中。

其他隐私前端替代，参见：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

服务提供者：

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

值得一提的是，您可以使用 [Farside](https://github.com/benbusby/farside)，它可以自动重定向到工作中的隐私导向的替代前端，而不需要我们自己编写正则表达式规则。

然而，这种方法不支持对匹配的 URL 进行更细致的控制，而且由于需要通过 farside 进行重定向，这实际上是相当慢的。如果您还是想使用这个方法，可以在 `urlModificationRules` 中取消注释相应的部分。

- 包含模式示例：`^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- 重定向到：`https://farside.link/$1`

- 添加到脚本：
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- 示例 URL：`https://www.youtube.com/watch?v=abc123`

- 结果 URL：`https://farside.link/youtube.com/watch?v=abc123`

> 参考信息，关于在 [Redirector](https://github.com/einaregilsson/Redirector) 中设置 farside 的 wiki：https://github.com/benbusby/farside/wiki/Browser-Extension

---

## 待办事项

1. 增加对更多搜索引擎的支持。
2. 重构代码，使其更易于阅读和修改。

---

## 维基

### urlModificationRules

[正则表达式](https://zh.wikipedia.org/zh-cn/正则表达式)的 URL 修改规则

| 参数        | 描述                      |
| ----------- | ------------------------- |
| matchRegex  | 匹配原始 URL 的正则表达式 |
| replaceWith | 替换的正则表达式          |

### selectorRules

搜索引擎结果需要更新的 DOM 元素的[选择器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)规则

| 参数                                 | 描述                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM 元素的选择器                                             |
| parentSelector                       | 链接元素和文本元素的父元素的选择器                           |
| linkNodeSelector                     | 在 `parentSelector` 指定的元素下的链接元素的选择器           |
| textNodeSelector                     | 在 `parentSelector` 指定的元素下的文本元素的选择器           |
| updateChildText                      | 是否更新由 `childSelector` 指定的子元素的内部文本的标志      |
| childSelector                        | 在由 `selector` 或 `textNodeSelector` 指定的元素下的子 DOM 元素的选择器 |
| updateTextWithoutOverwrite           | 更新文本节点而不覆盖 DOM 元素下的其他节点的标志              |
| updateTextByOverwritecontainProtocol | 通过覆盖 DOM 元素下所有内容来更新内容的标志，标志是否包含协议（例如：https://） |
| useTopLevelDomain                    | 是否在显示 URL 时使用顶级域名的标志                          |
| urlDisplayMethod                     | 必需，URL 显示方法<br/>方法 1：面包屑格式<br/>方法 2：完整 URL<br/>方法 3：不带协议的完整URL |
| multiElementsForUrlDisplay           | 显示的 URL 是否分散到多个 DOM 元素中的标志<br/>方法 1：URL 部分被分散到并行元素中<br/>方法 2：URL 部分被分散到非并行元素中<br/>方法 3：与方法 2 相同，但更新元素时不清除它们的原始内容 |

### searchEngines

用户定义的搜索引擎域名列表

| 变量                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | 搜索引擎的域名                                               |
| resultContainerSelectors | 可选，设置搜索结果容器DOM，以缩小动态观察范围                |
| attribute                | 指定 &lt;a&gt; 中的其他 URL 链接属性，除了 'href' 之外的属性（如 'data-target'）<br/>如果所有链接属性都是 'href'，则无需指定此项 |
