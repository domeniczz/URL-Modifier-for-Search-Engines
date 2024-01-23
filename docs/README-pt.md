# Modificador-de-URL-para-Motores-de-Busca

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a>
</div>
<br/>

**Catálogo**:

- [Introdução](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Introdução)
- [TODO](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#TODO)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Wiki)

## Introdução

Um script [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), instale pelo GreasyFork: [Modificador de URL para Motores de Busca](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- Github Repositório: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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

Você pode adicionar manualmente o seletor DOM no código para suportar outros motores de busca.

Não pode suportar o [Bing](https://www.bing.com), pois ele só fornece links intermediários.

### Redirecionamento integrado

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

Você pode adicionar suas próprias regras de redirecionamento no script.

Outras alternativas de frontends amigáveis à privacidade, veja:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## TODO

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
| displayMethod   | obrigatório, método de exibição da URL<br/>método 1: formato breadcrumb<br/>método 2: URL completa<br/>método 3: URL completa sem protocolo |
| multiElementsForUrlDisplay | indicador de si la URL mostrada se divide en varios elementos del DOM |

### searchEngines

Lista definida pelo usuário de domínios de motores de busca

| Variável                 | Descrição                                                    |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domínio do motor de busca                                    |
| resultContainerSelectors | opcional, define o contêiner do resultado da busca DOM, para reduzir a faixa de observação dinâmica |
| attribute                | especifique atributo de link adicional em &lt;a&gt; além de 'href' (por exemplo, 'data-target')<br/>não é necessário especificar isso se todos os atributos de link forem 'href' |

