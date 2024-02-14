# URL-Modifier-til-Søgemaskiner

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
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

**Katalog**:

- [Introduktion](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md#Introduktion)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md#Wiki)

## Introduktion

Et [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script, installer fra Greasy Fork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Hvis du ikke har Tampermonkey installeret i din browser, kan du installere det fra [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) eller [Firefox Web Store](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

- GitHub Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Bedes give mig en Stjerne på GitHub eller Codeberg, hvis du fandt mit script nyttigt! Tak! 😘</b>

Dette Tampermonkey script forbedrer din brug af søgemaskiner ved at ændre URL'er i søgemaskinens søgeresultater, omdirigere til alternative sider, hvilket tillader en mere tilpasset og effektiv browsing oplevelse. Du kan også tilføje din egen tilpassede URL-ændringsregel til scriptet og er velkommen til at bidrage med dine regler til dette script for at gøre det endnu mere nyttigt.

URL-ændring bruger Regulære Udtryk.

<div align="center">
    <span>Søgeresultat uden URL-ændring:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Søgeresultat efter URL-ændring:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Søgemaskine Support

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
- [Goo](https://search.goo.ne.jp)
- [Seznam](https://www.seznam.cz)
- [StartSiden](https://www.startsiden.no/sok)
- [Marginalia](https://search.marginalia.nu)
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
- [iZito](https://www.izito.com)
- [Ask](https://www.ask.com)
- [Proton](https://www.pronto.com)
- [Anoox](https://anoox.com)

Du kan manuelt tilføje DOM-vælger i koden for at understøtte andre søgemaskiner.

Kan ikke understøtte [Bing](https://www.bing.com), fordi den kun leverer mellemliggende links.

For søgemaskiner som Yahoo, Lycos, AlohaFind, understøtter scriptet at slippe af med omdirigeringslinks og udtrække den rigtige URL. For eksempel er Yahoo's omdirigeringslink "https://r.search.yahoo.com/...". Hvis du ikke bruger disse søgemaskiner, kan du vælge at bruge [URL-ændringsregler](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) uden kompatibilitet med omdirigeringslink. I øvrigt kan du se alle indbyggede RegEx URL-ændringsregler [her](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

> Lige en sidebemærkning, [Kagi](https://kagi.com) er en søgemaskine med indbygget URL-omdirigeringsfunktionalitet, værd at prøve. Jeg er en bruger af Kagi, og jeg er meget tilfreds med dette produkt, så jeg giver dem et råb her.

Find flere søgemaskiner:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Indbygget Omdirigering

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (f.eks. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (f.eks. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (f.eks. [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (f.eks. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (f.eks. [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (f.eks. [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (f.eks. [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (f.eks. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (f.eks. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (f.eks. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (f.eks. [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (f.eks. [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (f.eks. [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (f.eks. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (f.eks. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (f.eks. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (f.eks. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (f.eks. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (f.eks. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (f.eks. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (f.eks. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (f.eks. [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Du kan tilføje tilpassede omdirigeringsregler i scriptet selv.

Andre alternativer privatlivsvenlige frontender, se:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Tjenesteudbydere:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

I øvrigt kunne du bruge [Farside](https://github.com/benbusby/farside) der automatisk omdirigerer til fungerende instanser af privatlivsorienterede alternative frontender i stedet for selv at skrive regulære udtryksregler.

Denne metode understøtter dog ikke finjusteret kontrol over matchede URL'er, og den er virkelig langsom, siden en omdirigering af farside er nødvendig. Hvis du alligevel ønsker at bruge dette, kan du udkommentere den tilsvarende del i `urlModificationRules`.

- Inkluder mønster eksempel: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Omdiriger til: `https://farside.link/$1`

- Tilføj til script:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Eksempel URL: `https://www.youtube.com/watch?v=abc123`

- Resultat URL: `https://farside.link/youtube.com/watch?v=abc123`

> Til din orientering, wiki for opsætning af farside i [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

---

## TODO

1. Tilføj understøttelse af flere søgemaskiner.
2. Refaktorer koden for at gøre den lettere at læse og ændre.

---

## Wiki

### urlModificationRules

URL-ændringsregler i [regulære udtryk](https://da.wikipedia.org/wiki/Regulære_udtryk)

| Variabel    | Beskrivelse                                      |
| ----------- | ------------------------------------------------ |
| matchRegex  | regulært udtryk for at matche oprindelige URL'er |
| replaceWith | regulært udtryk for erstatning                   |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) regler for DOM-elementer, der skal opdateres for søgemaskinens resultater

| Variabel                             | Beskrivelse                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | selector for DOM-element                                     |
| parentSelector                       | selector for forælder til link-element og tekst-element      |
| linkNodeSelector                     | selector for link-element under elementet specificeret af `parentSelector` |
| textNodeSelector                     | selector for tekst-element under elementet specificeret af `parentSelector` |
| updateChildText                      | flag for om at opdatere den indre tekst af barn-elementet specificeret af `childSelector` |
| childSelector                        | selector for barn-DOM-element under elementet specificeret af `selector` eller `textNodeSelector` |
| updateTextWithoutOverwrite           | flag for opdatering af textnode uden at overskrive andre noder under DOM-elementet |
| updateTextByOverwritecontainProtocol | flag for at opdatere indholdet ved at overskrive alt under DOM-elementetflag for om at indeholde protokol (f.eks. https://) i domænet |
| useTopLevelDomain                    | flag for om at bruge topniveau-domænet ved visning af URL'er |
| urlDisplayMethod                     | krævet, URL-visningsmetode<br/>metode 1: breadcrumb-format<br/>metode 2: fuld URL<br/>metode 3: fuld URL uden protokol |
| multiElementsForUrlDisplay           | flag for om den viste URL er opdelt i flere DOM-elementer<br/>metode 1: URL-dele er spredt ud i parallelle elementer<br/>metode 2: URL-dele er spredt ud i ikke-parallelle elementer<br/>metode 3: samme som metode 2, men opdater elementer uden at rydde deres oprindelige indhold |

### searchEngines

Brugerdefineret liste over søgemaskinedomæner

| Variabel                 | Beskrivelse                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | søgemaskinens domæne                                         |
| resultContainerSelectors | valgfri, angiv søgemaskinens resultatbeholder DOM, for at indsnævre rækkevidden af dynamisk observation |
| attribute                | specificer yderligere URL-link-attribut i &lt;a&gt; andet end 'href' (f.eks. 'data-target')<br/>behøver ikke at specificere dette, hvis alle linkattributter er 'href' |
