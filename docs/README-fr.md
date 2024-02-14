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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-sv.md">Svenska</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fi.md">Suomi</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
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

**Catalogue**:

- [Introduction](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#Introduction)
- [À Faire](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#À-faire)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md#Wiki)

## Introduction

Un script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), à installer depuis Greasy Fork : [Modificateur d'URL pour les moteurs de recherche](https://greasyfork.org/fr/scripts/483597-url-modifier-for-search-engines).

Si vous n'avez pas Tampermonkey installé dans votre navigateur, vous pouvez l'installer depuis le [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) ou le [Firefox Web Store](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey).

- GitHub Dépôt: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Dépôt: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Si vous avez trouvé mon script utile, veuillez me donner une étoile sur GitHub ou Codeberg ! Merci ! 😘</b>

Ce script Tampermonkey améliore votre utilisation du moteur de recherche en modifiant les URL dans les résultats de recherche des moteurs de recherche, redirigeant vers des sites alternatifs, permettant une expérience de navigation plus personnalisée et efficace. Vous pouvez également ajouter votre propre règle de modification d'URL au script et êtes invité à engager vos règles avec ce script pour le rendre encore plus utile.

La modification d'URL utilise l'Expression Régulière.

<div align="center">
    <span>Résultat de recherche sans modification d'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Résultat de recherche après modification d'URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Prise en charge des moteurs de recherche

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

Vous pouvez ajouter manuellement le sélecteur DOM dans le code pour prendre en charge d'autres moteurs de recherche.

Ne peut pas prendre en charge [Bing](https://www.bing.com), car il fournit uniquement des liens intermédiaires.

Pour des moteurs de recherche tels que Yahoo, Lycos, AlohaFind, le script permet de supprimer les liens de redirection et d'extraire l'URL réelle. Par exemple, le lien de redirection de Yahoo est "https://r.search.yahoo.com/...". Si vous n'utilisez pas ces moteurs de recherche, vous pouvez choisir d'utiliser [Règles de modification d'URL](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/no-redirection-omit-url-rules.js) sans compatibilité avec les liens de redirection. Au fait, vous pouvez voir toutes les règles de modification d'URL RegEx intégrées [ici](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/regexs.txt).

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

Il convient de mentionner que vous pouvez utiliser [Farside](https://github.com/benbusby/farside), qui redirige automatiquement vers des instances fonctionnelles de frontaux alternatifs axés sur la confidentialité au lieu de rédiger nous-mêmes des règles d'expressions régulières.

Cependant, cette méthode ne prend pas en charge un contrôle fin des URL correspondantes et est réellement lente, car une redirection par Farside est nécessaire. Si vous souhaitez quand même utiliser cela, vous pouvez décommenter la partie correspondante dans `urlModificationRules`.

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

> À titre d'information, wiki pour configurer farside dans [Redirector](https://github.com/einaregilsson/Redirector) : https://github.com/benbusby/farside/wiki/Browser-Extension

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

| Variable                             | Description                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | sélecteur pour l'élément DOM                                 |
| parentSelector                       | sélecteur pour le parent de l'élément lien et de l'élément texte |
| linkNodeSelector                     | sélecteur pour l'élément lien sous l'élément spécifié par `parentSelector` |
| textNodeSelector                     | sélecteur pour l'élément texte sous l'élément spécifié par `parentSelector` |
| updateChildText                      | indicateur pour savoir s'il faut mettre à jour le texte interne de l'élément enfant spécifié par `childSelector` |
| childSelector                        | sélecteur pour l'élément DOM enfant sous l'élément spécifié par `selector` ou `textNodeSelector` |
| updateTextWithoutOverwrite           | indicateur pour la mise à jour du nœud de texte sans écraser les autres nœuds sous l'élément DOM |
| updateTextByOverwritecontainProtocol | indicateur pour la mise à jour du contenu en écrasant tout sous l'élément DOMindicateur pour savoir s'il faut inclure le protocole (ex. https://) dans le domaine |
| useTopLevelDomain                    | indicateur pour savoir s'il faut utiliser le domaine de premier niveau lors de l'affichage des URL |
| urlDisplayMethod                     | requis, méthode d'affichage de l'URL<br/>méthode 1 : format breadcrumb<br/>méthode 2 : URL complète<br/>méthode 3 : URL complète sans protocole |
| multiElementsForUrlDisplay           | indicateur pour savoir si l'URL affichée est séparée en plusieurs éléments DOM<br/>méthode 1 : Les parties de l'URL sont dispersées dans des éléments parallèles<br/>méthode 2 : Les parties de l'URL sont dispersées dans des éléments non parallèles<br/>méthode 3 : similaire à la méthode 2, mais met à jour les éléments sans effacer leur contenu original |

### searchEngines

Liste définie par l'utilisateur des domaines des moteurs de recherche

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domaine du moteur de recherche                               |
| resultContainerSelectors | optionnel, définit le conteneur de résultats de recherche DOM, pour réduire la portée de l'observation dynamique |
| attribute                | spécifiez un attribut d'URL supplémentaire dans &lt;a&gt; autre que 'href' (par exemple 'data-target')<br/>pas besoin de spécifier cela si tous les attributs de lien sont 'href' |
