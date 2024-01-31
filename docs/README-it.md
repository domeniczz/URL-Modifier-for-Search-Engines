# Modificatore-di-URL-per-Motori-di-Ricerca

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catalogo**:

- [Introduzione](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md#Introduzione)
- [Da Fare](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md#Da-Fare)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md#Wiki)

## Introduzione

Uno script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), installa da Greasy Fork: [Modificatore di URL per Motori di Ricerca](https://greasyfork.org/en/scripts/483597-modificatore-di-url-per-motori-di-ricerca).

- GitHub Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Questo script Tampermonkey migliora l'utilizzo dei motori di ricerca modificando gli URL nei risultati di ricerca dei motori di ricerca, reindirizzando a siti alternativi. Consente un'esperienza di navigazione più personalizzata ed efficiente.

La modifica dell'URL utilizza Espressioni Regolari.

<div align="center">
    <span>Risultato della ricerca senza modifica dell'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Risultato della ricerca dopo la modifica dell'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Supporto ai motori di ricerca

- [Google](https://www.google.com/supported_domains)
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
- [LibreY](https://github.com/Ahwxorg/LibreY/blob/main/instances.json)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

Puoi aggiungere manualmente il selettore DOM nel codice per supportare altri motori di ricerca.

Non può supportare [Bing](https://www.bing.com), perché fornisce solo collegamenti intermedi.

4get, Lilo e Entireweb non cambiano gli URL visualizzati di conseguenza quando i link vengono modificati. Questo problema esiste perché il mio obiettivo è rendere il mio codice il più generalizzato possibile, ma questi motori di ricerca hanno una struttura DOM insolita per la visualizzazione degli URL, il che rende tedioso supportare questi motori considerando la loro base di utenti relativamente piccola.

> Just a side note, [Kagi](https://kagi.com) è un motore di ricerca con funzionalità di reindirizzamento URL integrate, vale la pena provarlo. Sono un utente di Kagi, e sono molto soddisfatto di questo prodotto, quindi voglio fare loro una menzione qui.

Trova più motori di ricerca:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Reindirizzamenti integrati

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (per esempio [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (per esempio [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (per esempio [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (per esempio [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (per esempio [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (per esempio [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (per esempio [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (per esempio [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (per esempio [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (per esempio [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (per esempio [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (per esempio [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (per esempio [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (per esempio [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (per esempio [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (per esempio [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (per esempio [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (per esempio [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (per esempio [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (per esempio [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (per esempio [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (per esempio [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Puoi aggiungere regole di reindirizzamento personalizzate nello script.

Altre alternative di interfacce front-end rispettose della privacy, vedi:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Fornitori di servizi:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Per un utilizzo semplice, possiamo usare [Farside](https://github.com/benbusby/farside) che reindirizza automaticamente a istanze funzionanti di frontend alternativi orientati alla privacy invece di scrivere da soli regole di espressioni regolari. Tuttavia, questo metodo non supporta un controllo più dettagliato degli URL corrispondenti.

> FYI, wiki per configurare farside in [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/einaregilsson/Redirector

- Esempio di pattern incluso: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Reindirizzare a: `https://farside.link/$1`

- Aggiungi allo script:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- URL di esempio: `https://www.youtube.com/watch?v=abc123`

- URL risultante: `https://farside.link/youtube.com/watch?v=abc123`

---

## Da Fare

1. Aggiungere supporto per più motori di ricerca.
2. Ristrutturare il codice per renderlo più leggibile e modificabile.

---

## Wiki

### urlModificationRules

Regole di modifica dell'URL in [espressione regolare](https://it.wikipedia.org/wiki/Espressione_regolare)

| Variabile   | Descrizione                                         |
| ----------- | --------------------------------------------------- |
| matchRegex  | espressione regolare per abbinare gli URL originali |
| replaceWith | espressione regolare per la sostituzione            |

### selectorRules

Regole [Selettore](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) per gli elementi DOM che necessitano di aggiornamenti per i risultati di ricerca del motore di ricerca

| Variabile                  | Descrizione                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| selector                   | selettore per l'elemento DOM                                                                                                                          |
| updateText                 | flag per se aggiornare il testo o il valore href dell'elemento                                                                                        |
| childSelector              | selettore per l'elemento DOM figlio sotto l'elemento genitore                                                                                         |
| updateChildText            | flag per se aggiornare il testo interno dell'elemento figlio                                                                                          |
| containProtocol            | flag per se includere il protocollo (es. https://) nel dominio                                                                                        |
| useTopLevelDomain          | indicatore per se utilizzare il dominio di primo livello quando si visualizzano gli URL                                                               |
| displayMethod              | richiesto, metodo di visualizzazione dell'URL<br/>metodo 1: formato breadcrumb<br/>metodo 2: URL completo<br/>metodo 3: URL completo senza protocollo |
| multiElementsForUrlDisplay | indicatore per se l'URL visualizzato è suddiviso in più elementi DOM                                                                                  |

### searchEngines

Elenco definito dall'utente dei domini dei motori di ricerca

| Variabile                | Descrizione                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hosts                    | dominio del motore di ricerca                                                                                                                                              |
| resultContainerSelectors | opzionale, imposta il contenitore dei risultati di ricerca DOM, per restringere l'ambito dell'osservazione dinamica                                                        |
| attribute                | specifica attributo URL aggiuntivo in <a> diverso da 'href' (ad esempio 'data-target')<br/>non è necessario specificare questo se tutti gli attributi dei link sono 'href' |
