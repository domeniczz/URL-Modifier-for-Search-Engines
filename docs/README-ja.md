# 検索エンジン用 URL 修正

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**カタログ**:

- [イントロダクション](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#イントロダクション)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [ウィキ](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#ウィキ)

## イントロダクション

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey)のスクリプト、GreasyFork からインストール: [検索エンジン用 URL 修正](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

- Github リポジトリ: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg リポジトリ: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

この Tampermonkey スクリプトは、検索エンジンの検索結果の URL を変更し、別のサイトにリダイレクトすることで、よりカスタマイズされた効率的なブラウジング体験を提供します。

URL の変更正規表現を使用します。

<div align="center">
    <span>URL 変更なしの検索結果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>URL 変更後の検索結果：</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### 対応する検索エンジン

- [Google](https://www.google.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Mojeek](https://www.mojeek.com)

他の検索エンジンに対応するために、コードに DOM セレクタを手動で追加できます。

[Bing](https://www.bing.com)は中間リンクのみを提供しているため、対応できません。

### 組み込みのリダイレクト

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (instance [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (instance [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instance [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (instance [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (instance [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (instance [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (instance [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (instance [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (instance [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (instance [sd.vern.cc](https://sd.vern.cc))
- ArXiv PDF -> ArXiv Abstract
- ...

スクリプトにカスタムのリダイレクションルールを追加できます。

プライバシーに焦点を当てた他の代替フロントエンドについては、こちらを参照してください：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## TODO

1. より多くの検索エンジンに対応する。
2. コードをより読みやすく、変更しやすくリファクタリングする。

---

## ウィキ

### urlModificationRules

[正規表現](https://ja.wikipedia.org/wiki/正規表現)の URL 変更ルール

| 変数        | 説明                          |
| ----------- | ----------------------------- |
| matchRegex  | 元の URL にマッチする正規表現 |
| replaceWith | 置換のための正規表現          |

### selectorRules

検索エンジンの結果に対する DOM 要素の[セレクタ](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)ルール

| 変数            | 説明                                                         |
| --------------- | ------------------------------------------------------------ |
| selector        | DOM 要素のセレクタ                                           |
| updateText      | 要素のテキストまたは href 値を更新するかどうかのフラグ       |
| childSelector   | 親要素の下の子 DOM 要素のセレクタ                            |
| updateChildText | 子要素の内部テキストを更新するかどうかのフラグ               |
| containProtocol | ドメインにプロトコル（例：https://）を含むかどうかのフラグ   |
| displayMethod   | 必須、URL 表示方法<br/>方法1：パンくずリスト形式<br/>方法2：フル URL<br/>方法3：プロトコルなしのフル URL |
| multiElementsForUrlDisplay | URL 表示のために複数の DOM 要素に分割されているかのフラグ |

### searchEngines

ユーザー定義の検索エンジンドメインリスト

| 変数                     | 説明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | 検索エンジンのドメイン                                       |
| resultContainerSelectors | オプション、検索結果コンテナの DOM を設定し、動的観察の範囲を狭める |

