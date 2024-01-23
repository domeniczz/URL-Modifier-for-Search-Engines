# 搜索引擎结果 URL 修改器

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
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

**目录**：

- [简介](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#简介)
- [待办事项](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#待办事项)
- [维基](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#维基)

## 简介

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) 脚本，从 GreasyFork 安装：[搜索引擎结果 URL 修改器](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

- Github 仓库: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 仓库: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

修改搜索引擎搜索结果中的 URL，重定向到其他网站或进行其他有用的修改。

URL 修改使用正则表达式。

<div align="center">
    <span>不修改 URL 的搜索结果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>修改 URL 的搜索结果后：</span><br/>
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
- [Swisscows](https://swisscows.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

您可以手动在代码中添加 DOM 选择器以支持其他搜索引擎。

无法支持 [Bing](https://www.bing.com)，因为它只提供中间链接。

> 顺便一提，[Kagi](https://kagi.com) 是一个内置 URL 重定向功能的搜索引擎，值得一试。我是 Kagi 的用户，我对这个产品很满意，因此在这里给他们做个广告。

### 内置重定向

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (e.g. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (e.g. [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (e.g. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (e.g. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (e.g. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (e.g. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- ArXiv PDF -> ArXiv Abstract
- ...

您可以自行添加自定义重定向规则到脚本中。

其他隐私前端替代，参见：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## 待办事项

1. 增加对更多搜索引擎的支持。
2. 重构代码，使其更易于阅读和修改。

---

## 维基

### urlModificationRules

[正则表达式](https://zh.wikipedia.org/zh-cn/正则表达式)的 URL 修改规则

| 变量        | 描述                      |
| ----------- | ------------------------- |
| matchRegex  | 匹配原始 URL 的正则表达式 |
| replaceWith | 替换的正则表达式          |

### selectorRules

搜索引擎结果需要更新的 DOM 元素的[选择器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)规则

| 变量            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| selector        | DOM 元素的选择器                                             |
| updateText      | 是否更新元素的文本或 href 值的标志                           |
| childSelector   | 父元素下子 DOM 元素的选择器                                  |
| updateChildText | 是否更新子元素的内部文本的标志                               |
| containProtocol | 是否在域中包含协议（例如 https://）的标志                    |
| displayMethod   | 必需，URL 显示方法<br/>方法1：面包屑格式<br/>方法2：完整 URL<br/>方法3：无协议的完整 URL |
| multiElementsForUrlDisplay | 是否将显示的 URL 分成多个 DOM 元素 |

### searchEngines

用户定义的搜索引擎域名列表

| 变量                     | 描述                                          |
| ------------------------ | --------------------------------------------- |
| hosts                    | 搜索引擎的域名                                |
| resultContainerSelectors | 可选，设置搜索结果容器DOM，以缩小动态观察范围 |
| attribute                | 指定 &lt;a&gt; 中的其他 URL 链接属性，除了 'href' 之外的属性（如 'data-target'）<br/>如果所有链接属性都是 'href'，则无需指定此项 |

