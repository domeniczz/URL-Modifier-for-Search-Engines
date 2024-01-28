# URL-Wijzigingsmodule-voor-Zoekmachines

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Catalogus**:

- [Introductie](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md#Introductie)
- [Te doen](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md#Te-doen)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md#Wiki)

## Introductie

Een [Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script, installeer van Greasy Fork: [URL Wijzigingsmodule voor Zoekmachines](https://greasyfork.org/nl/scripts/483597-url-wijzigingsmodule-voor-zoekmachines).

- GitHub Repository: https://github.com/domeniczz/URL-Wijzigingsmodule-voor-Zoekmachines
- Codeberg Repository: https://codeberg.org/Domenic/URL-Wijzigingsmodule-voor-Zoekmachine-Resultaten

Dit Tampermonkey script verbetert uw gebruik van zoekmachines door URL's in de zoekresultaten van zoekmachines te wijzigen, waardoor wordt doorverwezen naar alternatieve sites. Het biedt een meer aangepaste en efficiënte surfervaring.

URL-wijziging gebruikt Regelmatige Expressie.

<div align="center">
    <span>Zoekresultaat zonder URL-wijziging:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Zoekresultaat na URL-wijziging:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Ondersteuning voor Zoekmachines

- [Google](https://www.google.com)
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
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

U kunt handmatig DOM-selector in de code toevoegen om andere zoekmachines te ondersteunen.

Kan geen ondersteuning bieden voor [Bing](https://www.bing.com), omdat het alleen tussenliggende links verstrekt.

4get, Lilo en Entireweb zullen de weergegeven URL's niet overeenkomstig veranderen wanneer links worden gewijzigd. Dit probleem bestaat omdat ik ernaar streef mijn code zo algemeen mogelijk te maken, maar deze zoekmachines hebben een ongebruikelijke DOM-structuur voor het weergeven van URL's wat het omslachtig maakt om deze zoekmachines te ondersteunen gezien hun relatief kleine gebruikersbasis.

> Slechts een zijopmerking, [Kagi](https://kagi.com) is een zoekmachine met ingebouwde URL-omleidingsfunctionaliteit, het proberen waard. Ik ben een gebruiker van Kagi en ben zeer tevreden met dit product, dus ik geef ze hier een shout-out.

Vind meer zoekmachines:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Ingebouwde Omleidingen

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (bijv. [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (bijv. [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (bijv. [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (bijv. [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (bijv. [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (bijv. [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (bijv. [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (bijv. [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (bijv. [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (bijv. [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (bijv. [antifandom.com](https://antifandom.com))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (bijv. [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (bijv. [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (bijv. [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (bijv. [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (bijv. [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (bijv. [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (bijv. [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (bijv. [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (bijv. [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (bijv. [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

U kunt zelf aangepaste omleidingsregels aan het script toevoegen.

Andere alternatieven privacyvriendelijke frontends, zie:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Dienstverleners:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

---

## Te doen

1. Voeg ondersteuning toe voor meer zoekmachines.
2. Herschrijf de code om deze gemakkelijker leesbaar en aanpasbaar te maken.

---

## Wiki

### urlModificationRules

URL-wijzigingsregels in [reguliere expressie](https://nl.wikipedia.org/wiki/Reguliere_expressie)

| Variabele   | Beschrijving                                   |
| ----------- | --------------------------------------------- |
| matchRegex  | reguliere expressie voor het matchen van originele URL's |
| replaceWith | reguliere expressie voor vervanging            |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) regels voor de DOM-elementen die moeten worden bijgewerkt voor zoekmachine resultaten

| Variabele                  | Beschrijving                                                  |
| -------------------------- | ------------------------------------------------------------ |
| selector                   | selector voor DOM-element                                     |
| updateText                 | vlag voor het al dan niet updaten van de tekst of href-waarde van het element |
| childSelector              | selector voor kind DOM-element onder ouder element            |
| updateChildText            | vlag voor het al dan niet updaten van de binnentekst van het kind element |
| containProtocol            | vlag voor het al dan niet bevatten van protocol (bijv. https://) in de domein |
| displayMethod              | vereist, URL-weergavemethode<br/>methode 1: breadcrumb-formaat<br/>methode 2: volledige URL<br/>methode 3: volledige URL zonder protocol |
| multiElementsForUrlDisplay | vlag voor of de weergegeven URL is opgesplitst in meerdere DOM-elementen |

### searchEngines

Door de gebruiker gedefinieerde lijst met domeinen van zoekmachines

| Variabele                | Beschrijving                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domein van de zoekmachine                                     |
| resultContainerSelectors | optioneel, stel zoekresultaat container DOM in, om de reikwijdte van dynamische observatie te verkleinen |
| attribute                | specificeer extra URL-linkattribuut in &lt;a&gt; anders dan 'href' (bijv. 'data-target')<br/>niet nodig om dit te specificeren als alle linkattributen 'href' zijn |

