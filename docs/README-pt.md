# Modificador-de-URL-para-Motores-de-Busca

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a><br/>
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

**Catálogo**:

- [Introdução](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md#Introdução)
- [A Fazer](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md#A-Fazer)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md#Wiki)

## Introdução

Um script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instale pelo Greasy Fork: [Modificador de URL para Motores de Busca](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- GitHub Repositório: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Repositório: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Este script do Tampermonkey melhora o uso do seu motor de busca modificando URLs nos resultados de pesquisa, redirecionando para sites alternativos. Permite uma experiência de navegação mais personalizada e eficiente.

A modificação de URL usa Expressão Regular.

<div align="center">
    <span>Resultado da pesquisa sem modificação de URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Resultado da pesquisa após a modificação da URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Suporte a Motores de Busca

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
- [LibreY](https://github.com/Ahwxorg/LibreY/blob/main/instances.json)
- [Stract](https://stract.com)
- [eTools](https://www.etools.ch)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [Mojeek](https://www.mojeek.com)
- [Yep](https://yep.com)
- [Torry](https://www.torry.io)

Você pode adicionar manualmente o seletor DOM no código para suportar outros motores de busca.

Não pode suportar o [Bing](https://www.bing.com), pois ele só fornece links intermediários.

4get, Lilo e Entireweb não alteram as URLs exibidas correspondentemente quando os links são alterados. Esse problema existe porque eu busco tornar meu código o mais generalizado possível, mas esses motores de busca possuem uma estrutura de DOM incomum para exibir URLs, o que torna tedioso dar suporte a esses motores considerando sua base de usuários relativamente pequena.

> Apenas uma nota lateral, o [Kagi](https://kagi.com) é um mecanismo de busca com funcionalidade de redirecionamento de URL integrada, vale a pena experimentar. Sou um usuário do Kagi e estou muito satisfeito com este produto, por isso estou dando um destaque aqui.

Encontre mais motores de busca:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Redirecionamento integrado

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (exemplo [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (exemplo [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (exemplo [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (exemplo [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (exemplo [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (exemplo [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (exemplo [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (exemplo [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (exemplo [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (exemplo [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (exemplo [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (exemplo [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (exemplo [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (exemplo [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (exemplo [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (exemplo [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (exemplo [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (exemplo [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (exemplo [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (exemplo [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (exemplo [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Você pode adicionar suas próprias regras de redirecionamento no script.

Outras alternativas de frontends amigáveis à privacidade, veja:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Prestadores de serviços:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

---

## A Fazer

1. Adicionar suporte para mais motores de busca.
2. Refatorar o código para torná-lo mais fácil de ler e modificar.

---

## Wiki

### urlModificationRules

Regras de modificação de URL em [expressão regular](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular)

| Variável    | Descrição                                      |
| ----------- | ---------------------------------------------- |
| matchRegex  | expressão regular para combinar URLs originais |
| replaceWith | expressão regular para substituição            |

### selectorRules

Regras de [seleção](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) para elementos DOM que precisam ser atualizados nos resultados do motor de busca

| Variável        | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| selector        | seletor para elemento DOM                                    |
| updateText      | flag para atualizar o texto ou valor href do elemento        |
| childSelector   | seletor para elemento DOM filho sob elemento pai             |
| updateChildText | flag para atualizar o texto interno do elemento filho        |
| containProtocol | flag para incluir protocolo (ex: https://) no domínio        |
| useTopLevelDomain | sinalizador para se usar o domínio de nível superior ao exibir URLs |
| displayMethod   | obrigatório, método de exibição da URL<br/>método 1: formato breadcrumb<br/>método 2: URL completa<br/>método 3: URL completa sem protocolo |
| multiElementsForUrlDisplay | indicador de si la URL mostrada se divide en varios elementos del DOM |

### searchEngines

Lista definida pelo usuário de domínios de motores de busca

| Variável                 | Descrição                                                    |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domínio do motor de busca                                    |
| resultContainerSelectors | opcional, define o contêiner do resultado da busca DOM, para reduzir a faixa de observação dinâmica |
| attribute                | especifique atributo de link adicional em &lt;a&gt; além de 'href' (por exemplo, 'data-target')<br/>não é necessário especificar isso se todos os atributos de link forem 'href' |

