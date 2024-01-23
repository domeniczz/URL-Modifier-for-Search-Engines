# Modificateur-d'URL-pour-les-moteurs-de-recherche

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Catalogue**:

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introduction)
- [À Faire](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introduction

Un script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), à installer depuis GreasyFork : [Modificateur d'URL pour les moteurs de recherche](https://greasyfork.org/fr/scripts/483597-url-modifier-for-search-engines).

- Github Dépôt: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Dépôt: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Ce script Tampermonkey améliore votre utilisation des moteurs de recherche en modifiant les URL dans les résultats de recherche des moteurs de recherche, redirigeant vers des sites alternatifs. Permet une expérience de navigation plus personnalisée et efficace.

La modification d'URL utilise l'Expression Régulière.

<div align="center">
    <span>Résultat de recherche sans modification d'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Résultat de recherche après modification d'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Prise en charge des moteurs de recherche

- [Google](https://www.google.com)
- [Yandex](https://yandex.com)
- [SearXNG](https://searx.space)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Ecosia](https://www.ecosia.org)
- [Swisscows](https://swisscows.com)
- [Metager](https://metager.org)
- [4get](https://4get.ca/instances)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

Vous pouvez ajouter manuellement le sélecteur DOM dans le code pour prendre en charge d'autres moteurs de recherche.

Ne peut pas prendre en charge [Bing](https://www.bing.com), car il fournit uniquement des liens intermédiaires.

> Juste une petite note, [Kagi](https://kagi.com) est un moteur de recherche avec une fonctionnalité de redirection d'URL intégrée, cela vaut la peine d'essayer. Je suis un utilisateur de Kagi, et je suis très satisfait de ce produit, alors je leur fais un coup de chapeau ici.

### Redirection intégrée

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (e.g. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (e.g. [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (e.g. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (e.g. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (e.g. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (e.g. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (e.g. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (e.g. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (e.g. [dm.vern.cc](https://dm.vern.cc))
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (e.g. [sd.vern.cc](https://sd.vern.cc))
- ArXiv PDF -> ArXiv Abstract
- ...

Vous pouvez ajouter des règles de redirection personnalisées dans le script vous-même.

Autres alternatives de frontaux respectueux de la vie privée, voir:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## À Faire

1. Ajouter des prises en charge pour plus de moteurs de recherche.
2. Refactoriser le code pour le rendre plus facile à lire et à modifier.

---

## Wiki

### urlModificationRules

Règles de modification d'URL en [expression régulière](https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re)

| Variable    | Description                                               |
| ----------- | --------------------------------------------------------- |
| matchRegex  | expression régulière pour correspondre aux URL originales |
| replaceWith | expression régulière pour le remplacement                 |

### selectorRules

Règles de [sélecteur](https://developer.mozilla.org/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) pour les éléments DOM nécessitant une mise à jour pour les résultats de recherche des moteurs de recherche

| Variable        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| selector        | sélecteur pour l'élément DOM                                 |
| updateText      | drapeau pour savoir s'il faut mettre à jour le texte ou la valeur href de l'élément |
| childSelector   | sélecteur pour l'élément DOM enfant sous l'élément parent    |
| updateChildText | drapeau pour savoir s'il faut mettre à jour le texte interne de l'élément enfant |
| containProtocol | drapeau pour savoir s'il faut inclure le protocole (par exemple, https://) dans le domaine |
| displayMethod   | requis, méthode d'affichage de l'URL<br/>méthode 1 : format fil d'Ariane<br/>méthode 2 : URL complète<br/>méthode 3 : URL complète sans protocole |
| multiElementsForUrlDisplay | indicateur pour savoir si l'URL affichée est séparée en plusieurs éléments du DOM |

### searchEngines

Liste définie par l'utilisateur des domaines des moteurs de recherche

| Variable                 | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| hosts                    | domaine du moteur de recherche                                     |
| resultContainerSelectors | optionnel, définit le conteneur de résultats de recherche DOM, pour réduire la portée de l'observation dynamique |
| attribute                | spécifiez un attribut d'URL supplémentaire dans &lt;a&gt; autre que 'href' (par exemple 'data-target')<br/>pas besoin de spécifier cela si tous les attributs de lien sont 'href' |

