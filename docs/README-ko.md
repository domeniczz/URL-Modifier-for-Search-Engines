# 검색 엔진용 URL 수정기

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**목록**:

- [소개](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#소개)
- [할 일](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#할-일)
- [위키](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#위키)

## 소개

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) 스크립트, GreasyFork 에서 설치: [검색 엔진용 URL 수정기](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- Github 저장소: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg 저장소: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

이 Tampermonkey 스크립트는 검색 엔진 검색 결과의 URL을 수정하여 대체 사이트로 리디렉션함으로써 검색 엔진 사용을 향상시킵니다. 보다 맞춤화되고 효율적인 브라우징 경험을 제공합니다.

URL 수정은 정규 표현식을 사용합니다.

### 검색 엔진 지원

- [Google](https://www.google.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Mojeek](https://www.mojeek.com)

다른 검색 엔진을 지원하기 위해 코드에 DOM 선택자를 수동으로 추가할 수 있습니다.

[Bing](https://www.bing.com) 은 중간 링크만 제공하기 때문에 지원할 수 없습니다.

### 내장 리디렉션

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

스크립트에 사용자 정의 리디렉션 규칙을 추가할 수 있습니다.

기타 개인정보 보호에 중점을 둔 대체 웹사이트 프런트엔드는 다음을 참조하세요：

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)

---

## 할 일

1. 더 많은 검색 엔진에 대한 지원 추가.
2. 코드를 읽고 수정하기 쉽도록 리팩토링.

---

## 위키

### urlModificationRules

[정규 표현식](https://ko.wikipedia.org/wiki/정규_표현식) 을 사용한 URL 수정 규칙

| 변수          | 설명                                         |
| ------------- | -------------------------------------------- |
| matchRegex    | 원본 URL 과 일치하는 정규 표현식              |
| replaceWith   | 대체를 위한 정규 표현식                      |

### selectorRules

검색 엔진 결과를 위한 DOM 요소 업데이트용 [선택자](https://developer.mozilla.org/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) 규칙

| 변수              | 설명                                                                         |
| ----------------- | ---------------------------------------------------------------------------- |
| selector          | DOM 요소를 위한 선택자                                                       |
| updateText        | 요소의 텍스트 또는 href 값 업데이트 여부 플래그                              |
| childSelector     | 부모 요소 아래의 자식 DOM 요소를 위한 선택자                                 |
| updateChildText   | 자식 요소의 내부 텍스트 업데이트 여부 플  |
| containProtocol | 도메인에 프로토콜(예: https://)을 포함할지 여부 플래그               |
| displayMethod   | 필수, URL 표시 방법<br/>방법 1: 빵 부스러기 형식<br/>방법 2: 전체 URL<br/>방법 3: 프로토콜 없는 전체 URL |
| multiElementsForUrlDisplay | URL 표시가 여러 DOM 요소로 분리되는지 여부의 플래그 |

### searchEngines

사용자 정의 검색 엔진 도메인 목록

| 변수                       | 설명                                                         |
| -------------------------- | ------------------------------------------------------------ |
| hosts                      | 검색 엔진의 도메인                                           |
| resultContainerSelectors   | 선택 사항, 검색 결과 컨테이너 DOM 설정, 동적 관찰 범위를 좁히기 위함 |

