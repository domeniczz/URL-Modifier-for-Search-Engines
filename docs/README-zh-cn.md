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

修改搜索引擎搜索结果中的 URL，重定向到其他网站或进行其他有用的修改。

URL 修改使用正则表达式。

### 支持的搜索引擎

- [Google](https://www.google.com)
- [SearXNG](https://searx.space) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

您可以手动在代码中添加 DOM 选择器以支持其他搜索引擎。

无法支持 [Bing](https://www.bing.com)，因为它只提供中间链接。

### 内置重定向

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (实例 [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (实例 [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (实例 [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

您可以自行添加自定义重定向规则到脚本中。

其他隐私友好的前端替代品，参见 [LibRedirect](https://libredirect.github.io/index.html)。

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
| hasSubResults     | 是否有子结果的标志                |
| subResultSelector | 子结果选择器                      |

### searchEngines

用户定义的搜索引擎域名列表

| 变量                     | 描述                                          |
| ------------------------ | --------------------------------------------- |
| hosts                    | 搜索引擎的域名                                |
| resultContainerSelectors | 可选，设置搜索结果容器DOM，以缩小动态观察范围 |