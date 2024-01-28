# Arama-Motorları-için-URL-Değiştirici

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/README.md">English</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-cn.md">简体中文</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-zh-tw.md">繁體中文</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-es.md">Español</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pt.md">Português</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ru.md">Pусский</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ja.md">日本語</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fr.md">Français</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md">Deutsch</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-nl.md">Nederlands</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Katalog**:

- [Giriş](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md#Giriş)
- [Yapılacaklar](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md#Yapılacaklar)
- [Viki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md#Viki)

## Giriş

[Tampermonkey](https://github.com/Tampermonkey/tampermonkey) script'i, Greasy Fork'tan yükleyin: [Arama Motorları için URL Değiştirici](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- GitHub Depo: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
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

Kodda manuel olarak DOM seçici ekleyerek diğer arama motorlarını destekleyebilirsiniz.

[Bing](https://www.bing.com) desteklenemez, çünkü yalnızca ara bağlantılar sağlar.

4get, Lilo ve Entireweb, linkler değiştirildiğinde görüntülenen URL'leri buna göre değiştirmiyorlar. Bu sorun, kodumu mümkün olduğunca genelleştirilmiş yapmayı amaçlamamdan kaynaklanıyor, ancak bu arama motorlarının URL'leri görüntülemek için alışılmadık bir DOM yapısı var ve bu da onları desteklemeyi, nispeten küçük kullanıcı tabanlarını göz önünde bulundurarak zahmetli hale getiriyor.

> Sadece bir yan not olarak, [Kagi](https://kagi.com), yerleşik URL yönlendirme işlevine sahip bir arama motoru, denemeye değer bir ürün. Ben Kagi kullanıcısıyım ve bu üründen çok memnunum, bu yüzden burada onlara bir övgü veriyorum.

Daha fazla arama motoru bulun:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Yerleşik yönlendirmeler

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (örneğin [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (örneğin [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (örneğin [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (örneğin [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (örneğin [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (örneğin [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (örneğin [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (örneğin [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (örneğin [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (örneğin [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (örneğin [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (örneğin [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (örneğin [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (örneğin [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (örneğin [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (örneğin [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (örneğin [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (örneğin [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (örneğin [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (örneğin [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (örneğin [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Betik içine kendiniz özel yönlendirme kuralları ekleyebilirsiniz.

Diğer gizlilik dostu ön uçlar için bkz:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Servis sağlayıcıları:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

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

