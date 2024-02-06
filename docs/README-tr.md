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

- [Google](https://www.google.com/supported_domains)
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
- [AOL](https://www.aol.com)
- [OneSearch](https://www.onesearch.com)
- [Info](https://info.com)
- [Swisscows](https://swisscows.com)
- [Lilo](https://search.lilo.org)
- [Entireweb](https://www.entireweb.com)
- [GMX](https://www.gmx.com)
- [YouCare](https://youcare.world)
- [Lycos](https://search.lycos.com)
- [AlohaFind](https://alohafind.com)
- [Murena Spot](https://spot.ecloud.global)
- [Nona](https://www.nona.de)
- [Exalead](https://www.exalead.com/search/web/)
- [Seznam](https://www.seznam.cz)
- [Gibiru](https://gibiru.com)
- [Lukol](https://www.lukol.com)
- [GiveWater](https://www.givewater.com)
- [Excite](https://results.excite.com)
- [WebCrawler](https://www.webcrawler.com)
- [MetaCrawler](https://www.metacrawler.com)
- [Dogpile](https://www.dogpile.com)

Kodda manuel olarak DOM seçici ekleyerek diğer arama motorlarını destekleyebilirsiniz.

[Bing](https://www.bing.com) desteklenemez, çünkü yalnızca ara bağlantılar sağlar.

Yahoo arama ve Yahoo Japonya aramasında URL değişikliği tam destek, Yahoo yönlendirme URL'si (https://r.search.yahoo.com/...) kaldırma desteği dahil, gerçek URL'leri çıkarmak için. Yahoo kullanmıyorsanız, Yahoo uyumluluğu olmadan [URL değiştirme kuralları](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/non-yahoo-urlModificationRules.js) kullanmayı tercih edebilirsiniz.

4get linkler değiştirildiğinde görüntülenen URL'leri buna göre değiştirmiyorlar. Bu sorun, kodumu mümkün olduğunca genelleştirilmiş yapmayı amaçlamamdan kaynaklanıyor, ancak bu arama motorlarının URL'leri görüntülemek için alışılmadık bir DOM yapısı var ve bu da onları desteklemeyi, nispeten küçük kullanıcı tabanlarını göz önünde bulundurarak zahmetli hale getiriyor.

> Sadece bir yan not olarak, [Kagi](https://kagi.com), yerleşik URL yönlendirme işlevine sahip bir arama motoru, denemeye değer bir ürün. Ben Kagi kullanıcısıyım ve bu üründen çok memnunum, bu yüzden burada onlara bir övgü veriyorum.

Daha fazla arama motoru bulun:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Yerleşik yönlendirmeler

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (örneğin [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (örneğin [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (örneğin [nitter.catsarch.com](https://nitter.catsarch.com))
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
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

Önemli bir nokta olarak, kendi düzenli ifade kurallarımızı yazmak yerine, gizlilik odaklı alternatif ön yüzlerin çalışan örneklerine otomatik olarak yönlendiren [Farside](https://github.com/benbusby/farside) kullanabilirsiniz.

Ancak, bu yöntem eşleşen URL'ler üzerinde daha ince ayar kontrolü desteklememekte ve Farside üzerinden bir yönlendirme gerektirdiğinden gerçekten yavaştır. Yine de bunu kullanmak istiyorsanız, `urlModificationRules` içindeki ilgili kısmın yorumunu kaldırabilirsiniz.

- Dahil etme deseni örneği: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Yönlendirilecek: `https://farside.link/$1`

- Betiğe ekle:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- Örnek URL: `https://www.youtube.com/watch?v=abc123`

- Sonuç URL: `https://farside.link/youtube.com/watch?v=abc123`

> Bilgi için, Farside'ı [Redirector](https://github.com/einaregilsson/Redirector)'da kurma wiki'si: https://github.com/benbusby/farside/wiki/Browser-Extension

---

## Yapılacaklar

1. Daha fazla arama motoru için destek ekleme.
2. Kodu okunması ve değiştirilmesi daha kolay olacak şekilde yeniden düzenleme.

---

## Viki

### urlModificationRules

Düzenli ifadeyle [URL değiştirme kuralları](https://tr.wikipedia.org/wiki/Düzenli_ifade)

| Değişken    | Açıklama                                         |
| ----------- | ------------------------------------------------ |
| matchRegex  | orijinal URL'leri eşleştirmek için düzenli ifade |
| replaceWith | değiştirme için düzenli ifade                    |

### selectorRules

Arama motoru sonuçları için güncellenmesi gereken DOM öğelerinin [Seçici](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) kuralları

| Değişken                             | Açıklama                                                     |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | DOM elemanı için seçici                                      |
| parentSelector                       | bağlantı elemanı ve metin elemanının ebeveyni için seçici    |
| linkNodeSelector                     | `parentSelector` tarafından belirtilen elemanın altındaki bağlantı elemanı için seçici |
| textNodeSelector                     | `parentSelector` tarafından belirtilen elemanın altındaki metin elemanı için seçici |
| updateChildText                      | `childSelector` tarafından belirtilen alt elemanın iç metnini güncelleme bayrağı |
| childSelector                        | `selector` veya `textNodeSelector` tarafından belirtilen elemanın altındaki çocuk DOM elemanı için seçici |
| updateTextWithoutOverwrite           | DOM elemanının altındaki diğer düğümleri silmeden textnode'u güncelleme bayrağı |
| updateTextByOverwritecontainProtocol | İçeriği, DOM elemanının altındaki her şeyi silerek güncelleme bayrağı<br/>protokolü (örn. https://) domainde gösterme bayrağı |
| useTopLevelDomain                    | URL'leri gösterirken üst düzey alan adını kullanma bayrağı   |
| urlDisplayMethod                     | gerekli, URL gösterim yöntemi<br/>yöntem 1: breadcrumb formatı<br/>yöntem 2: tam URL<br/>yöntem 3: protokolsüz tam URL |
| multiElementsForUrlDisplay           | gösterilen URL'nin birden çok DOM elemanına ayrılması bayrağı<br/>yöntem 1: URL parçaları paralel öğelere dağıtılmıştır<br/>yöntem 2: URL parçaları paralel olmayan öğelere dağıtılmıştır<br/>yöntem 3: yöntem 2 ile aynı, ancak öğelerin orijinal içeriğini temizlemeden günceller |

### searchEngines

Kullanıcı tanımlı arama motoru domainleri listesi

| Değişken                 | Açıklama                                                     |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | arama motorunun domaini                                      |
| resultContainerSelectors | isteğe bağlı, arama sonucu konteyner DOM'unu ayarlayın, dinamik gözlemin kapsamını daraltmak için |
| attribute                | &lt;a&gt; içinde 'href' dışındaki diğer URL bağlantısı özniteliğini belirtin (örneğin 'data-target')<br/>Eğer tüm bağlantı öznitelikleri 'href' ise belirtmeye gerek yoktur |
