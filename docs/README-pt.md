# Modificador-de-URL-para-Motores-de-Busca

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
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

Este script do Tampermonkey melhora o uso do seu motor de busca modificando URLs nos resultados de pesquisa, redirecionando para sites alternativos. Permite uma experiência de navegação mais personalizada e eficiente.

A modificação de URL usa Expressão Regular.

### Suporte a Motores de Busca

- [Google](https://www.google.com)
- [SearXNG](https://searx.space) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Você pode adicionar manualmente o seletor DOM no código para suportar outros motores de busca.

Não pode suportar o [Bing](https://www.bing.com), pois ele só fornece links intermediários.

### Redirecionamento integrado

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Old Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (instância [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (instância [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (instância [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Abstract
- ...

Você pode adicionar suas próprias regras de redirecionamento no script.

Outras alternativas de frontends amigáveis à privacidade, veja [LibRedirect](https://libredirect.github.io/index.html).

---

## TODO

1. Adicionar suporte para mais motores de busca.
2. Refatorar o código para torná-lo mais fácil de ler e modificar.

---

## Wiki

### regrasDeModificaçãoDeURL

Regras de modificação de URL em [expressão regular](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular)

| Variável    | Descrição                                      |
| ----------- | ---------------------------------------------- |
| matchRegex  | expressão regular para combinar URLs originais |
| replaceWith | expressão regular para substituição            |

### regrasDeSeleção

Regras de [seleção](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) para elementos DOM que precisam ser atualizados nos resultados do motor de busca

| Variável        | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| selector        | seletor para elemento DOM                                    |
| updateText      | flag para atualizar o texto ou valor href do elemento        |
| childSelector   | seletor para elemento DOM filho sob elemento pai             |
| updateChildText | flag para atualizar o texto interno do elemento filho        |
| containProtocol | flag para incluir protocolo (ex: https://) no domínio        |
| displayMethod   | obrigatório, método de exibição da URL<br/>método 1: formato breadcrumb<br/>método 2: URL completa<br/>método 3: URL completa sem protocolo |
| hasSubResults     | indicador de si el motor de búsqueda puede tener subresultados |
| subResultSelector | selector para subresultados                                    |

### motoresDeBusca

Lista definida pelo usuário de domínios de motores de busca

| Variável                 | Descrição                                                    |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domínio do motor de busca                                    |
| resultContainerSelectors | opcional, define o contêiner do resultado da busca DOM, para reduzir a faixa de observação dinâmica |