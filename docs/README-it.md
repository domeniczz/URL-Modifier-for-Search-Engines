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

Questo script Tampermonkey migliora l'utilizzo dei motori di ricerca modificando gli URL nei risultati di ricerca dei motori di ricerca, reindirizzando a siti alternativi. Consente un'esperienza di navigazione più personalizzata ed efficiente.

La modifica dell'URL utilizza Espressioni Regolari.

Codeberg Repository: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

### Supporto ai motori di ricerca

- [Google](https://www.google.com)
- [SearXNG](https://searx.space/) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Puoi aggiungere manualmente il selettore DOM nel codice per supportare altri motori di ricerca.

Non può supportare [Bing](https://www.bing.com), perché fornisce solo collegamenti intermedi.

### Reindirizzamenti integrati

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (istanza [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (istanza [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (istanza [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

Puoi aggiungere regole di reindirizzamento personalizzate nello script.

Altre alternative di interfacce front-end rispettose della privacy, vedi [LibRedirect](https://libredirect.github.io/index.html).

---

## Da Fare

1. Aggiungere supporto per più motori di ricerca.
2. Ristrutturare il codice per renderlo più leggibile e modificabile.

---

## Wiki

### RegoleDiModificaURL

Regole di modifica dell'URL in [espressione regolare](https://it.wikipedia.org/wiki/Espressione_regolare)

| Variabile    | Descrizione                                      |
| ------------ | ------------------------------------------------ |
| matchRegex   | espressione regolare per abbinare gli URL originali |
| replaceWith  | espressione regolare per la sostituzione          |

### RegoleSelettore

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
| hasSubResults     | flag per stabilire se il motore di ricerca può avere sub-risultati |
| subResultSelector | selettore per sub-risultati                                       |

### MotoriDiRicerca

Elenco definito dall'utente dei domini dei motori di ricerca

| Variabile                 | Descrizione                                                  |
| ------------------------- | ------------------------------------------------------------ |
| hosts                     | dominio del motore di ricerca                                |
| resultContainerSelectors  | opzionale, imposta il contenitore dei risultati di ricerca DOM, per restringere l'ambito dell'osservazione dinamica |

