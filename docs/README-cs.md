# Modifikátor-URL-pro-vyhledávače

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Katalog**:

- [Úvod](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md#Úvod)
- [Úkol](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md#Úkol)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md#Wiki)

## Úvod

Skript pro [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instalujte z Greasy Fork: [Modifikátor URL pro vyhledávače](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- GitHub Repozitář: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repozitář: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Tento skript pro Tampermonkey vylepšuje vaše používání vyhledávačů tím, že modifikuje URL výsledků vyhledávání ve vyhledávačích, přesměrovává na alternativní stránky. Umožňuje personalizovanější a efektivnější zážitek z prohlížení.

Modifikace URL využívá regulární výrazy.

<div align="center">
    <span>Výsledek vyhledávání bez modifikace URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Výsledek vyhledávání po modifikaci URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Podpora vyhledávačů

- [Google](https://www.google.com/supported_domains)
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
- [OceanHero](https://oceanhero.today/search)
- [Swisscows](https://swisscows.com)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
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

Do kódu můžete manuálně přidat DOM selektor pro podporu dalších vyhledávačů.

Nelze podporovat [Bing](https://www.bing.com), protože poskytuje pouze prostřední odkazy.

4get nezmění zobrazené URL odpovídajícím způsobem, když jsou odkazy změněny. Tento problém existuje, protože se snažím mít svůj kód co nejuniverzálnější, ale tyto vyhledávače mají neobvyklou strukturu DOM pro zobrazení URL, což je zdlouhavé podporovat tyto vyhledávače s ohledem na jejich relativně malou uživatelskou základnu.

> Jen tak mimochodem, [Kagi](https://kagi.com) je vyhledávač s vestavěnou funkcí přesměrování URL, který stojí za vyzkoušení. Jsem uživatelem Kagi a s tímto produktem jsem velmi spokojen, takže jim tady dávám výzvu.

Najděte více vyhledávačů:

- [Mapa vyhledávačů](https://www.searchenginemap.com)
- [Párty vyhledávačů](https://searchengine.party)

### Vestavěné přesměrování

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (např. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (např. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (např. [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (např. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (např. [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (např. [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (např. [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (např. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (např. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (např. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (např. [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (např. [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (např. [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (např. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (např. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (např. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (např. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (např. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (např. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (např. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (např. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (např. [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Do skriptu si můžete přidat vlastní pravidla přesměrování.

Další alternativní přátelské frontendy, viz:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Poskytovatelé služeb:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Stojí za zmínku, že můžete použít [Farside](https://github.com/benbusby/farside), který automaticky přesměrovává na fungující instance alternativních frontendů orientovaných na soukromí, místo abychom sami psali pravidla regulárních výrazů.

Tato metoda však nepodporuje detailní kontrolu nad shodujícími se URL a je skutečně pomalá, protože je nutné přesměrování přes Farside. Pokud to přesto chcete použít, můžete odkomentovat příslušnou část v `urlModificationRules`.

- Vzor pro začlenění: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Přesměrovat na: `https://farside.link/$1`

- Přidat do skriptu:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Příklad URL: `https://www.youtube.com/watch?v=abc123`

- Výsledné URL: `https://farside.link/youtube.com/watch?v=abc123`

> Pro informaci, wiki pro nastavení farside v [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Browser-Extension

---

## Úkol

1. Přidat podporu pro další vyhledávače.
2. Refaktorovat kód, aby byl snadněji čitelný a upravitelný.

---

## Wiki

### urlModificationRules

Pravidla pro modifikaci URL v [regulárním výrazu](https://cs.wikipedia.org/wiki/Regulární_výraz)

| Proměnná    | Popis                                     |
| ----------- | ----------------------------------------- |
| matchRegex  | regulární výraz pro shodu s původními URL |
| replaceWith | regulární výraz pro nahrazení             |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) pravidla pro aktualizaci DOM elementů ve výsledcích vyhledávače

| Proměnná                             | Popis                                                        |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | selektor pro DOM element                                     |
| parentSelector                       | selektor pro rodiče odkazového elementu a textového elementu |
| linkNodeSelector                     | selektor pro odkazový element pod elementem specifikovaným `parentSelector` |
| textNodeSelector                     | selektor pro textový element pod elementem specifikovaným `parentSelector` |
| updateChildText                      | příznak pro aktualizaci vnitřního textu dceřiného elementu specifikovaného `childSelector` |
| childSelector                        | selektor pro dceřiný DOM element pod elementem specifikovaným `selector` nebo `textNodeSelector` |
| updateTextWithoutOverwrite           | příznak pro aktualizaci textového uzlu bez přepisu ostatních uzlů pod DOM elementem |
| updateTextByOverwritecontainProtocol | příznak pro aktualizaci obsahu přepisem všeho pod DOM elementem, příznak zda obsahovat protokol (např. https://) v doméně |
| useTopLevelDomain                    | příznak zda použít top-level doménu při zobrazování URL      |
| urlDisplayMethod                     | vyžadováno, metoda zobrazení URL<br/>metoda 1: formát drobečkové navigace<br/>metoda 2: plná URL<br/>metoda 3: plná URL bez protokolu |
| multiElementsForUrlDisplay           | příznak zda je zobrazená URL rozdělena do více DOM elementů  |

### searchEngines

Uživatelem definovaný seznam domén vyhledávačů

| Proměnná                 | Popis                                                        |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | doména vyhledávače                                           |
| resultContainerSelectors | volitelné, nastavte DOM kontejner výsledků vyhledávání, aby se zúžil rozsah dynamického pozorování |
| attribute                | určení dalšího atributu odkazu URL v &lt;a&gt; kromě 'href' (např. 'data-target')<br/>není třeba toto specifikovat, pokud jsou všechny atributy odkazu 'href' |
