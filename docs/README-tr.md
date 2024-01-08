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

Bu Tampermonkey betiği, arama motorları sonuçlarındaki URL'leri değiştirerek, alternatif sitelere yönlendirme yaparak arama motoru kullanımınızı geliştirir. Daha özelleştirilmiş ve verimli bir tarama deneyimi sağlar.

URL değiştirme Düzenli İfade (Regular Expression) kullanır.

### Desteklenen Arama Motorları

- [Google](https://www.google.com)
- [SearXNG](https://searx.space/) (Tiekötter & Disroot)
- [StartPage](https://www.startpage.com)
- [Brave](https://search.brave.com)
- [DuckDuckGo](https://duckduck)
- [Metager](https://metager.org)
- [Mojeek](https://www.mojeek.com)

Kodda manuel olarak DOM seçici ekleyerek diğer arama motorlarını destekleyebilirsiniz.

[Bing](https://www.bing.com) desteklenemez, çünkü yalnızca ara bağlantılar sağlar.

### Yerleşik yönlendirmeler

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Eski Reddit](https://old.reddit.com)
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (örnek [yewtu.be](https://yewtu.be))
- [Stack Overflow](https://stackoverflow.com) -> [Anonim Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (örnek [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com/) -> [Freedium](https://freedium.cfd)
- [NPR](https://www.npr.org) -> [NPR Metni](https://text.npr.org)
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page/) (örnek [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- ArXiv PDF -> ArXiv Özeti
- ...

Betik içine kendiniz özel yönlendirme kuralları ekleyebilirsiniz.

Diğer alternatif gizlilik dostu ön uçlar için, [LibRedirect](https://libredirect.github.io/index.html)’i görün.

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
| hasSubResults   | arama motorunun alt sonuçlara sahip olup olmadığını belirten bayrak |
| subResultSelector | alt sonuçlar için seçici |

### searchEngines

Kullanıcı tanımlı arama motoru domainleri listesi

| Değişken                 | Açıklama                                                  |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | arama motorunun domaini                                     |
| resultContainerSelectors | isteğe bağlı, arama sonucu konteyner DOM'unu ayarlayın, dinamik gözlemin kapsamını daraltmak için |

