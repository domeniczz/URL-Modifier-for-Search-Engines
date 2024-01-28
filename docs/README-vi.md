# Bộ-Chỉnh-Sửa-URL-cho-Các-Công-Cụ-Tìm-Kiếm

<div align="center">
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-vi.md">Việt</a> | 
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
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-tr.md">Türkçe</a> | 
	<a href="https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-fa.md">فارسی</a>
</div>
<br/>

**Mục lục**:

- [Giới thiệu](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md#Giới-thiệu)
- [Công việc cần làm](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md#Công-việc-cần-làm)
- [Wiki](https://github.com/domeniczz/URL-Modifier-for-Search-Engines/blob/master/docs/README-de.md#Wiki)

## Giới thiệu

Một script cho [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), cài đặt từ Greasy Fork: [URL Modifier for Search Engines](https://greasyfork.org/en/scripts/483597-url-modifier-for-search-engines).

- Kho GitHub: https://github.com/domeniczz/URL-Modifier-for-Search-Engines
- Kho Codeberg: https://codeberg.org/Domenic/URL-Modifier-for-Search-Engine-Results

Script Tampermonkey này nâng cao trải nghiệm sử dụng công cụ tìm kiếm của bạn bằng cách chỉnh sửa các URL trong kết quả tìm kiếm của các công cụ tìm kiếm, chuyển hướng đến các trang web thay thế. Cho phép trải nghiệm duyệt web cá nhân hóa và hiệu quả hơn.

Chỉnh sửa URL sử dụng Biểu thức chính quy.

<div align="center">
    <span>Kết quả tìm kiếm trước khi chỉnh sửa URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-without_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/><br/>
    <span>Kết quả tìm kiếm sau khi chỉnh sửa URL:</span><br/>
    <img src="https://raw.githubusercontent.com/domeniczz/URL-Modifier-for-Search-Engines/master/docs/assets/searxng_search_result_example-with_modification.png" width="650rem" style="border-radius:.4rem" float="left" alt="img:searxng_search_result_example-with_modification"/>
</div>

### Hỗ trợ Công cụ Tìm kiếm

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

Bạn có thể tự thêm bộ chọn DOM vào mã để hỗ trợ thêm công cụ tìm kiếm khác.

Không thể hỗ trợ [Bing](https://www.bing.com), vì nó chỉ cung cấp các liên kết trung gian.

4get, Lilo và Entireweb sẽ không thay đổi URL hiển thị tương ứng khi liên kết được thay đổi. Vấn đề này tồn tại bởi vì tôi muốn mã của mình được tổng quát nhất có thể, nhưng những công cụ tìm kiếm này có cấu trúc DOM không thông thường để hiển thị URL, khiến việc hỗ trợ chúng trở nên phức tạp với lượng người dùng tương đối nhỏ.

> Chỉ là một lưu ý nhỏ, [Kagi](https://kagi.com) là một công cụ tìm kiếm với chức năng chuyển hướng URL tích hợp, đáng để thử. Tôi là một người dùng của Kagi, và tôi rất hài lòng với sản phẩm này, nên tôi muốn giới thiệu họ ở đây.

Tìm thêm công cụ tìm kiếm:

- [Search Engine Map](https://www.searchenginemap.com)
- [Search Engine Party](https://searchengine.party)

### Chuyển hướng Tích hợp

- [Wikipedia](https://www.wikipedia.org) -> [Wikiwand](https://www.wikiwand.com)
- [Reddit](https://www.reddit.com) -> [Libreddit](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) (ví dụ: [safereddit.com](https://safereddit.com))
- [Quora](https://www.quora.com) -> [Quetre](https://github.com/zyachel/quetre#instances) (ví dụ: [quetre.iket.me](https://quetre.iket.me))
- [X (Twitter)](https://twitter.com) -> [Nitter](https://nitter.net)
- [Stack Overflow](https://stackoverflow.com) -> [Anonymous Overflow](https://github.com/httpjamesm/AnonymousOverflow#clearnet-instances) (ví dụ: [code.whatever.social](https://code.whatever.social))
- [Medium](https://medium.com) -> [Freedium](https://freedium.cfd)
- [Youtube](https://www.youtube.com) -> [Invidious](https://docs.invidious.io/instances) (ví dụ: [yewtu.be](https://yewtu.be))
- [Youtube Music](https://music.youtube.com) -> [Hyperpipe](https://hyperpipe.codeberg.page) (ví dụ: [hyperpipe.surge.sh](https://hyperpipe.surge.sh))
- [Twitch](https://www.twitch.tv) -> [SafeTwitch](https://codeberg.org/SafeTwitch/safetwitch#instances) (ví dụ: [ttv.vern.cc](https://ttv.vern.cc))
- [IMDB](https://www.imdb.com) -> [LibreMDB](https://github.com/zyachel/libremdb#instances) (ví dụ: [ld.vern.cc](https://ld.vern.cc))
- [Goodreads](https://www.goodreads.com) -> [BiblioReads](https://github.com/nesaku/BiblioReads#instances) (ví dụ: [bl.vern.cc](https://bl.vern.cc))
- [Urban Dictionary](https://www.urbandictionary.com) -> [Rural Dictionary](https://codeberg.org/zortazert/rural-dictionary#headline-2) (ví dụ: [rd.vern.cc](https://rd.vern.cc))
- [GitHub.ink](https://github.ink) -> [GitHub](https://github.com)
- [Hacker news](https://news.ycombinator.com) -> [hckrnws](https://github.com/rajatkulkarni95/hckrnws) (ví dụ: [hckrnws.com](https://hckrnws.com))
- [Fandom](https://www.fandom.com) -> [BreezeWiki](https://docs.breezewiki.com/Links.html) (ví dụ: [antifandom.com](https://antifandom.com/))
- [Reuters](https://www.reuters.com) -> [Neuters](https://github.com/HookedBehemoth/neuters) (ví dụ: [nu.vern.cc](https://nu.vern.cc))
- [Financial Times](https://www.ft.com) -> [Webpage Archive](https://archive.today)
- [Bloomberg](https://www.bloomberg.com) -> [Webpage Archive](https://archive.today)
- [NPR](https://www.npr.org) -> [NPR Text](https://text.npr.org)
- [Snopes](https://www.snopes.com) -> [Suds](https://git.vern.cc/cobra/Suds/src/branch/main/instances.json) (ví dụ: [sd.vern.cc](https://sd.vern.cc))
- [Instructables](https://www.instructables.com) -> [Destructables](https://git.vern.cc/cobra/Destructables/src/branch/main/instances.json) (ví dụ: [ds.vern.cc](https://ds.vern.cc))
- [Genius](https://genius.com) -> [Dumb](https://github.com/rramiachraf/dumb#public-instances) (ví dụ: [dm.vern.cc](https://dm.vern.cc))
- [Bandcamp](https://bandcamp.com) -> [Tent](https://forgejo.sny.sh/sun/Tent#instances) (ví dụ: [tn.vern.cc](https://tn.vern.cc))
- [Imgur](https://imgur.com) -> [Rimgo](https://rimgo.codeberg.page) (ví dụ: [rimgo.totaldarkness.net](https://rimgo.totaldarkness.net))
- [Pixiv](https://www.pixiv.net) -> [PixivFE](https://codeberg.org/VnPower/pixivfe#instances) (ví dụ: [pixivfe.exozy.me](https://pixivfe.exozy.me))
- [Know Your Meme](https://knowyourmeme.com) -> [MeMe](https://git.vern.cc/cobra/MeMe/src/branch/main/instances.json) (ví dụ: [mm.vern.cc](https://mm.vern.cc))
- [Tenor](https://tenor.com) -> [Soprano](https://git.vern.cc/cobra/Soprano/src/branch/main/instances.json) (ví dụ: [sp.vern.cc](https://sp.vern.cc))
- [iFunny](https://ifunny.co) -> [UNfunny](https://git.vern.cc/cobra/UNfunny/src/branch/main/instances.json) (ví dụ: [uf.vern.cc](https://uf.vern.cc))
- [ArXiv](https://arxiv.org) PDF (arxiv.org/pdf/\*.pdf) -> [ArXiv](https://arxiv.org) Abstract (arxiv.org/abs/\*)
- ...

Bạn có thể thêm các quy tắc chuyển hướng tùy chỉnh vào script.

Các giao diện thay thế khác, thân thiện với quyền riêng tư, xem:

- [LibRedirect](https://libredirect.github.io/index.html)
- [Alternative Frontends](https://github.com/digitalblossom/alternative-frontends)
- [Alternative Front Ends](https://awesomeopensource.com/project/mendel5/alternative-front-ends)
- [farside.link](https://farside.link)

Nhà cung cấp dịch vụ:

- [vern.cc](https://vern.cc)
- [lunar.icu](https://service.lunar.icu)
- [privacydev.net](https://privacydev.net/services.html)
- [frontendfriendly.xyz](https://frontendfriendly.xyz)
- [pussthecat.org](https://pussthecat.org)
- [tiekoetter.com](https://www.tiekoetter.com/en/services)
- ...

---

## Công việc cần làm

1. Thêm hỗ trợ cho nhiều công cụ tìm kiếm hơn.
2. Cải tiến mã nguồn để dễ đọc và chỉnh sửa hơn.

---

## Wiki

### urlModificationRules

Quy tắc chỉnh sửa URL bằng [biểu thức chính quy](https://vi.wikipedia.org/wiki/Biểu_thức_chính_quy)

| Biến             | Mô tả                                     |
| ---------------- | ----------------------------------------- |
| matchRegex       | biểu thức chính quy để khớp với URL gốc   |
| replaceWith      | biểu thức chính quy cho thay thế          |

### selectorRules

Quy tắc [Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) cho các phần tử DOM cần cập nhật trong kết quả tìm kiếm của công cụ tìm kiếm

| Biến                         | Mô tả                                                        |
| ---------------------------- | ------------------------------------------------------------ |
| selector                     | selector cho phần tử DOM                                     |
| updateText                   | cờ cho dù có cập nhật văn bản hay giá trị href của phần tử hay không |
| childSelector                | selector cho phần tử DOM con dưới phần tử cha                |
| updateChildText              | cờ cho dù có cập nhật văn bản bên trong của phần tử con hay không |
| containProtocol              | cờ cho dù có chứa giao thức (ví dụ: https://) trong miền hay không |
| displayMethod                | bắt buộc, phương thức hiển thị URL<br/>phương thức 1: định dạng breadcrumb<br/>phương thức 2: URL đầy đủ<br/>phương thức 3: URL đầy đủ không có giao thức |
| multiElementsForUrlDisplay | cờ cho dù URL hiển thị được chia thành nhiều phần tử DOM khác nhau |

### searchEngines

Danh sách do người dùng định nghĩa của các miền công cụ tìm kiếm

| Biến                         | Mô tả                                                        |
| ---------------------------- | ------------------------------------------------------------ |
| hosts                        | miền của công cụ tìm kiếm                                    |
| resultContainerSelectors     | tùy chọn, thiết lập bộ chọn DOM cho kết quả tìm kiếm, để thu hẹp phạm vi quan sát động |
| attribute                    | chỉ định thuộc tính liên kết URL bổ sung trong &lt;a&gt; khác với 'href' (ví dụ: 'data-target')<br/>không cần chỉ định nếu tất cả các thuộc tính liên kết đều là 'href' |

