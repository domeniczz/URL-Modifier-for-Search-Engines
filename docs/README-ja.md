# 検索エンジン用 URL 修正

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
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

**カタログ**:

- [イントロダクション](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md#イントロダクション)
- [やるべきこと](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md#やるべきこと)
- [ウィキ](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md#ウィキ)

## イントロダクション

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey)のスクリプト、Greasy Fork からインストール: [検索エンジン用 URL 修正](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines)。

- GitHub リポジトリ: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

他の検索エンジンに対応するために、コードに DOM セレクタを手動で追加できます。

[Bing](https://www.bing.com) は中間リンクのみを提供しているため、対応できません。

4get、Lilo、および Entireweb は、リンクが変更された場合に表示される URL をそれに応じて変更しません。この問題は、私ができるだけ一般化されたコードを作成しようとしているために存在しますが、これらの検索エンジンは URL を表示するための特異な DOM 構造を持っており、比較的少ないユーザーベースを考慮するとこれらのエンジンをサポートすることは面倒です。

> ちなみに、[Kagi](https://kagi.com) は組み込みの URL リダイレクト機能を備えた検索エンジンです。試してみる価値があります。私は Kagi のユーザーで、この製品に非常に満足していますので、ここで彼らにシャウトアウトしています。

検索エンジンをもっと見つける：

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 組み込みのリダイレクト

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (例えば [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (例えば [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (例えば [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (例えば [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (例えば [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (例えば [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (例えば [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (例えば [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (例えば [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (例えば [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (例えば [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (例えば [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (例えば [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (例えば [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (例えば [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (例えば [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (例えば [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (例えば [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (例えば [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (例えば [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (例えば [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

スクリプトにカスタムのリダイレクションルールを追加できます。

プライバシーに焦点を当てた他の代替フロントエンドについては、こちらを参照してください：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

サービス提供者：

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

---

## やるべきこと

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
| attribute                | &lt;a&gt; タグの 'href' 以外の追加の URL リンク属性を指定します（例：'data-target'）<br/>すべてのリンク属性が 'href' の場合は、これを指定する必要はありません |

