# 검색 엔진용 URL 수정기

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-sv.md">Svenska</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fi.md">Suomi</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a><br/>
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

**목록**:

- [소개](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md#소개)
- [할 일](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md#할-일)
- [위키](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md#위키)

## 소개

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) 스크립트, Greasy Fork 에서 설치: [검색 엔진용 URL 수정기](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

브라우저에 Tampermonkey 가 설치되어 있지 않다면, [Chrome 웹 스토어](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 또는 [Firefox 웹 스토어](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)에서 설치할 수 있습니다.

- GitHub 저장소: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 저장소: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>제 스크립트가 유용했다면 GitHub 이나 Codeberg 에서 별표를 주세요! 감사합니다! 😘</b>

이 Tampermonkey 스크립트는 검색 엔진의 검색 결과에서 URL 을 수정하여 대체 사이트로 리디렉션함으로써 검색 엔진 사용을 개선하고 더 맞춤화되고 효율적인 브라우징 경험을 가능하게 합니다. 또한 사용자만의 URL 수정 규칙을 스크립트에 추가할 수 있으며, 이 스크립트를 더 유용하게 만들기 위해 규칙을 커밋하는 것을 환영합니다.

URL 수정은 정규 표현식을 사용합니다.

<div align="center">
    <span>URL 수정 없는 검색 결과:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>URL 수정 후 검색 결과:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### 검색 엔진 지원

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

다른 검색 엔진을 지원하기 위해 코드에 DOM 선택자를 수동으로 추가할 수 있습니다.

[Bing](https://www.bing.com) 은 중간 링크만 제공하기 때문에 지원할 수 없습니다.

Yahoo, Lycos, AlohaFind 와 같은 검색 엔진의 경우, 이 스크립트는 리디렉션 링크를 제거하고 실제 URL을 추출하는 기능을 지원합니다. 예를 들어, Yahoo 의 리디렉션 링크는 "https://r.search.yahoo.com/..." 입니다. 이 검색 엔진들을 사용하지 않는 경우, 리디렉션 링크 호환성 없이 [URL 수정 규칙](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js)을 사용할 수 있습니다. 참고로, 모든 내장 RegEx URL 수정 규칙은 [여기](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt)에서 볼 수 있습니다.

> 한 가지 부가 정보로, [Kagi](https://kagi.com) 는 내장된 URL 리다이렉션 기능이 있는 검색 엔진으로, 시도해보기 가치가 있습니다. 저는 Kagi 의 사용자이며 이 제품에 매우 만족하고 있으므로 여기에서 그들에게 소개합니다.

더 많은 검색 엔진 찾기:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### 내장 리디렉션

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (예를 들어 [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (예를 들어 [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (예를 들어 [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (예를 들어 [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (예를 들어 [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (예를 들어 [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (예를 들어 [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (예를 들어 [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (예를 들어 [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (예를 들어 [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (예를 들어 [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (예를 들어 [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (예를 들어 [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (예를 들어 [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (예를 들어 [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (예를 들어 [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (예를 들어 [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (예를 들어 [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (예를 들어 [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (예를 들어 [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (예를 들어 [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (예를 들어 [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

스크립트에 사용자 정의 리디렉션 규칙을 추가할 수 있습니다.

기타 개인정보 보호에 중점을 둔 대체 웹사이트 프런트엔드는 다음을 참조하세요：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

서비스 제공업체:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

참고로, 우리가 직접 정규 표현식 규칙을 작성하는 대신, 프라이버시 지향적인 대체 프론트엔드로 자동으로 리디렉션하는 [Farside](https://github.com/benbusby/farside) 를 사용할 수 있습니다.

그러나 이 방법은 일치하는 URL 에 대한 미세한 제어를 지원하지 않으며, Farside 를 통한 리디렉션이 필요하기 때문에 실제로 매우 느립니다. 이 방법을 사용하고 싶다면, `urlModificationRules` 에서 해당 부분의 주석을 해제할 수 있습니다.

- 포함 패턴 예시: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- 리디렉트 대상: `https://farside.link/$1`

- 스크립트에 추가:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- 예시 URL: `https://www.youtube.com/watch?v=abc123`

- 결과 URL: `https://farside.link/youtube.com/watch?v=abc123`

> FYI, [Redirector](https://github.com/einaregilsson/Redirector)에서 farside 설정을 위한 위키: https://github.com/benbusby/farside/wiki/Browser-Extension

---

## 할 일

1. 더 많은 검색 엔진에 대한 지원 추가.
2. 코드를 읽고 수정하기 쉽도록 리팩토링.

---

## 위키

### urlModificationRules

[정규 표현식](https://ko.wikipedia.org/wiki/정규_표현식) 을 사용한 URL 수정 규칙

| 변수        | 설명                             |
| ----------- | -------------------------------- |
| matchRegex  | 원본 URL 과 일치하는 정규 표현식 |
| replaceWith | 대체를 위한 정규 표현식          |

### selectorRules

검색 엔진 결과를 위한 DOM 요소 업데이트용 [선택자](https://developer.mozilla.org/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) 규칙

| 변수                                 | 설명                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM 요소의 선택자                                            |
| parentSelector                       | 링크 요소와 텍스트 요소의 부모 요소에 대한 선택자            |
| linkNodeSelector                     | `parentSelector` 에 의해 지정된 요소 아래의 링크 요소에 대한 선택자 |
| textNodeSelector                     | `parentSelector` 에 의해 지정된 요소 아래의 텍스트 요소에 대한 선택자 |
| updateChildText                      | `childSelector` 에 의해 지정된 자식 요소의 내부 텍스트를 업데이트할지 여부의 플래그 |
| childSelector                        | `selector` 또는 `textNodeSelector` 에 의해 지정된 요소 아래의 자식 DOM 요소에 대한 선택자 |
| updateTextWithoutOverwrite           | DOM 요소 아래의 다른 노드를 덮어쓰지 않고 textnode 를 업데이트할지 여부의 플래그 |
| updateTextByOverwritecontainProtocol | 도메인을 표시할 때 프로토콜 (예: https://) 을 포함할지 여부의 플래그 |
| useTopLevelDomain                    | URL 을 표시할 때 최상위 도메인을 사용할지 여부의 플래그      |
| urlDisplayMethod                     | 필수, URL 표시 방법<br/>방법 1: 빵 부스러기 형식<br/>방법 2: 전체 URL<br/>방법 3: 프로토콜 없는 전체 URL |
| multiElementsForUrlDisplay           | 표시된 URL 이 여러 DOM 요소로 분리되어 있는지 여부의 플래그<br/>방법 1: URL 부분이 병렬 요소로 분산됨<br/>방법 2: URL 부분이 비병렬 요소로 분산됨<br/>방법 3: 방법 2 와 동일하지만 원래 내용을 지우지 않고 요소를 업데이트함 |

### searchEngines

사용자 정의 검색 엔진 도메인 목록

| 변수                     | 설명                                                         |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | 검색 엔진의 도메인                                           |
| resultContainerSelectors | 선택 사항, 검색 결과 컨테이너 DOM 설정, 동적 관찰 범위를 좁히기 위함 |
| attribute                | &lt;a&gt; 요소에서 'href' 이외의 추가 URL 링크 속성을 지정합니다 (예: 'data-target')<br/>모든 링크 속성이 'href'인 경우에는 이 부분을 지정할 필요가 없습니다 |
