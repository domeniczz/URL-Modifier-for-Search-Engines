# URL-Módosító a Keresőmotorokhoz

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pl.md">Polski</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Român</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Tartalomjegyzék**:

- [Bevezetés](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md#Bevezetés)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md#Wiki)

## Bevezetés

Egy [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) szkript, telepíthető a Greasy Forkról: [URL Módosító a Keresőmotorokhoz](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Ha nincs Tampermonkey telepítve a böngésződben, telepítheted a [Chrome Web Áruházból](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) vagy a [Firefox Web Áruházból](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

- GitHub Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Kérlek, adj egy csillagot GitHubon vagy Codebergen, ha hasznosnak találtad a szkriptemet! Köszönöm! 😘</b>

Ez a Tampermonkey szkript fokozza a keresőmotorok használatát a keresési eredmények URL-jeinek módosításával, alternatív oldalakra való átirányítással, lehetővé téve egy személyre szabottabb és hatékonyabb böngészési élményt. Hozzáadhatsz saját URL módosítási szabályokat a szkripthez, és szívesen látjuk, ha hozzájárulsz a szabályaidat ehhez a szkripthez, hogy még hasznosabbá tegyük.

Az URL módosítás reguláris kifejezéseket használ.

<div align="center">
    <span>Keresési eredmény URL módosítás nélkül:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Keresési eredmény URL módosítás után:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Keresőmotor Támogatás

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
- [OceanHero](https://oceanhero.today/search)
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

Manuálisan hozzáadhatsz DOM szelektort a kódhoz, hogy támogass más keresőmotorokat.

Nem támogatható a [Bing](https://www.bing.com), mert csak köztes linkeket biztosít.

Olyan keresőmotorok esetében, mint a Yahoo, Lycos, AlohaFind, a szkript támogatja az átirányítási linkek megszüntetését és a valódi URL kinyerését. Például a Yahoo átirányítási linkje "https://r.search.yahoo.com/...". Ha nem használod ezeket a keresőmotorokat, választhatod az [URL módosítási szabályokat](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) átirányítási link kompatibilitás nélkül. Egyébként, itt találhatod meg az összes beépített RegEx URL módosítási szabályt [itt](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

> Csak mellékesen, a [Kagi](https://kagi.com) egy beépített URL átirányítási funkcióval rendelkező keresőmotor, érdemes kipróbálni. Kagi felhasználója vagyok, és nagyon elégedett vagyok ezzel a termékkel, ezért itt kiáltok fel nekik.

További keresőmotorok:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Beépített Átirányítás

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (pl. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (pl. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (pl. [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (pl. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (pl. [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (pl. [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (pl. [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (pl. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (pl. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (pl. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (pl. [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (pl. [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (pl. [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (pl. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (pl. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (pl. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (pl. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (pl. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (pl. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (pl. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (pl. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (pl. [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Saját átirányítási szabályokat adhatsz hozzá a szkripthez.

További alternatív adatvédelmi barát front-endek, lásd:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Szolgáltatók:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Egyébként, használhatod a [Farside](https://github.com/benbusby/farside)-ot, amely automatikusan átirányít a működő példányokra az adatvédelmi orientált alternatív front-endekből ahelyett, hogy saját magad írnál reguláris kifejezés szabályokat.

Azonban, ez a módszer nem támogatja az egyező URL-ek finomhangolását, és nagyon lassú, mivel szükséges egy átirányítás a farside által. Ha mégis ezt szeretnéd használni, kikommentezheted a megfelelő részt a `urlModificationRules`-ban.

- Mintázat példa: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Átirányítás ide: `https://farside.link/$1`

- Hozzáadás a szkripthez:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Példa URL: `https://www.youtube.com/watch?v=abc123`

- Eredmény URL: `https://farside.link/youtube.com/watch?v=abc123`

> Amúgy, wiki a farside beállításához a [Redirectorban](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Böngésző-Bővítmény

---

## TODO

1. További keresőmotorok támogatásának hozzáadása.
2. A kód átdolgozása, hogy könnyebben olvasható és módosítható legyen.

---

## Wiki

### urlModificationRules

URL módosítási szabályok [reguláris kifejezéssel](https://en.wikipedia.org/wiki/Regular_expression)

| Változó     | Leírás                                                       |
| ----------- | ------------------------------------------------------------ |
| matchRegex  | az eredeti URL-ek egyeztetésére szolgáló reguláris kifejezés |
| replaceWith | a cserélendő reguláris kifejezés                             |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) szabályok a keresőmotor eredmények frissítendő DOM elemeihez

| Változó                              | Leírás                                                       |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM elem szelektora                                          |
| parentSelector                       | a link elem és a szöveg elem szülőjének szelektora           |
| linkNodeSelector                     | a `parentSelector` által meghatározott elem alatti link elem szelektora |
| textNodeSelector                     | a `parentSelector` által meghatározott elem alatti szöveg elem szelektora |
| updateChildText                      | zászló, amely jelzi, hogy frissíteni kell-e a `childSelector` által megadott gyermek elem belső szövegét |
| childSelector                        | a `selector` vagy `textNodeSelector` által megadott elem alatti gyermek DOM elem szelektora |
| updateTextWithoutOverwrite           | zászló, amely jelzi, hogy frissíteni kell-e a szöveges csomópontot anélkül, hogy felülírnánk az alatta lévő más csomópontokat |
| updateTextByOverwritecontainProtocol | zászló, amely jelzi, hogy frissíteni kell-e a tartalmat minden alatta lévő elem felülírásával |
| useTopLevelDomain                    | zászló, amely jelzi, hogy használni kell-e a felső szintű domain nevet az URL-ek megjelenítésekor |
| urlDisplayMethod                     | kötelező, URL megjelenítési módszer<br/>módszer 1: breadcrumb formátum<br/>módszer 2: teljes URL<br/>módszer 3: teljes URL protokoll nélkül |
| multiElementsForUrlDisplay           | zászló, amely jelzi, hogy a megjelenített URL több DOM elemre van-e szétosztva<br/>módszer 1: az URL részei párhuzamos elemekbe vannak szétosztva<br/>módszer 2: az URL részei nem párhuzamos elemekbe vannak szétosztva<br/>módszer 3: ugyanaz, mint a módszer 2, de az elemek frissítése anélkül, hogy törölnénk az eredeti tartalmukat |

### searchEngines

Felhasználó által definiált keresőmotorok domainjei

| Változó                  | Leírás                                                       |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | a keresőmotor domainje                                       |
| resultContainerSelectors | opcionális, beállítja a keresési eredmény tartály DOM-ját, hogy szűkítse a dinamikus megfigyelés hatókörét |
| attribute                | meghatározza a további URL link attribútumot az &lt;a&gt;-ban a 'href'-en kívül (pl. 'data-target')<br/>nem szükséges megadni, ha minden link attribútum 'href' |
