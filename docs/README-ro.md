# Modificator-de-URL-pentru-Motoare-de-Căutare

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Român</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catalog**:

- [Introducere](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md#Introducere)
- [De făcut](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md#De-făcut)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md#Wiki)

## Introducere

Un script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instalat de pe Greasy Fork: [Modificator de URL pentru Motoare de Căutare](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Dacă nu aveți Tampermonkey instalat în browserul dumneavoastră, îl puteți instala din [Magazinul Web Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) sau [Magazinul Web Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

- Depozitul GitHub: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Depozitul Codeberg: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Vă rog să îmi dați un Star pe GitHub sau Codeberg dacă v-ați găsit util scriptul meu! Mulțumesc! 😘</b>

Acest script Tampermonkey îmbunătățește utilizarea motorului de căutare prin modificarea URL-urilor în rezultatele căutării motoarelor de căutare, redirecționând către site-uri alternative, permițând o experiență de navigare mai personalizată și eficientă. Puteți adăuga, de asemenea, regula de modificare a URL-ului personalizat la script și sunteți bineveniți să vă angajați regulile la acest script pentru a-l face mult mai util.

Modificarea URL-ului utilizează Expresia Regulată.

<div align="center">
    <span>Rezultatul căutării fără modificarea URL-ului:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Rezultatul căutării după modificarea URL-ului:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Suport pentru Motoare de Căutare

- [Google](https://www.google.com)
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
- [Seznam](https://www.seznam.cz)
- [StartSiden](https://www.startsiden.no/sok)
- [Naver](https://www.naver.com)
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
- [Ask](https://www.ask.com)
- [Proton](https://www.pronto.com)
- [Anoox](https://anoox.com)

Puteți adăuga manual selectorul DOM în cod pentru a sprijini alte motoare de căutare.

Nu poate sprijini [Bing](https://www.bing.com), deoarece oferă doar linkuri intermediare.

Pentru motoare de căutare precum Yahoo, Lycos, AlohaFind, scriptul suportă eliminarea linkurilor de redirecționare și extragerea URL-ului real. De exemplu, linkul de redirecționare Yahoo este "https://r.search.yahoo.com/...". Dacă nu utilizați aceste motoare de căutare, puteți alege să utilizați [regulile de modificare a URL-ului](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) fără compatibilitate cu linkul de redirecționare. Apropo, puteți vedea toate regulile de modificare a URL-ului RegEx integrate [aici](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

> Doar o notă laterală, [Kagi](https://kagi.com) este un motor de căutare cu funcționalitate încorporată de redirecționare URL, merită încercat. Sunt un utilizator al Kagi și sunt foarte mulțumit de acest produs, așa că le fac aici o mențiune.

Găsiți mai multe motoare de căutare:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Redirecționare Încorporată

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (de exemplu, [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (de exemplu, [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (de exemplu, [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (de exemplu, [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (de exemplu, [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (de exemplu, [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (de exemplu, [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (de exemplu, [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (de exemplu, [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (de exemplu, [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (de exemplu, [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (de exemplu, [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (de exemplu, [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (de exemplu, [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (de exemplu, [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (de exemplu, [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (de exemplu, [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (de exemplu, [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (de exemplu, [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (de exemplu, [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (de exemplu, [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (de exemplu, [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Puteți adăuga reguli de redirecționare personalizate în script.

Alte frontend-uri prietenoase cu intimitatea, vezi:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Furnizori de servicii:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

În orice caz, ați putea folosi [Farside](https://github.com/benbusby/farside) care redirecționează automat către instanțele funcționale ale frontend-urilor alternative orientate spre intimitate în loc să scrieți reguli de expresie regulată pe cont propriu.

Cu toate acestea, această metodă nu suportă un control mai fin asupra URL-urilor potrivite și este cu adevărat lentă deoarece este necesară o redirecționare de către farside. Dacă doriți să utilizați acest lucru oricum, puteți decomenta partea corespunzătoare în `urlModificationRules`.

- Exemplu de model inclus: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Redirecționare către: `https://farside.link/$1`

- Adăugați la script:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- URL exemplu: `https://www.youtube.com/watch?v=abc123`

- URL rezultat: `https://farside.link/youtube.com/watch?v=abc123`

> Pentru informația dumneavoastră, wiki pentru configurarea farside în [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

---

## De făcut

1. Adăugați suport pentru mai multe motoare de căutare.
2. Refactorizați codul pentru a-l face mai ușor de citit și modificat.

---

## Wiki

### urlModificationRules

Reguli de modificare a URL-ului în [expresie regulată](https://ro.wikipedia.org/wiki/Expresie_regulată)

| Variabilă   | Descriere                                                |
| ----------- | -------------------------------------------------------- |
| matchRegex  | expresie regulată pentru potrivirea URL-urilor originale |
| replaceWith | expresie regulată pentru înlocuire                       |

### selectorRules

Reguli [Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) pentru elementele DOM care necesită actualizare pentru rezultatele motoarelor de căutare

| Variabilă                            | Descriere                                                    |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | selector pentru elementul DOM                                |
| parentSelector                       | selector pentru părintele elementului de link și elementul de text |
| linkNodeSelector                     | selector pentru elementul de link sub elementul specificat de `parentSelector` |
| textNodeSelector                     | selector pentru elementul de text sub elementul specificat de `parentSelector` |
| updateChildText                      | indicator pentru dacă să actualizeze textul interior al elementului copil specificat de `childSelector` |
| childSelector                        | selector pentru elementul DOM copil sub elementul specificat de `selector` sau `textNodeSelector` |
| updateTextWithoutOverwrite           | indicator pentru actualizarea textnode fără a suprascrie alte noduri sub elementul DOM |
| updateTextByOverwritecontainProtocol | indicator pentru actualizarea conținutului prin suprascriere completă sub elementul DOMindicator pentru dacă să conțină protocolul (de ex. https://) în domeniu |
| useTopLevelDomain                    | indicator pentru dacă să folosească domeniul de nivel superior atunci când afișează URL-uri |
| urlDisplayMethod                     | obligatoriu, metoda de afișare a URL-ului<br/>metoda 1: format breadcrumb<br/>metoda 2: URL complet<br/>metoda 3: URL complet fără protocol |
| multiElementsForUrlDisplay           | indicator pentru dacă URL-ul afișat este separat în mai multe elemente DOM<br/>metoda 1: părțile URL-ului sunt împrăștiate în elemente paralele<br/>metoda 2: părțile URL-ului sunt împrăștiate în elemente neparalele<br/>metoda 3: la fel ca metoda 2, dar actualizează elementele fără a șterge conținuturile lor originale |

### motoareDeCautare

Lista definită de utilizator a domeniilor motoarelor de căutare

| Variabilă                   | Descriere                                                    |
| --------------------------- | ------------------------------------------------------------ |
| gazde                       | domeniul motorului de căutare                                |
| selectoriContainerRezultate | opțional, setați containerul DOM al rezultatului căutării, pentru a restrânge domeniul de observație dinamică |
| atribut                     | specificați atributul adițional al linkului URL în &lt;a&gt; altul decât 'href' (de ex. 'data-target')<br/>nu este necesar să specificați acest lucru dacă toate atributele linkului sunt 'href' |
