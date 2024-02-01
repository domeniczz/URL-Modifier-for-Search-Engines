# Modificateur-d'URL-pour-les-moteurs-de-recherche

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catalogue**:

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#Introduction)
- [À Faire](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#À-faire)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#Wiki)

## Introduction

Un script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), à installer depuis Greasy Fork : [Modificateur d'URL pour les moteurs de recherche](https://greasyfork.org/fr/scripts/483597-url-modifier-for-search-engines).

- GitHub Dépôt: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
- [Seznam](https://www.seznam.cz)

Vous pouvez ajouter manuellement le sélecteur DOM dans le code pour prendre en charge d'autres moteurs de recherche.

Ne peut pas prendre en charge [Bing](https://www.bing.com), car il fournit uniquement des liens intermédiaires.

4get ne changent pas les URL affichées en conséquence lorsque les liens sont modifiés. Ce problème existe car je cherche à rendre mon code aussi généralisé que possible, mais ces moteurs de recherche ont une structure DOM inhabituelle pour l'affichage des URL, ce qui rend fastidieux de soutenir ces moteurs compte tenu de leur base d'utilisateurs relativement petite.

> Juste une petite note, [Kagi](https://kagi.com) est un moteur de recherche avec une fonctionnalité de redirection d'URL intégrée, cela vaut la peine d'essayer. Je suis un utilisateur de Kagi, et je suis très satisfait de ce produit, alors je leur fais un coup de chapeau ici.

Trouver plus de moteurs de recherche:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Redirection intégrée

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (par exemple [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (par exemple [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (par exemple [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (par exemple [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (par exemple [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (par exemple [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (par exemple [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (par exemple [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (par exemple [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (par exemple [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (par exemple [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (par exemple [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (par exemple [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (par exemple [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (par exemple [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (par exemple [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (par exemple [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (par exemple [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (par exemple [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (par exemple [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (par exemple [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (par exemple [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Vous pouvez ajouter des règles de redirection personnalisées dans le script vous-même.

Autres alternatives de frontaux respectueux de la vie privée, voir:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Fournisseurs de services:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Pour une utilisation facile, nous pourrions utiliser [Farside](https://github.com/benbusby/farside) qui redirige automatiquement vers des instances fonctionnelles de façades alternatives axées sur la confidentialité au lieu d'écrire nos propres règles d'expression régulière. Cependant, cette méthode ne prend pas en charge un contrôle plus précis des URL correspondantes.

> À titre d'information, wiki pour configurer farside dans [Redirector](https://github.com/einaregilsson/Redirector) : https://github.com/einaregilsson/Redirector

- Exemple de motif à inclure : `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Rediriger vers : `https://farside.link/$1`

- Ajouter au script :
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Exemple d'URL : `https://www.youtube.com/watch?v=abc123`

- URL résultante : `https://farside.link/youtube.com/watch?v=abc123`

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

| Variable                   | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| selector                   | sélecteur pour l'élément DOM                                 |
| updateText                 | drapeau pour savoir s'il faut mettre à jour le texte ou la valeur href de l'élément |
| childSelector              | sélecteur pour l'élément DOM enfant sous l'élément parent    |
| updateChildText            | drapeau pour savoir s'il faut mettre à jour le texte interne de l'élément enfant |
| containProtocol            | drapeau pour savoir s'il faut inclure le protocole (par exemple, https://) dans le domaine |
| useTopLevelDomain          | drapeau pour l'utilisation du domaine de premier niveau lors de l'affichage des URL |
| urlDisplayMethod              | requis, méthode d'affichage de l'URL<br/>méthode 1 : format fil d'Ariane<br/>méthode 2 : URL complète<br/>méthode 3 : URL complète sans protocole |
| multiElementsForUrlDisplay | indicateur pour savoir si l'URL affichée est séparée en plusieurs éléments du DOM |

### searchEngines

Liste définie par l'utilisateur des domaines des moteurs de recherche

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domaine du moteur de recherche                               |
| resultContainerSelectors | optionnel, définit le conteneur de résultats de recherche DOM, pour réduire la portée de l'observation dynamique |
| attribute                | spécifiez un attribut d'URL supplémentaire dans &lt;a&gt; autre que 'href' (par exemple 'data-target')<br/>pas besoin de spécifier cela si tous les attributs de lien sont 'href' |
