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

他の検索エンジンに対応するために、コードに DOM セレクタを手動で追加できます。

[Bing](https://www.bing.com) は中間リンクのみを提供しているため、対応できません。

Yahoo 検索 および Yahoo Japan 検索 での URL の完全なサポート変更、Yahoo のリダイレクション URL（https://r.search.yahoo.com/...）を取り除くサポートを含む、実際の URL を抽出します。Yahoo を使用しない場合は、Yahoo の互換性なしで [URL 変更ルール](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/non-yahoo-urlModificationRules.js)を使用することを選択できます。

4get は、リンクが変更された場合に表示される URL をそれに応じて変更しません。この問題は、私ができるだけ一般化されたコードを作成しようとしているために存在しますが、これらの検索エンジンは URL を表示するための特異な DOM 構造を持っており、比較的少ないユーザーベースを考慮するとこれらのエンジンをサポートすることは面倒です。

> ちなみに、[Kagi](https://kagi.com) は組み込みの URL リダイレクト機能を備えた検索エンジンです。試してみる価値があります。私は Kagi のユーザーで、この製品に非常に満足していますので、ここで彼らにシャウトアウトしています。

検索エンジンをもっと見つける：

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 組み込みのリダイレクト

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (例えば [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (例えば [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (例えば [nitter.catsarch.com](https://nitter.catsarch.com))
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
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

ちなみに、[Farside](https://github.com/benbusby/farside) を使用することができます。これは、自分たちで正規表現ルールを書く代わりに、プライバシー志向の代替フロントエンドへ自動的にリダイレクトするものです。

しかし、この方法ではマッチした URL に対する細かな制御がサポートされておらず、Farside によるリダイレクトが必要なため、実際には非常に遅いです。それでもこれを使用したい場合は、`urlModificationRules` の該当する部分のコメントを解除することができます。

- インクルードパターンの例：`^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- リダイレクト先：`https://farside.link/$1`

- スクリプトへの追加：
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- 例のURL：`https://www.youtube.com/watch?v=abc123`

- 結果のURL：`https://farside.link/youtube.com/watch?v=abc123`

> FYI, Farsideを[Redirector](https://github.com/einaregilsson/Redirector)で設定するためのwiki: https://github.com/benbusby/farside/wiki/Browser-Extension

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

| 変数                                 | 説明                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM 要素のセレクター                                         |
| parentSelector                       | リンク要素とテキスト要素の親要素のセレクター                 |
| linkNodeSelector                     | `parentSelector` で指定された要素の下のリンク要素のセレクター |
| textNodeSelector                     | `parentSelector` で指定された要素の下のテキスト要素のセレクター |
| updateChildText                      | `childSelector` で指定された子要素の内部テキストを更新するかどうかのフラグ |
| childSelector                        | `selector` または `textNodeSelector` で指定された要素の下の子 DOM 要素のセレクター |
| updateTextWithoutOverwrite           | DOM 要素の下の他のノードを上書きせずにテキストノードを更新するフラグ |
| updateTextByOverwritecontainProtocol | DOM 要素の下のすべてを上書きしてコンテンツを更新するフラグ<br/>ドメインにプロトコル（例：https://）を含むかどうかのフラグ |
| useTopLevelDomain                    | URL 表示時にトップレベルドメインを使用するかどうかのフラグ   |
| urlDisplayMethod                     | 必須、URL 表示方法<br/>方法 1: パンくずリスト形式<br/>方法 2: フル URL<br/>方法 3: プロトコルなしのフル URL |
| multiElementsForUrlDisplay           | 表示される URL が複数の DOM 要素に分割されるかどうかのフラグ<br/>方法 1：URL の部分が並行要素に散在<br/>方法 2：URL の部分が非並行要素に散在<br/>方法 3：方法 2 と同じですが、元の内容をクリアせずに要素を更新 |

### searchEngines

ユーザー定義の検索エンジンドメインリスト

| 変数                     | 説明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | 検索エンジンのドメイン                                       |
| resultContainerSelectors | オプション、検索結果コンテナの DOM を設定し、動的観察の範囲を狭める |
| attribute                | &lt;a&gt; タグの 'href' 以外の追加の URL リンク属性を指定します（例：'data-target'）<br/>すべてのリンク属性が 'href' の場合は、これを指定する必要はありません |
