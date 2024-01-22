# Arama-Motorları-için-URL-Değiştirici

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
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
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a>
</div>
<br/>

**Katalog**:

- [Giriş](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Giriş)
- [Yapılacaklar](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Yapılacaklar)
- [Viki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines#Viki)

## Giriş

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script'i, GreasyFork'tan yükleyin: [Arama Motorları için URL Değiştirici](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- Github Depo: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Codeberg Depo: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Bu Tampermonkey betiği, arama motorları sonuçlarındaki URL'leri değiştirerek, alternatif sitelere yönlendirme yaparak arama motoru kullanımınızı geliştirir. Daha özelleştirilmiş ve verimli bir tarama deneyimi sağlar.

URL değiştirme Düzenli İfade (Regular Expression) kullanır.

<div align="center">
    <span>URL değişikliği olmadan arama sonucu:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>URL değişikliğinden sonra arama sonucu:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Desteklenen Arama Motorları

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

Kodda manuel olarak DOM seçici ekleyerek diğer arama motorlarını destekleyebilirsiniz.

[Bing](https://www.bing.com) desteklenemez, çünkü yalnızca ara bağlantılar sağlar.

### Yerleşik yönlendirmeler

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

Betik içine kendiniz özel yönlendirme kuralları ekleyebilirsiniz.

Diğer gizlilik dostu ön uçlar için bkz:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [vern.cc](https://vern.cc)
- [farside.link](https://farside.link)
- [whatever.social](https://launch.whatever.social)

---

## Yapılacaklar

1. Daha fazla arama motoru için destek ekleme.
2. Kodu okunması ve değiştirilmesi daha kolay olacak şekilde yeniden düzenleme.

---

## Viki

### urlModificationRules

Düzenli ifadeyle [URL değiştirme kuralları](https://tr.wikipedia.org/wiki/Düzenli_ifade)

| Değişken    | Açıklama                                       |
| ----------- | --------------------------------------------- |
| matchRegex  | orijinal URL'leri eşleştirmek için düzenli ifade |
| replaceWith | değiştirme için düzenli ifade            |

### selectorRules

Arama motoru sonuçları için güncellenmesi gereken DOM öğelerinin [Seçici](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) kuralları

| Değişken        | Açıklama                                                  |
| --------------- | ------------------------------------------------------------ |
| selector        | DOM öğesinin seçicisi                                      |
| updateText      | öğenin metin veya href değerini güncelleme bayrağı |
| childSelector   | ana öğenin altında çocuk DOM öğesi için seçici          |
| updateChildText | çocuk öğenin iç metnini güncelleme bayrağı |
| containProtocol | alan adında protokolü (örn. https://) içerme bayrağı |
| displayMethod   | gerekli, URL gösterim yöntemi<br/>yöntem 1: breadcrumb formatı<br/>yöntem 2: tam URL<br/>yöntem 3: protokol olmadan tam URL |
| multiElementsForUrlDisplay  | URL'nin birden fazla DOM öğesine ayrılıp ayrılmadığını gösteren bayrak |

### searchEngines

Kullanıcı tanımlı arama motoru domainleri listesi

| Değişken                 | Açıklama                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | arama motorunun domaini                                     |
| resultContainerSelectors | isteğe bağlı, arama sonucu konteyner DOM'unu ayarlayın, dinamik gözlemin kapsamını daraltmak için |
| attribute                | &lt;a&gt; içinde 'href' dışındaki diğer URL bağlantısı özniteliğini belirtin (örneğin 'data-target')<br/>Eğer tüm bağlantı öznitelikleri 'href' ise belirtmeye gerek yoktur |

