# Pengubah-URL-untuk-Mesin-Pencari

<div align="center">
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md">Indonesia</a> | 
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
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-sv.md">Svenska</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fi.md">Suomi</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-da.md">Dansk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ko.md">한국어</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-it.md">Italiano</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-cs.md">Český</a><br/>
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-el.md">Ελληνικά</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-pl.md">Polski</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-ro.md">Român</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hu.md">Magyar</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-no.md">Norsk</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-uk.md">Українська</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-hi.md">हिंदी</a> | 
    <a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Katalog**:

- [Pendahuluan](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md#Pendahuluan)
- [Yang Harus Dilakukan](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md#Yang-Harus-Dilakukan)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-id.md#Wiki)

## Pendahuluan

Sebuah skrip [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), pasang dari Greasy Fork: [Pengubah URL untuk Mesin Pencari](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

Jika Anda belum memasang Tampermonkey di browser Anda, Anda dapat memasangnya dari [Toko Web Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) atau [Toko Web Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey).

- Repositori GitHub: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Repositori Codeberg: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

<b>Tolong berikan Saya Bintang di GitHub atau Codeberg jika Anda menemukan skrip saya berguna! Terima kasih! 😘</b>

Skrip Tampermonkey ini meningkatkan penggunaan mesin pencari Anda dengan mengubah URL dalam hasil pencarian mesin pencari, mengarahkan ke situs alternatif, memungkinkan pengalaman browsing yang lebih disesuaikan dan efisien. Anda juga dapat menambahkan aturan modifikasi URL kustom ke dalam skrip dan dipersilakan untuk mencommit aturan Anda ke skrip ini agar menjadi lebih berguna.

Modifikasi URL menggunakan Ekspresi Reguler.

<div align="center">
    <span>Hasil pencarian tanpa modifikasi URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Hasil pencarian setelah modifikasi URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Dukungan Mesin Pencari

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

Anda dapat menambahkan pemilih DOM secara manual dalam kode untuk mendukung mesin pencari lainnya.

Tidak dapat mendukung [Bing](https://www.bing.com), karena hanya menyediakan tautan perantara.

Untuk mesin pencari seperti Yahoo, Lycos, AlohaFind, skrip mendukung menghilangkan tautan pengalihan dan mengekstrak URL asli. Misalnya, tautan pengalihan Yahoo adalah "https://r.search.yahoo.com/...". Jika Anda tidak menggunakan mesin pencari ini, Anda dapat memilih menggunakan [aturan modifikasi URL](https://github.com/domeniczz/Pengubah-URL-untuk-Mesin-Pencari/blob/master/no-redirection-omit-url-rules.js) tanpa kompatibilitas tautan pengalihan. BTW, Anda dapat melihat semua aturan modifikasi URL RegEx bawaan [di sini](https://github.com/domeniczz/Pengubah-URL-untuk-Mesin-Pencari/blob/master/regexs.txt).

> Hanya catatan samping, [Kagi](https://kagi.com) adalah mesin pencari dengan fungsi pengalihan URL bawaan, layak untuk dicoba. Saya pengguna Kagi, dan saya sangat puas dengan produk ini, jadi saya memberikan teriakan di sini.

Temukan lebih banyak mesin pencari:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Pengalihan Bawaan

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (misalnya [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (misalnya [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://github.com/zedeus/nitter/wiki/Instances) (misalnya [nitter.catsarch.com](https://nitter.catsarch.com))
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (misalnya [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (misalnya [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (misalnya [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (misalnya [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (misalnya [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (misalnya [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (misalnya [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (misalnya [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (misalnya [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (misalnya [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (misalnya [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (misalnya [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (misalnya [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (misalnya [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (misalnya [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (misalnya [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (misalnya [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (misalnya [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (misalnya [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Anda dapat menambahkan aturan pengalihan kustom ke dalam skrip sendiri.

Alternatif frontend ramah privasi lainnya, lihat:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Penyedia layanan:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [projectsegfau.lt](https://projectsegfau.lt/instances)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

BTW, Anda bisa menggunakan [Farside](https://github.com/benbusby/farside) yang secara otomatis mengarahkan ke instansi yang berfungsi dari frontend alternatif yang berorientasi privasi daripada menulis aturan ekspresi reguler sendiri.

Namun, metode ini tidak mendukung kontrol yang lebih terperinci atas URL yang cocok dan sangat lambat karena pengalihan oleh fars

ide diperlukan. Jika Anda ingin menggunakan ini, Anda dapat mengaktifkan bagian yang sesuai dalam `urlModificationRules`.

- Contoh pola termasuk: `^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)`

- Dialihkan ke: `https://farside.link/$1`

- Tambahkan ke skrip:
  
  ```js
  const urlModificationRules = [
      {
          matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
          replaceWith: 'https://farside.link/$1'
      },
      // ...
  ];
  ```

- URL Contoh: `https://www.youtube.com/watch?v=abc123`

- URL Hasil: `https://farside.link/youtube.com/watch?v=abc123`

> FYI, wiki untuk mengatur farside di [Redirector](https://github.com/einaregilsson/Redirector): https://github.com/benbusby/farside/wiki/Extension-Browser

---

## Yang Harus Dilakukan

1. Menambahkan dukungan untuk lebih banyak mesin pencari.
2. Merombak kode agar lebih mudah dibaca dan dimodifikasi.

---

## Wiki

### urlModificationRules

Aturan modifikasi URL dalam [ekspresi reguler](https://id.wikipedia.org/wiki/Ekspresi_reguler)

| Variabel    | Deskripsi                                   |
| ----------- | ------------------------------------------- |
| matchRegex  | ekspresi reguler untuk mencocokkan URL asli |
| replaceWith | ekspresi reguler untuk penggantian          |

### selectorRules

[Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) aturan untuk elemen DOM yang perlu diperbarui untuk hasil mesin pencari

| Variabel                             | Deskripsi                                                    |
| ------------------------------------ | ------------------------------------------------------------ |
| selector                             | pemilih untuk elemen DOM                                     |
| parentSelector                       | pemilih untuk induk elemen tautan dan elemen teks            |
| linkNodeSelector                     | pemilih untuk elemen tautan di bawah elemen yang ditentukan oleh `parentSelector` |
| textNodeSelector                     | pemilih untuk elemen teks di bawah elemen yang ditentukan oleh `parentSelector` |
| updateChildText                      | bendera untuk apakah memperbarui teks dalam dari elemen anak yang ditentukan oleh `childSelector` |
| childSelector                        | pemilih untuk elemen anak DOM di bawah elemen yang ditentukan oleh `selector` atau `textNodeSelector` |
| updateTextWithoutOverwrite           | bendera untuk memperbarui textnode tanpa menimpa node lain di bawah elemen DOM |
| updateTextByOverwritecontainProtocol | bendera untuk memperbarui konten dengan menimpa segala sesuatu di bawah elemen DOMflag untuk apakah mengandung protokol (mis. https://) dalam domain |
| useTopLevelDomain                    | bendera untuk apakah menggunakan domain tingkat atas saat menampilkan URL |
| urlDisplayMethod                     | diperlukan, metode tampilan URL<br/>metode 1: format breadcrumb<br/>metode 2: URL lengkap<br/>metode 3: URL lengkap tanpa protokol |
| multiElementsForUrlDisplay           | bendera untuk apakah URL yang ditampilkan dipisahkan menjadi beberapa elemen DOM<br/>metode 1: bagian URL tersebar ke elemen paralel<br/>metode 2: bagian URL tersebar ke elemen non-paralel<br/>metode 3: sama seperti metode 2, tapi perbarui elemen tanpa menghapus konten asli mereka |

### searchEngines

Daftar domain mesin pencari yang ditentukan pengguna

| Variabel                 | Deskripsi                                                    |
| ------------------------ | ------------------------------------------------------------ |
| hosts                    | domain mesin pencari                                         |
| resultContainerSelectors | opsional, atur kontainer hasil pencarian DOM, untuk mempersempit jangkauan pengamatan dinamis |
| attribute                | tentukan atribut tautan URL tambahan di &lt;a&gt; selain 'href' (mis. 'data-target')<br/>tidak perlu menentukan ini jika semua atribut tautan adalah 'href' |
