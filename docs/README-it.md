# Modificatore-di-URL-per-Motori-di-Ricerca

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Catalogo**:

- [Introduzione](https://github.com/domeniczz/Modificatore-di-URL-per-Motori-di-Ricerca#Introduzione)
- [Da Fare](https://github.com/domeniczz/Modificatore-di-URL-per-Motori-di-Ricerca#Da-Fare)
- [Wiki](https://github.com/domeniczz/Modificatore-di-URL-per-Motori-di-Ricerca#Wiki)

## Introduzione

Uno script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), installa da GreasyFork: [Modificatore di URL per Motori di Ricerca](https://greasyfork.org/en/scripts/483597-modificatore-di-url-per-motori-di-ricerca).

- Github Repository: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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

- [Google](https://www.google.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Mojeek](https://www.mojeek.com)
- [Torry](https://www.torry.io)

Puoi aggiungere manualmente il selettore DOM nel codice per supportare altri motori di ricerca.

Non può supportare [Bing](https://www.bing.com), perché fornisce solo collegamenti intermedi.

### Reindirizzamenti integrati

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

Puoi aggiungere regole di reindirizzamento personalizzate nello script.

Altre alternative di interfacce front-end rispettose della privacy, vedi:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## Da Fare

1. Aggiungere supporto per più motori di ricerca.
2. Ristrutturare il codice per renderlo più leggibile e modificabile.

---

## Wiki

### urlModificationRules

Regole di modifica dell'URL in [espressione regolare](https://it.wikipedia.org/wiki/Espressione_regolare)

| Variabile    | Descrizione                                      |
| ------------ | ------------------------------------------------ |
| matchRegex   | espressione regolare per abbinare gli URL originali |
| replaceWith  | espressione regolare per la sostituzione          |

### selectorRules

Regole [Selettore](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) per gli elementi DOM che necessitano di aggiornamenti per i risultati di ricerca del motore di ricerca

| Variabile        | Descrizione                                                    |
| ---------------- | -------------------------------------------------------------- |
| selector         | selettore per l'elemento DOM                                   |
| updateText       | flag per se aggiornare il testo o il valore href dell'elemento |
| childSelector    | selettore per l'elemento DOM figlio sotto l'elemento genitore  |
| updateChildText  | flag per se aggiornare il testo interno dell'elemento figlio   |
| containProtocol  | flag per se includere il protocollo (es. https://) nel dominio |
| displayMethod    | richiesto, metodo di visualizzazione dell'URL<br/>metodo 1: formato breadcrumb<br/>metodo 2: URL completo<br/>metodo 3: URL completo senza protocollo |
| multiElementsForUrlDisplay | indicatore per se l'URL visualizzato è suddiviso in più elementi DOM |

### searchEngines

Elenco definito dall'utente dei domini dei motori di ricerca

| Variabile                 | Descrizione                                                  |
| ------------------------- | ------------------------------------------------------------ |
| hosts                     | dominio del motore di ricerca                                |
| resultContainerSelectors  | opzionale, imposta il contenitore dei risultati di ricerca DOM, per restringere l'ambito dell'osservazione dinamica |
| attribute                 | specifica attributo URL aggiuntivo in <a> diverso da 'href' (ad esempio 'data-target')<br/>non è necessario specificare questo se tutti gli attributi dei link sono 'href' |

