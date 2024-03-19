// ==UserScript==
// @name         URL Modifier for Search Engines
// @name:zh-CN   搜索引擎结果 URL 修改器
// @name:zh-TW   搜索引擎結果 URL 修改器
// @name:es      Modificador de URL para Motores de Búsqueda
// @name:pt      Modificador de URL para Motores de Busca
// @name:ru      Изменитель URL для Поисковых Систем
// @name:ja      検索エンジン用 URL 修正
// @name:fr      Modificateur d'URL pour les moteurs de recherche
// @name:de      URL Modifier für Suchmaschinen
// @name:nl      URL Wijzigingsmodule voor Zoekmachines
// @name:sv      URL Modifierare för Sökmotorer
// @name:fi      URL Muokkain Hakukoneille
// @name:da      URL Modifier til Søgemaskiner
// @name:ko      검색 엔진용 URL 수정기
// @name:it      Modificatore di URL per Motori di Ricerca
// @name:cs      Modifikátor URL pro vyhledávače
// @name:el      Μετατροπέας URL για Μηχανές Αναζήτησης
// @name:he      מתקן URL למנועי חיפוש
// @name:pl      Modyfikator URL dla Wyszukiwarek
// @name:tr      Arama Motorları için URL Değiştirici
// @name:ro      Modificator de URL pentru Motoare de Căutare
// @name:hu      URL Módosító a Keresőmotorokhoz
// @name:no      URL Modifier for Søkemotorer
// @name:uk      Модифікатор URL для Пошукових Систем
// @name:id      Pengubah URL untuk Mesin Pencari
// @name:vi      Bộ Chỉnh Sửa URL cho Các Công Cụ Tìm Kiếm
// @name:hi      सर्च इंजनों के लिए URL संशोधक
// @name:fa      تغییردهنده URL برای موتورهای جستجو

// @version      2.6.2
// @author       Domenic
// @namespace    http://tampermonkey.net/

// @description  This Tampermonkey script enhances your search engine usage by modifying (redirecting) URLs in the search result of search engines, redirecting to alternative sites, allowing for a more customized and efficient browsing experience. You can also add you custom URL modification rule to the script and are welcomed to commit your rules to this script to make it much more useful.
// @description:zh-cn  这个 Tampermonkey 脚本通过修改搜索引擎结果中的 URL，重定向到替代网站，从而增强了您的搜索引擎使用体验，允许更自定义和高效的浏览体验。您还可以添加自定义的 URL 修改规则到脚本中，并欢迎将您的规则提交给这个脚本，使其变得更加有用。
// @description:zh-tw  這個 Tampermonkey 腳本通過修改搜索引擎結果中的 URL，重定向到替代網站，從而增強了您的搜索引擎使用體驗，允許更自定義和高效的瀏覽體驗。您還可以添加自定義的 URL 修改規則到腳本中，並歡迎將您的規則提交給這個腳本，使其變得更加有用。
// @description:es     Este script de Tampermonkey mejora tu uso del motor de búsqueda modificando las URLs en los resultados de búsqueda de los motores de búsqueda, redirigiendo a sitios alternativos, lo que permite una experiencia de navegación más personalizada y eficiente. También puedes añadir tu regla de modificación de URL personalizada al script y se te invita a comprometer tus reglas con este script para hacerlo aún más útil.
// @description:pt     Este script do Tampermonkey aprimora seu uso do mecanismo de busca modificando URLs nos resultados de pesquisa dos motores de busca, redirecionando para sites alternativos, permitindo uma experiência de navegação mais personalizada e eficiente. Você também pode adicionar sua própria regra de modificação de URL ao script e é bem-vindo para comprometer suas regras com este script para torná-lo ainda mais útil.
// @description:ru     Этот скрипт Tampermonkey улучшает использование поисковой системы за счет модификации URL-адресов в результатах поиска, перенаправляя на альтернативные сайты, что позволяет более настраиваемый и эффективный опыт просмотра. Вы также можете добавить свое собственное правило модификации URL в скрипт и приветствуется ваш вклад в этот скрипт своими правилами, чтобы сделать его еще более полезным.
// @description:ja     この Tampermonkey スクリプトは、検索エンジンの検索結果の URL を変更して代替サイトにリダイレクトすることで、検索エンジンの使用体験を向上させ、よりカスタマイズされ効率的なブラウジング体験を可能にします。また、カスタム URL 変更ルールをスクリプトに追加することができ、このスクリプトをさらに便利にするためにあなたのルールをコミットすることを歓迎します。
// @description:fr     Ce script Tampermonkey améliore votre utilisation du moteur de recherche en modifiant les URL dans les résultats de recherche des moteurs de recherche, redirigeant vers des sites alternatifs, permettant une expérience de navigation plus personnalisée et efficace. Vous pouvez également ajouter votre propre règle de modification d'URL au script et êtes invité à engager vos règles avec ce script pour le rendre encore plus utile.
// @description:de     Dieses Tampermonkey-Skript verbessert Ihre Nutzung der Suchmaschine, indem es URLs in den Suchergebnissen von Suchmaschinen modifiziert, auf alternative Seiten umleitet und so ein individuelleres und effizienteres Browsing-Erlebnis ermöglicht. Sie können auch Ihre eigene URL-Modifikationsregel zum Skript hinzufügen und sind eingeladen, Ihre Regeln zu diesem Skript beizutragen, um es noch nützlicher zu machen.
// @description:nl     Dit Tampermonkey-script verbetert uw zoekmachinegebruik door URL's in de zoekresultaten van zoekmachines te wijzigen, om te leiden naar alternatieve sites, wat een meer aangepaste en efficiënte browse-ervaring mogelijk maakt. U kunt ook uw eigen URL-wijzigingsregel aan het script toevoegen en u wordt uitgenodigd om uw regels aan dit script te committeren om het nog nuttiger te maken.
// @description:sv     Detta Tampermonkey-skript förbättrar din användning av sökmotorer genom att modifiera URL:er i sökresultaten från sökmotorer, omdirigera till alternativa webbplatser, vilket möjliggör en mer anpassad och effektiv surfupplevelse. Du kan också lägga till din egen anpassade URL-modifieringsregel till skriptet och är välkommen att bidra med dina regler till detta skript för att göra det ännu mer användbart.
// @description:fi     Tämä Tampermonkey-skripti tehostaa hakukoneiden käyttöäsi muokkaamalla hakutulosten URL-osoitteita hakukoneissa, ohjaten vaihtoehtoisille sivustoille, mahdollistaen mukautetumman ja tehokkaamman selailukokemuksen. Voit myös lisätä omia URL-muokkaussääntöjäsi skriptiin ja olet tervetullut lähettämään sääntöjäsi tähän skriptiin, jotta se olisi vieläkin hyödyllisempi.
// @description:da     Dette Tampermonkey script forbedrer din brug af søgemaskiner ved at ændre URL'er i søgemaskinens søgeresultater, omdirigere til alternative sider, hvilket tillader en mere tilpasset og effektiv browsing oplevelse. Du kan også tilføje din egen tilpassede URL-ændringsregel til scriptet og er velkommen til at bidrage med dine regler til dette script for at gøre det endnu mere nyttigt.
// @description:ko     이 Tampermonkey 스크립트는 검색 엔진의 검색 결과에서 URL 을 수정하여 대체 사이트로 리디렉션함으로써 검색 엔진 사용을 개선하고 더 맞춤화되고 효율적인 브라우징 경험을 가능하게 합니다. 또한 사용자만의 URL 수정 규칙을 스크립트에 추가할 수 있으며, 이 스크립트를 더 유용하게 만들기 위해 규칙을 커밋하는 것을 환영합니다.
// @description:it     Questo script di Tampermonkey migliora l'uso del motore di ricerca modificando gli URL nei risultati di ricerca dei motori di ricerca, reindirizzando a siti alternativi, consentendo un'esperienza di navigazione più personalizzata ed efficiente. Puoi anche aggiungere la tua regola di modifica dell'URL allo script e sei invitato a impegnare le tue regole con questo script per renderlo ancora più utile.
// @description:cs     Tento skript Tampermonkey vylepšuje vaše používání vyhledávače úpravou URL výsledků vyhledávání na vyhledávačích, přesměrováním na alternativní stránky, což umožňuje více přizpůsobený a efektivnější prohlížecí zážitek. Můžete také přidat své vlastní pravidlo úpravy URL do skriptu a jste vítáni, abyste svá pravidla s tímto skriptem zavázali, aby byl ještě užitečnější.
// @description:el     Αυτό το σενάριο Tampermonkey ενισχύει τη χρήση της μηχανής αναζήτησης σας με την τροποποίηση των URL στα αποτελέσματα αναζήτησης των μηχανών αναζήτησης, ανακατευθύνοντας σε εναλλακτικούς ιστότοπους, επιτρέποντας μια πιο προσαρμοσμένη και αποδοτική εμπειρία περιήγησης. Μπορείτε επίσης να προσθέσετε τον δικό σας κανόνα τροποποίησης URL στο σενάριο και είστε ευπρόσδεκτοι να δεσμεύσετε τους κανόνες σας σε αυτό το σενάριο για να το κάνετε ακόμα πιο χρήσιμο.
// @description:he     סקריפט Tampermonkey זה משפר את השימוש במנועי חיפוש שלך על ידי שינוי URL-ים בתוצאות החיפוש של מנועי חיפוש, הפניה לאתרים חלופיים, מה שמאפשר חוויית גלישה מותאמת אישית ויעילה יותר. תוכל גם להוסיף כלל שינוי URL מותאם אישית לסקריפט ולהתחייב בכללים שלך לסקריפט זה כדי להפוך אותו לשימושי יותר.
// @description:pl     Ten skrypt Tampermonkey ulepsza korzystanie z wyszukiwarek internetowych poprzez modyfikację URL-i w wynikach wyszukiwania, przekierowując do alternatywnych stron, co pozwala na bardziej spersonalizowane i efektywne przeglądanie sieci. Możesz również dodać własne reguły modyfikacji URL do skryptu i jesteś mile widziany, aby dodać swoje reguły do tego skryptu, aby uczynić go jeszcze bardziej użytecznym.
// @description:tr     Bu Tampermonkey betiği, arama motoru sonuçlarındaki URL'leri değiştirerek alternatif sitelere yönlendirme yaparak arama motoru kullanımınızı geliştirir, daha özelleştirilmiş ve verimli bir tarama deneyimi sağlar. Ayrıca özel URL değiştirme kuralınızı betiğe ekleyebilir ve bu betiği daha faydalı hale getirmek için kuralınızı bu betikle taahhüt etmeye davet edilirsiniz.
// @description:ro     Acest script Tampermonkey îmbunătățește utilizarea motorului de căutare prin modificarea URL-urilor în rezultatele căutării motoarelor de căutare, redirecționând către site-uri alternative, permițând o experiență de navigare mai personalizată și eficientă. Puteți adăuga, de asemenea, regula de modificare a URL-ului personalizat la script și sunteți bineveniți să vă angajați regulile la acest script pentru a-l face mult mai util.
// @description:no     Dette Tampermonkey-skriptet forbedrer din bruk av søkemotorer ved å endre URL-er i søkeresultatet fra søkemotorer, omdirigere til alternative nettsteder, noe som tillater en mer tilpasset og effektiv nettleseropplevelse. Du kan også legge til din egen tilpassede URL-modifikasjonsregel i skriptet og er velkommen til å forplikte dine regler til dette skriptet for å gjøre det mye mer nyttig.
// @description:hu     Ez a Tampermonkey szkript fokozza a keresőmotorok használatát a keresési eredmények URL-jeinek módosításával, alternatív oldalakra való átirányítással, lehetővé téve egy személyre szabottabb és hatékonyabb böngészési élményt. Hozzáadhatsz saját URL módosítási szabályokat a szkripthez, és szívesen látjuk, ha hozzájárulsz a szabályaidat ehhez a szkripthez, hogy még hasznosabbá tegyük.
// @description:uk     Цей скрипт для Tampermonkey покращує ваше використання пошукових систем шляхом модифікації URL-адрес у результатах пошуку пошукових систем, перенаправляючи на альтернативні сайти, що дозволяє отримати більш налаштований і ефективний досвід перегляду. Ви також можете додати власне правило модифікації URL до скрипта та вітаєтеся додати свої правила до цього скрипта, щоб зробити його набагато кориснішим.
// @description:id     Skrip Tampermonkey ini meningkatkan penggunaan mesin pencari Anda dengan mengubah URL dalam hasil pencarian mesin pencari, mengarahkan ke situs alternatif, memungkinkan pengalaman browsing yang lebih disesuaikan dan efisien. Anda juga dapat menambahkan aturan modifikasi URL kustom ke dalam skrip dan dipersilakan untuk mencommit aturan Anda ke skrip ini agar menjadi lebih berguna.
// @description:vi     Script Tampermonkey này cải thiện việc sử dụng công cụ tìm kiếm của bạn bằng cách chỉnh sửa URL trong kết quả tìm kiếm của các công cụ tìm kiếm, chuyển hướng đến các trang thay thế, cho phép trải nghiệm duyệt web tùy chỉnh và hiệu quả hơn. Bạn cũng có thể thêm quy tắc chỉnh sửa URL tùy chỉnh của mình vào script và được chào đón để cam kết các quy tắc của mình với script này để làm cho nó hữu ích hơn.
// @description:hi     यह Tampermonkey स्क्रिप्ट आपके सर्च इंजन उपयोग को बेहतर बनाती है जिससे सर्च इंजन के परिणामों में URLs को संशोधित करके वैकल्पिक साइटों पर पुनर्निर्देशित किया जा सकता है, जिससे अधिक कस्टमाइज़्ड और कुशल ब्राउज़िंग अनुभव प्रदान किया जा सकता है। आप इस स्क्रिप्ट में अपना कस्टम URL संशोधन नियम जोड़ सकते हैं और इसे अधिक उपयोगी बनाने के लिए अपने नियमों को इस स्क्रिप्ट में कमिट करने का स्वागत है।
// @description:fa     این اسکریپت Tampermonkey با تغییر URL‌ها در نتایج جستجوی موتورهای جستجو و هدایت به سایت‌های جایگزین، استفاده شما از موتور جستجو را بهبود می‌بخشد و امکان تجربه‌ای شخصی‌سازی شده و کارآمدتر در مرور وب را فراهم می‌آورد. شما همچنین می‌توانید قانون تغییر URL سفارشی خود را به اسکریپت اضافه کنید و برای کردن این اسکریپت به ابزاری مفیدتر، دعوت به ارسال قوانین خود به این اسکریپت می‌شوید.

// @match        *://www.google.com/search?*
// @match        *://www.google.ad/search?*
// @match        *://www.google.ae/search?*
// @match        *://www.google.com.af/search?*
// @match        *://www.google.com.ag/search?*
// @match        *://www.google.al/search?*
// @match        *://www.google.am/search?*
// @match        *://www.google.co.ao/search?*
// @match        *://www.google.com.ar/search?*
// @match        *://www.google.as/search?*
// @match        *://www.google.at/search?*
// @match        *://www.google.com.au/search?*
// @match        *://www.google.az/search?*
// @match        *://www.google.ba/search?*
// @match        *://www.google.com.bd/search?*
// @match        *://www.google.be/search?*
// @match        *://www.google.bf/search?*
// @match        *://www.google.bg/search?*
// @match        *://www.google.com.bh/search?*
// @match        *://www.google.bi/search?*
// @match        *://www.google.bj/search?*
// @match        *://www.google.com.bn/search?*
// @match        *://www.google.com.bo/search?*
// @match        *://www.google.com.br/search?*
// @match        *://www.google.bs/search?*
// @match        *://www.google.bt/search?*
// @match        *://www.google.co.bw/search?*
// @match        *://www.google.by/search?*
// @match        *://www.google.com.bz/search?*
// @match        *://www.google.ca/search?*
// @match        *://www.google.cd/search?*
// @match        *://www.google.cf/search?*
// @match        *://www.google.cg/search?*
// @match        *://www.google.ch/search?*
// @match        *://www.google.ci/search?*
// @match        *://www.google.co.ck/search?*
// @match        *://www.google.cl/search?*
// @match        *://www.google.cm/search?*
// @match        *://www.google.cn/search?*
// @match        *://www.google.com.co/search?*
// @match        *://www.google.co.cr/search?*
// @match        *://www.google.com.cu/search?*
// @match        *://www.google.cv/search?*
// @match        *://www.google.com.cy/search?*
// @match        *://www.google.cz/search?*
// @match        *://www.google.de/search?*
// @match        *://www.google.dj/search?*
// @match        *://www.google.dk/search?*
// @match        *://www.google.dm/search?*
// @match        *://www.google.com.do/search?*
// @match        *://www.google.dz/search?*
// @match        *://www.google.com.ec/search?*
// @match        *://www.google.ee/search?*
// @match        *://www.google.com.eg/search?*
// @match        *://www.google.es/search?*
// @match        *://www.google.com.et/search?*
// @match        *://www.google.fi/search?*
// @match        *://www.google.com.fj/search?*
// @match        *://www.google.fm/search?*
// @match        *://www.google.fr/search?*
// @match        *://www.google.ga/search?*
// @match        *://www.google.ge/search?*
// @match        *://www.google.gg/search?*
// @match        *://www.google.com.gh/search?*
// @match        *://www.google.com.gi/search?*
// @match        *://www.google.gl/search?*
// @match        *://www.google.gm/search?*
// @match        *://www.google.gr/search?*
// @match        *://www.google.com.gt/search?*
// @match        *://www.google.gy/search?*
// @match        *://www.google.com.hk/search?*
// @match        *://www.google.hn/search?*
// @match        *://www.google.hr/search?*
// @match        *://www.google.ht/search?*
// @match        *://www.google.hu/search?*
// @match        *://www.google.co.id/search?*
// @match        *://www.google.ie/search?*
// @match        *://www.google.co.il/search?*
// @match        *://www.google.im/search?*
// @match        *://www.google.co.in/search?*
// @match        *://www.google.iq/search?*
// @match        *://www.google.is/search?*
// @match        *://www.google.it/search?*
// @match        *://www.google.je/search?*
// @match        *://www.google.com.jm/search?*
// @match        *://www.google.jo/search?*
// @match        *://www.google.co.jp/search?*
// @match        *://www.google.co.ke/search?*
// @match        *://www.google.com.kh/search?*
// @match        *://www.google.ki/search?*
// @match        *://www.google.kg/search?*
// @match        *://www.google.co.kr/search?*
// @match        *://www.google.com.kw/search?*
// @match        *://www.google.kz/search?*
// @match        *://www.google.la/search?*
// @match        *://www.google.com.lb/search?*
// @match        *://www.google.li/search?*
// @match        *://www.google.lk/search?*
// @match        *://www.google.co.ls/search?*
// @match        *://www.google.lt/search?*
// @match        *://www.google.lu/search?*
// @match        *://www.google.lv/search?*
// @match        *://www.google.com.ly/search?*
// @match        *://www.google.co.ma/search?*
// @match        *://www.google.md/search?*
// @match        *://www.google.me/search?*
// @match        *://www.google.mg/search?*
// @match        *://www.google.mk/search?*
// @match        *://www.google.ml/search?*
// @match        *://www.google.com.mm/search?*
// @match        *://www.google.mn/search?*
// @match        *://www.google.com.mt/search?*
// @match        *://www.google.mu/search?*
// @match        *://www.google.mv/search?*
// @match        *://www.google.mw/search?*
// @match        *://www.google.com.mx/search?*
// @match        *://www.google.com.my/search?*
// @match        *://www.google.co.mz/search?*
// @match        *://www.google.com.na/search?*
// @match        *://www.google.com.ng/search?*
// @match        *://www.google.com.ni/search?*
// @match        *://www.google.ne/search?*
// @match        *://www.google.nl/search?*
// @match        *://www.google.no/search?*
// @match        *://www.google.com.np/search?*
// @match        *://www.google.nr/search?*
// @match        *://www.google.nu/search?*
// @match        *://www.google.co.nz/search?*
// @match        *://www.google.com.om/search?*
// @match        *://www.google.com.pa/search?*
// @match        *://www.google.com.pe/search?*
// @match        *://www.google.com.pg/search?*
// @match        *://www.google.com.ph/search?*
// @match        *://www.google.com.pk/search?*
// @match        *://www.google.pl/search?*
// @match        *://www.google.pn/search?*
// @match        *://www.google.com.pr/search?*
// @match        *://www.google.ps/search?*
// @match        *://www.google.pt/search?*
// @match        *://www.google.com.py/search?*
// @match        *://www.google.com.qa/search?*
// @match        *://www.google.ro/search?*
// @match        *://www.google.ru/search?*
// @match        *://www.google.rw/search?*
// @match        *://www.google.com.sa/search?*
// @match        *://www.google.com.sb/search?*
// @match        *://www.google.sc/search?*
// @match        *://www.google.se/search?*
// @match        *://www.google.com.sg/search?*
// @match        *://www.google.sh/search?*
// @match        *://www.google.si/search?*
// @match        *://www.google.sk/search?*
// @match        *://www.google.com.sl/search?*
// @match        *://www.google.sn/search?*
// @match        *://www.google.so/search?*
// @match        *://www.google.sm/search?*
// @match        *://www.google.sr/search?*
// @match        *://www.google.st/search?*
// @match        *://www.google.com.sv/search?*
// @match        *://www.google.td/search?*
// @match        *://www.google.tg/search?*
// @match        *://www.google.co.th/search?*
// @match        *://www.google.com.tj/search?*
// @match        *://www.google.tl/search?*
// @match        *://www.google.tm/search?*
// @match        *://www.google.tn/search?*
// @match        *://www.google.to/search?*
// @match        *://www.google.com.tr/search?*
// @match        *://www.google.tt/search?*
// @match        *://www.google.com.tw/search?*
// @match        *://www.google.co.tz/search?*
// @match        *://www.google.com.ua/search?*
// @match        *://www.google.co.ug/search?*
// @match        *://www.google.co.uk/search?*
// @match        *://www.google.com.uy/search?*
// @match        *://www.google.co.uz/search?*
// @match        *://www.google.com.vc/search?*
// @match        *://www.google.co.ve/search?*
// @match        *://www.google.co.vi/search?*
// @match        *://www.google.com.vn/search?*
// @match        *://www.google.vu/search?*
// @match        *://www.google.ws/search?*
// @match        *://www.google.rs/search?*
// @match        *://www.google.co.za/search?*
// @match        *://www.google.co.zm/search?*
// @match        *://www.google.co.zw/search?*
// @match        *://www.google.cat/search?*

// @match        *://www.bing.com/search?*

// @match        *://search.yahoo.com/search*
// @match        *://search.yahoo.co.jp/search?*
// @match        *://*.search.yahoo.com/search*

// @match        *://www.baidu.com/s?*

// @match        *://yandex.com/search/?*
// @match        *://yandex.ru/search/?*

// @match        *://search.disroot.org/search*
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.bus-hit.me/search*
// @match        *://search.inetol.net/search*
// @match        *://priv.au/search*
// @match        *://searx.be/search*
// @match        *://searxng.site/search*
// @match        *://search.hbubli.cc/search*
// @match        *://search.im-in.space/search*
// @match        *://opnxng.com/search*
// @match        *://search.upinmars.com/search*
// @match        *://search.sapti.me/search*
// @match        *://freesearch.club/search*
// @match        *://xo.wtf/search*
// @match        *://www.gruble.de/search*
// @match        *://searx.tuxcloud.net/search*
// @match        *://baresearch.org/search*
// @match        *://searx.daetalytica.io/search*
// @match        *://etsi.me/search*
// @match        *://search.leptons.xyz/search*
// @match        *://search.rowie.at/search*
// @match        *://search.mdosch.de/search*
// @match        *://searx.catfluori.de/search*
// @match        *://searx.si/search*
// @match        *://searx.namejeff.xyz/search*
// @match        *://search.itstechtime.com/search*
// @match        *://s.mble.dk/search*
// @match        *://searx.kutay.dev/search*
// @match        *://ooglester.com/search*
// @match        *://searx.ox2.fr/search*
// @match        *://searx.techsaviours.org/search*
// @match        *://searx.perennialte.ch/search*
// @match        *://s.trung.fun/searxng/search*
// @match        *://search.in.projectsegfau.lt/search*
// @match        *://search.projectsegfau.lt/search*
// @match        *://darmarit.org/searx/search*
// @match        *://searx.lunar.icu/search*
// @match        *://nyc1.sx.ggtyler.dev/search*
// @match        *://search.rhscz.eu/search*
// @match        *://paulgo.io/search*
// @match        *://northboot.xyz/search*
// @match        *://searx.zhenyapav.com/search*
// @match        *://searxng.ch/search*
// @match        *://copp.gg/search*
// @match        *://searx.sev.monster/search*
// @match        *://searx.oakleycord.dev/search*
// @match        *://searx.juancord.xyz/search*
// @match        *://searx.work/search*
// @match        *://search.ononoki.org/search*
// @match        *://search.demoniak.ch/search*
// @match        *://searx.cthd.icu/search*
// @match        *://searx.fmhy.net/search*
// @match        *://searx.headpat.exchange/search*
// @match        *://sex.finaltek.net/search*
// @match        *://search.gcomm.ch/search*
// @match        *://search.smnz.de/search*
// @match        *://searx.ankha.ac/search*
// @match        *://search.lvkaszus.pl/search*
// @match        *://searx.nobulart.com/search*
// @match        *://sx.t-1.org/search*
// @match        *://www.jabber-germany.de/searx/search*
// @match        *://sx.catgirl.cloud/search*
// @match        *://sx.vern.cc/searxng/search*

// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*

// @match        *://search.brave.com/search*

// @match        *://duckduckgo.com
// @match        *://duckduckgo.com/?*

// @match        *://ghosterysearch.com/search?*
// @match        *://presearch.com/search?*

// @match        *://metager.org/*meta/meta.ger3*
// @match        *://metager.de/*meta/meta.ger3*

// @match        *://4get.ca/web?*
// @match        *://4get.silly.computer/web?*
// @match        *://4get.plunked.party/web?*
// @match        *://4get.konakona.moe/web?*
// @match        *://4get.sijh.net/web?*
// @match        *://4get.hbubli.cc/web?*
// @match        *://4get.perennialte.ch/web?*
// @match        *://4get.zzls.xyz/web?*
// @match        *://4getus.zzls.xyz/web?*
// @match        *://4get.seitan-ayoub.lol/web?*
// @match        *://4get.dcs0.hu/web?*
// @match        *://4get.psily.garden/web?*
// @match        *://4get.lvkaszus.pl/web?*
// @match        *://4get.kizuki.lol/web?*

// @match        *://search.ahwx.org/search.php?*
// @match        *://search2.ahwx.org/search.php?*
// @match        *://search3.ahwx.org/search.php?*
// @match        *://ly.owo.si/search.php?*
// @match        *://librey.franklyflawless.org/search.php?*
// @match        *://librey.org/search.php?*
// @match        *://search.davidovski.xyz/search.php?*
// @match        *://search.milivojevic.in.rs/search.php?*
// @match        *://glass.prpl.wtf/search.php?*
// @match        *://librex.uk.to/search.php?*
// @match        *://librey.ix.tc/search.php?*
// @match        *://search.funami.tech/search.php?*
// @match        *://librex.retro-hax.net/search.php?*
// @match        *://librex.nohost.network/search.php?*
// @match        *://search.pabloferreiro.es/search.php?*
// @match        *://librey.baczek.me/search.php?*
// @match        *://lx.benike.me/search.php?*
// @match        *://search.seitan-ayoub.lol/search.php?*
// @match        *://librey.myroware.net/search.php?*
// @match        *://librey.nezumi.party/search.php?*
// @match        *://search.zeroish.xyz/search.php?*

// @match        *://stract.com/search?*

// @match        *://search.albony.xyz/search?*
// @match        *://search.garudalinux.org/search?*
// @match        *://search.dr460nf1r3.org/search?*
// @match        *://search.nezumi.party/search?*
// @match        *://s.tokhmi.xyz/search?*
// @match        *://search.sethforprivacy.com/search?*
// @match        *://whoogle.dcs0.hu/search?*
// @match        *://whoogle.lunar.icu/search?*
// @match        *://gowogle.voring.me/search?*
// @match        *://whoogle.privacydev.net/search?*
// @match        *://whoogle.hostux.net/search?*
// @match        *://wg.vern.cc/search?*
// @match        *://whoogle.hxvy0.gq/search?*
// @match        *://whoogle.ungovernable.men/search?*
// @match        *://whoogle2.ungovernable.men/search?*
// @match        *://whoogle3.ungovernable.men/search?*
// @match        *://wgl.frail.duckdns.org/search?*
// @match        *://whoogle.no-logs.com/search?*
// @match        *://whoogle.ftw.lol/search?*
// @match        *://whoogle-search--replitcomreside.repl.co/search?*
// @match        *://search.notrustverify.ch/search?*
// @match        *://whoogle.datura.network/search?*
// @match        *://whoogle.yepserver.xyz/search?*

// @match        *://www.etools.ch/searchSubmit.do*
// @match        *://www.etools.ch/mobileSearch.do*

// @match        *://www.mojeek.com/search?*
// @match        *://www.mojeek.co.uk/search?*

// @match        *://wiby.me/?*
// @match        *://yep.com/web?*
// @match        *://www.torry.io/search*
// @match        *://www.qwant.com/?*
// @match        *://www.ecosia.org/search?*
// @match        *://search.becovi.com/serp.php?*
// @match        *://good-search.org/*search/?*
// @match        *://www.alltheinternet.com/?*
// @match        *://www.searchalot.com/?*
// @match        *://search.aol.com/*search*
// @match        *://www.onesearch.com/*search*
// @match        *://www.info.com/serp?*
// @match        *://oceanhero.today/web?*

// @match        *://swisscows.com/*/web?*

// @match        *://search.lilo.org/?*
// @match        *://search.entireweb.com/search?*
// @match        *://www.tadadoo.com/search?*
// @match        *://search.gmx.com/web/result?*
// @match        *://search.gmx.com/web?*
// @match        *://youcare.world/all?*
// @match        *://search.lycos.com/web/?*
// @match        *://alohafind.com/search/?*
// @match        *://spot.ecloud.global/search*
// @match        *://qmamu.com/search?*
// @match        *://search.carrot2.org/*
// @match        *://www.nona.de/?*
// @match        *://www.sapo.pt/pesquisa/web/tudo?*
// @match        *://www.exalead.com/search/web/results/?*
// @match        *://cgi.search.biglobe.ne.jp/cgi-bin/search2-b?*
// @match        *://search.goo.ne.jp/web.jsp?*
// @match        *://search.walla.co.il/?*
// @match        *://coccoc.com/search?*
// @match        *://search.seznam.cz/?*
// @match        *://www.startsiden.no/sok/?*
// @match        *://search.marginalia.nu/search?*
// @match        *://mwmbl.org/?*
// @match        *://search.naver.com/search.naver?*
// @match        *://gibiru.com/results.html?*
// @match        *://www.lukol.com/s.php?*
// @match        *://www.draze.com/web/search?*

// @match        *://www.yelliot.com/search/?*
// @match        *://fr.yelliot.com/search/?*
// @match        *://ar.yelliot.com/search/?*
// @match        *://es.yelliot.com/search/?*
// @match        *://de.yelliot.com/search/?*
// @match        *://it.yelliot.com/search/?*
// @match        *://ru.yelliot.com/search/?*
// @match        *://cn.yelliot.com/search/?*
// @match        *://in.yelliot.com/search/?*
// @match        *://pt.yelliot.com/search/?*

// @match        *://efind.com/search*
// @match        *://fireball.de/de/search?*
// @match        *://freespoke.com/search/web?*
// @match        *://gogoprivate.com/search*
// @match        *://resulthunter.com/search?*
// @match        *://search.givewater.com/serp?*
// @match        *://results.excite.com/serp?*
// @match        *://www.webcrawler.com/serp?*
// @match        *://www.metacrawler.com/serp?*
// @match        *://www.dogpile.com/serp?*
// @match        *://www.infospace.com/serp?*
// @match        *://www.refseek.com/search?*
// @match        *://www.zapmeta.com/search?*
// @match        *://www.izito.com/search?*
// @match        *://www.ask.com/web?*
// @match        *://www.pronto.com/web?*
// @match        *://anoox.com/find.php?*

// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

(function () {
    'use strict';

    // Define URL modification rules with precompiled regex
    const urlModificationRules = [
        // {
        //     matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*?)(?:$|\/RK=.*|&sa=.*)/),
        //     replaceWith: 'https://farside.link/$1'
        // },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/((?!test)[a-z]+)\.?m?\.wikipedia\.org\/(?:[a-z]+|wiki)\/(?!Special:Search)(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://www.wikiwand.com/$1/$2'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/zh\.?m?\.wikipedia\.org\/(?:zh-hans|wiki)\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://www.wikiwand.com/zh-hans/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/wikipedia\.org\/(?:[a-z]+|wiki)\/(?!Special:Search)(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://www.wikiwand.com/en/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:old|www)\.reddit\.com\/((?:r|u)\/.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://old.reddit.com/$1'
            // replaceWith: 'https://safereddit.com/$1'
            // replaceWith: 'https://lr.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.quora\.com\/((?=.*-)[\w-]+|profile\/.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://quetre.iket.me/$1'
        },
        // Unfortunately, nitter has been discontinued.
        // {
        //     matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/twitter\.com\/([A-Za-z_][\w]+)(\/status\/(?:\d+))?(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
        //     replaceWith: 'https://nitter.catsarch.com/$1$2'
        // },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:www\.)?stackoverflow\.com\/(questions\/\d+(?:\/[\w-]+)?)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://ao.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(.*?(?:medium.*?|towardsdatascience|betterprogramming|plainenglish|gitconnected|aninjusticemag|betterhumans|uxdesign|uxplanet)\.\w+\/(?!tag)(?=.*-)(?:[\w\/-]+|[\w@.]+\/[\w-]+))(?:\?source=.*)?(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://freedium.cfd/https://$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:www\.|m\.)?youtube\.com\/(watch(?:\/?\?v=|\/)[\w-]{11})[\s\S]*/),
            replaceWith: 'https://piped.video/$1'
            // replaceWith: 'https://vid.puffyan.us/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:www\.|m\.)?youtube\.com\/((?:@|playlist\?|channel\/|user\/|shorts\/).*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://piped.video/$1'
            // replaceWith: 'https://vid.puffyan.us/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/music\.youtube\.com\/((?:playlist\?|watch\?|channel\/|browse\/).*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://hyperpipe.surge.sh/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.twitch\.tv\/(\w+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://ttv.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:m|www)\.imdb\.com\/((?:title|name)\/\w+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://ld.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.goodreads\.com\/((?:(?:[a-z]+\/)?book\/show|work\/quotes|series|author\/show)\/[\w.-]+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://bl.vern.cc/$1'
        },
        {
            // only support English Fandom sites
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/((?!www|community).*?)\.fandom\.com\/wiki\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://antifandom.com/$1/wiki/$2'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.urbandictionary\.com\/(define\.php\?term=.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://rd.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.reuters\.com\/((?=.*\/)(?=.*-).*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://nu.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(www\.ft\.com\/content\/[\w-]+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://archive.today/https://$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(www\.bloomberg\.com\/(?:(?:[a-z]+\/)?news|opinion)\/.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://archive.today/https://$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.npr\.org\/(?:\d{4}\/\d{2}\/\d{2}|sections)\/(?:[A-Za-z-]+\/\d{4}\/\d{2}\/\d{2}\/)?(\d+)\/(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://text.npr.org/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/news\.ycombinator\.com\/item\?id=(\d+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://www.hckrnws.com/stories/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:[a-z]+)\.slashdot\.org(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://slashdot.org$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:(?:.*)(?:arxiv\.org\/pdf|arxiv-export-lb\.library\.cornell\.edu\/(?:pdf|abs)))\/(\d{4}\.\d{4,5}(v\d)?)(?:.*)/),
            replaceWith: 'https://arxiv.org/abs/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(ieeexplore\.ieee\.org\/document\/\d+)\/(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/github\.ink(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://github.com$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.snopes\.com(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://sd.vern.cc$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.instructables\.com\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://ds.vern.cc/$1'
            // replaceWith: 'https://structables.private.coffee/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/genius\.com\/((?=[\w-]+lyrics|search\?q=).*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://dm.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(.*?)\.bandcamp\.com\/(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://tn.vern.cc/artist.php?name=$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(.*?)\.bandcamp\.com\/(.*?)\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://tn.vern.cc/release.php?artist=$1&type=$2&name=$3'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/bandcamp\.com\/search\?q=(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://tn.vern.cc/search.php?query=$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/f4\.bcbits\.com\/img\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://tn.vern.cc/image.php?file=$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/t4\.bcbits\.com\/stream\/(.*?)\/(.*?)\/(.*?)\?token=(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://tn.vern.cc/audio.php?directory=$1&format=$2&file=$3&token=$4'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:[\w.]+)?imgur.com\/((?:a\/)?(?!gallery)[\w.]+)(?:.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://rimgo.totaldarkness.net/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/www\.pixiv\.net\/(?:[a-z]+\/)?(artworks\/\d+|tags\/\w+|users\/\d+).*/),
            replaceWith: 'https://pixivfe.exozy.me/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/knowyourmeme\.com\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://mm.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/tenor\.com\/((?:view|search)\/.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://sp.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))?https?:\/\/(?:\w+\.)?ifunny\.co\/(picture\/.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://uf.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^(?:.*?(?:\/RU=|&q=|&as=))https?:\/\/(.*?)(?:$|\/RK=.*|&sa=.*)/),
            replaceWith: 'https://$1'
        },
        // Add more rules here as needed
    ];

    // Define enhanced selector rules for each search engine
    const selectorRules = {
        'google': [
            {
                selector: 'div.MjjYud div div div span a',
                childSelector: 'div cite',
                updateChildText: true,
                containProtocol: true,
                urlDisplayMethod: 1
            },
            {
                // selector for sub-results
                selector: 'div.MjjYud div div a'
            },
            {
                // selector for sidebar links
                selector: 'div.TQc1id#rhs a'
            },
            {
                // selector for 'discussions and forums' widget
                selector: 'div.MjjYud div.LJ7wUe a.v4kUNc',
                childSelector: 'div.VZGVuc div.bgBiT.wHYlTd',
                updateTextByOverwrite: true,
                useTopLevelDomain: true,
                urlDisplayMethod: 3
            },
            {
                // selector for 'videos' widget
                selector: 'div.e4xoPb div.RzdJxc a.xMqpbd'
            },
            {
                selector: 'div.EyBRub div.eA0Zlc div a'
            },
            {
                // selector for results in google image search tab
                selector: 'div.islrc div.isv-r a'
            }
        ],
        'bing': [
            {
                selector: 'ol#b_results li.b_algo h2 a'
            },
            {
                selector: 'ol#b_results li.b_algo a.tilk',
                childSelector: 'cite',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'ol#b_results li.b_algo li a'
            },
            {
                selector: 'ol#b_results li.b_algo div.pageRecoContainer a'
            },
            {
                selector: 'div#b_content div.lite-entcard-blk a'
            }
        ],
        'yahoo': [
            {
                parentSelector: 'div#left div#web ol li div div.compTitle h3.title',
                linkNodeSelector: 'a',
                textNodeSelector: 'span.p-abs',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 2
            },
            {
                selector: 'div#left div#web ol li div ul.compArticleList a'
            },
            {
                selector: 'div#left div#web ol li div div.compGenericCardList a'
            },
            {
                selector: 'div#right ol.cardReg.searchRightTop a'
            }
        ],
        'yahoojp': [
            {
                parentSelector: 'div.sw-CardBase div.sw-Card__title',
                linkNodeSelector: 'a.sw-Card__titleInner',
                textNodeSelector: 'div.sw-Card__titleCiteWrapper cite ol',
                childSelector: 'li',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'div.sw-CardBase p.Algo__osl a'
            },
            {
                selector: 'div.sw-CardBase div.sw-Card.AnswerKnowledgePanel__title div.sw-Tooltip__balloonInner a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.sw-CardBase div.sw-Card.AnswerKnowledgePanel__title a'
            },
            {
                selector: 'div.sw-CardBase div.sw-Card.AnswerKnowledgePanel__info a'
            }
        ],
        'baidu': [
            {
                originalUrlSelector: 'div#content_left div.c-container',
                originalUrlAttribute: 'mu',
                linkNodeSelector: ['h3.c-title a', 'h3.t.kg-title_7kFVp a', 'div.c-row a.siteLink_9TPP3', 'div.c-showurl a.cu-line-clamp-1', 'ul.subLink_answer li a', 'span.detail-btn_2Ar6f a']
            },
            {
                selector: 'div#content_left div.c-container h3.c-title a'
            },
            {
                selector: 'div#content_left div.c-container a.siteLink_9TPP3'
            },
            {
                selector: 'div#content_left div.c-container ul.subLink_answer li a'
            }
        ],
        'yandex': [
            {
                selector: 'ul#search-result li div.Organic-Subtitle div a',
                updateChildText: true,
                containProtocol: false,
                urlDisplayMethod: 1,
            },
            {
                selector: 'ul#search-result li div.Organic div a',
            }
        ],
        'searx': [
            {
                selector: 'article.result a.url_wrapper',
                childSelector: 'span span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'article.result h3 a'
            },
            {
                selector: 'aside.infobox div.urls ul li a'
            }
        ],
        'startpage': [
            {
                selector: 'a.w-gl__result-url.result-link',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'a.w-gl__result-title.result-link'
            },
            {
                selector: 'div.sx-kp-main a'
            }
        ],
        'brave': [
            {
                selector: 'div.snippet a.h',
                childSelector: 'div.site cite.snippet-url span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'div#discussions.snippet a',
            },
            {
                selector: 'div#infobox-snippet.snippet a'
            }
        ],
        'duckduckgo': [
            {
                selector: 'a.eVNpHGjtxRBq_gLOfGDr.LQNqh2U1kzYxREs65IJu'
            },
            {
                selector: 'a.Rn_JXVtoPVAFyGkcaXyK',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 1
            },
            {
                // Selector for sub-results
                selector: 'ul.b269SZlC2oyR13Fcc4Iy li a.f3uDrYrWF3Exrfp1m3Og'
            },
            {
                selector: 'div.react-module div section div a'
            }
        ],
        'ghostery': [
            {
                selector: 'li.result h2 a'
            },
            {
                selector: 'li.result div.snippet div.address a.url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'presearch': [
            {
                selector: 'div.relative div.w-auto a',
                childSelector: 'div',
                updateChildText: true,
                urlDisplayMethod: 3,
            },
            {
                selector: 'div.relative div.inline-block a'
            }
        ],
        'metager': [
            {
                selector: 'h2.result-title a'
            },
            {
                selector: 'div.result-subheadline a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div.quicktip div.quicktip-headline h1 a'
            },
            {
                selector: 'div.quicktip div.quicktip-detail h2 a'
            }
        ],
        '4get': [
            {
                parentSelector: 'div.text-result',
                linkNodeSelector: 'a.hover',
                textNodeSelector: 'div.url',
                childSelector: 'a.part',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 4
            },
            {
                selector: 'div.text-result div.sublinks a'
            },
            {
                parentSelector: 'div.right-wrapper div.answer',
                linkNodeSelector: 'a.answer-title',
                textNodeSelector: 'div.url',
                childSelector: 'a.part',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 4
            }
        ],
        'librey': [
            {
                selector: 'div.text-result-wrapper a',
                updateTextWithoutOverwrite: true,
                useTopLevelDomain: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'p.special-result-container a',
                updateTextWithoutOverwrite: true,
                urlDisplayMethod: 2
            },
        ],
        'stract': [
            {
                selector: 'div.grid div div.flex div div a.text-link'
            },
            {
                selector: 'div.grid div div.flex div div div a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.mb-5.text-xl a'
            },
            {
                selector: 'div.text-sm a.text-link'
            }
        ],
        'whoogle': [
            {
                selector: 'div#main div.ZINbbc.has-favicon div.egMi0 a',
                childSelector: 'div.sCuL3 div.BNeawe',
                updateTextByOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'div#main div.ZINbbc div.yStFkb div.ZINbbc.has-favicon a',
                childSelector: 'div.BNeawe.UPmit.AP7Wnd',
                updateTextByOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
        ],
        'etools': [
            {
                // searchSubmit.do
                selector: 'td.record a.title'
            },
            {
                // mobileSearch.do
                selector: 'p a.title'
            }
        ],
        'mojeek': [
            {
                selector: 'ul.results-standard li h2 a.title'
            },
            {
                selector: 'ul.results-standard li a.ob',
                childSelector: 'span.url',
                updateChildText: true,
                containProtocol: true,
                urlDisplayMethod: 1
            },
            {
                selector: 'div.infobox p a'
            },
            {
                selector: 'div.results.news-results li a'
            },
            {
                selector: 'div.right-col div.results ul li a'
            }
        ],
        'wiby': [
            {
                parentSelector: 'body blockquote',
                linkNodeSelector: 'a.tlink',
                textNodeSelector: 'p.url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'yep': [
            {
                selector: 'div.css-102xgmn-card div div a',
                childSelector: 'div span',
                updateChildText: true,
                containProtocol: false,
                urlDisplayMethod: 1
            }
        ],
        'torry': [
            {
                selector: 'div.searpList p a.toranclick',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.searpList div h2 a.toranclick',
            },
            {
                selector: 'div.searpList ul li a',
            }
        ],
        'qwant': [
            {
                selector: 'div._35zId._3A7p7 a.external'
            },
            {
                selector: 'div._35zId._3WA-c a.external',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            },
            {
                // Selector for sub-results
                selector: 'div._12BMd div._2-LMx._2E8gc._16lFV.Ks7KS.tCpbb.m_hqb a.external'
            },
            {
                selector: 'div._3McWE.is-sidebar a.external'
            }
        ],
        'ecosia': [
            {
                selector: 'div.mainline__result-wrapper div.result__header div.result__info a',
                childSelector: 'span span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'div.mainline__result-wrapper div.result__header div.result__title a'
            },
            {
                selector: 'div.mainline__result-wrapper div ul li a'
            },
            {
                selector: 'aside.sidebar article div.entity-links ul li a'
            },
            {
                selector: 'aside.sidebar article div.entity__content p a'
            }
        ],
        'oscobo': [
            {
                selector: 'div.result a',
                childSelector: 'span.siteTitleWrap span.favicons',
                updateTextWithoutOverwrite: true,
                containProtocol: true,
                urlDisplayMethod: 1
            }
        ],
        'good': [
            {
                selector: 'div.content div.margin-bottom--small.box a.link--search',
                childSelector: 'p.url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.sx-kp-top a'
            },
            {
                selector: 'div.sx-kp-tab-content-wrap section ul.sx-kp-social-links a'
            },
            {
                selector: 'div.sx-kp-tab-content-wrap section div.sx-kp-attributions a'
            }
        ],
        'alltheinternet': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-long',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'searchalot': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-long',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'aol': [
            {
                parentSelector: 'div#left div#web ol li div div.compTitle',
                linkNodeSelector: 'h3.title a',
                textNodeSelector: 'div span',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div#left div#web ol li div div.compList a'
            },
            {
                selector: 'div#right ol.cardReg.searchRightTop a'
            }
        ],
        'onesearch': [
            {
                parentSelector: 'div#left div#web ol li div div.compTitle',
                linkNodeSelector: 'h3.title a',
                textNodeSelector: 'div span',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div#left div#web ol li div div.compList a'
            },
            {
                selector: 'div#right ol.cardReg.searchRightTop a'
            }
        ],
        'info': [
            {
                parentSelector: 'div.web-yahoo__result',
                linkNodeSelector: 'a.web-yahoo__title',
                textNodeSelector: 'span.web-yahoo__url',
                updateTextWithoutOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.sidebar-results a'
            }
        ],
        'oceanhero': [
            {
                selector: 'div div div a',
                childSelector: 'span cite',
                updateChildText: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'section div ul li a'
            },
            {
                selector: 'div div div p a'
            }
        ],
        'swisscows': [
            {
                selector: 'article.item-web a.site',
                updateTextWithoutOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'article.item-web a'
            }
        ],
        'lilo': [
            {
                selector: 'div.lilo-text-result div p a.has-text-grey-darker',
                // Displayed URL modification not working correctly in Lilo
                // Reason is unknown, the displayed URL will return to the original URL after modification
                // childSelector: 'span',
                // updateChildText: true,
                // containProtocol: true,
                // multiElementsForUrlDisplay: 2
            },
            {
                selector: 'div.lilo-text-result div a.has-text-primary'
            },
            {
                selector: 'div.column.is-two-fifths a'
            }
        ],
        'entireweb': [
            {
                parentSelector: 'div.web-result',
                linkNodeSelector: 'a.web-result-title',
                textNodeSelector: 'div.web-result-domain',
                updateTextWithoutOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div#infobox-list.card div.card-body a'
            },
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top',
                updateTextByOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            }
        ],
        'tadadoo': [
            {
                parentSelector: 'div.web-result',
                linkNodeSelector: 'a.web-result-title',
                textNodeSelector: 'div.web-result-domain',
                updateTextWithoutOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div#infobox-list.card div.card-body a'
            }
        ],
        'gmx': [
            {
                selector: 'div.eMd a.eMdhl'
            },
            {
                selector: 'div.eMd a.eMdu',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 2
            },
        ],
        'youcare': [
            {
                selector: 'div.search-result-item-text a.search-result-item-text__title'
            },
            {
                selector: 'div.search-result-item-text div div a.search-result-item-text-sitename'
            },
            {
                selector: 'div.search-result-item-text div div a.search-result-item-text__header-url',
                updateTextWithoutOverwrite: true,
                containProtocol: true,
                urlDisplayMethod: 1
            },
            {
                selector: "div.search-results-view__side a"
            }
        ],
        'lycos': [
            {
                parentSelector: 'div.results li.result-item',
                linkNodeSelector: 'a.result-link',
                textNodeSelector: 'span.result-url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div.col-aside a'
            }
        ],
        'alohafind': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gs-visibleUrl-short',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            }
        ],
        'spot': [
            {
                selector: 'div.result h4 a'
            },
            {
                selector: 'div.result a.external-link',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.infobox div.footer div.links a'
            }
        ],
        'qmamu': [
            {
                selector: 'div.sc-1i4c0yr-4.cxFATD a'
            },
            {
                selector: 'div.sc-meawca-31.liCyKS a',
                childSelector: 'span.sc-meawca-10.czAks',
                updateChildText: true,
                containProtocol: true,
                urlDisplayMethod: 1
            }
        ],
        'carrot2': [
            {
                selector: 'div.ResultList a.Result',
                childSelector: 'span.url span',
                updateChildText: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.sc-meawca-31.liCyKS a',
                childSelector: 'span.sc-meawca-10.czAks',
                updateChildText: true,
                containProtocol: true,
                urlDisplayMethod: 1
            }
        ],
        'nona': [
            {
                selector: 'section.result-section article.teaser div.teaser__container a.teaser__topline',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'section.result-section article.teaser div.teaser__container a.teaser__link'
            },
            {
                selector: 'section.result-section article.entity-teaser div.entity-teaser__wrapper a'
            }
        ],
        'sapo': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'exalead': [
            {
                selector: 'li.media div.media-body a.ellipsis',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'li.media div.media-body a'
            }
        ],
        'biglobe': [
            {
                selector: 'div#searchResult ol li h3 a'
            },
            {
                selector: 'div#searchResult ol li span.url a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'goo': [
            {
                parentSelector: 'div.result',
                linkNodeSelector: 'p.title a',
                textNodeSelector: 'p.url span.cM',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                selector: 'div.aside div.talentTxt a'
            },
        ],
        'walla': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'coccoc': [
            {
                selector: 'div.searchResultsMain-HyzAT a.url-AQP5U',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'div.searchResultsMain-HyzAT h3.title-qgBH2 a'
            },
            {
                selector: 'div.searchResultsMain-HyzAT div.shortButtonSitelinks-BENQp ul li a'
            },
            {
                selector: 'div.searchResultsRight-IDPLb div.newRightWiki-DoD9w a'
            },
            {
                selector: 'div.searchResultsRight-IDPLb div.newRightWiki-6sbvE a'
            }
        ],
        'seznam': [
            {
                selector: 'div.f2c528 h3 a'
            },
            {
                selector: 'div.f2c528 a.d5e75c',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
        ],
        'startsiden': [
            {
                selector: 'li.result a.result__link-wrapper',
                childSelector: 'div.result__url',
                updateChildText: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'div.f2c528 a.d5e75c',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            },
        ],
        'marginalia': [
            {
                selector: 'section.card.search-result div.url a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'section.card.search-result h2 a.title'
            },
            {
                selector: 'section.card.search-result div.additional-results li a'
            }
        ],
        'mwmbl': [
            {
                selector: 'ul.results li.result div.result-link a',
                childSelector: 'span.link',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
        ],
        'naver': [
            {
                selector: 'li.bx div.total_wrap div.source_box a.thumb'
            },
            {
                selector: 'li.bx div.total_wrap div.source_box a.txt',
                updateTextByOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'li.bx div.total_wrap a.link_tit'
            },
            {
                selector: 'li.bx div.snippet_rel_wrap a.link_item'
            },
            {
                selector: 'li.bx div.source_cluster_wrap a'
            },
            {
                selector: 'section.sc_new a'
            }
        ],
        'gibiru': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'lukol': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-bottom div.gs-visibleUrl-long',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'draze': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'yelliot': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'efind': [
            {
                parentSelector: 'article.result',
                linkNodeSelector: 'h3 a',
                textNodeSelector: 'div.external-link div',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 2
            },
            {
                selector: 'aside.infobox a'
            }
        ],
        'fireball': [
            {
                selector: 'div.search-result a.search-result-title'
            },
            {
                selector: 'div.search-result a.search-result-url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            },
            {
                selector: 'div.search-result a.search-result-check'
            }
        ],
        'freespoke': [
            {
                selector: 'div.result-block a.title-source-link',
                childSelector: 'span.breadcrumb-container',
                updateTextByOverwrite: true,
                containProtocol: false,
                urlDisplayMethod: 1
            },
            {
                selector: 'div.ant-col.component-col div.WebSearchResult div.main-container a'
            },
            {
                selector: 'div.ant-col.sidebar div.se-widget a'
            },
            {
                selector: 'div.ant-col.sidebar div.KnowledgePanelResults div.ExpandableContainer a'
            },
            {
                selector: 'div.ant-col.test.ant-col-xs-24 div.se-widget a'
            },
            {
                selector: 'div.ant-col.ant-col-xs-24 div.KnowledgePanelResults div.ExpandableContainer a'
            }
        ],
        'gogoprivate': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'div.gs-title a[target="_PARENT"]',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            },
            {
                selector: 'div.vidbox#imgbox a'
            }
        ],
        'resulthunter': [
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.web-result-title',
                textNodeSelector: 'div.web-result-domain',
                updateTextWithoutOverwrite: true,
                urlDisplayMethod: 3
            },
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-breadcrumb',
                childSelector: 'span',
                updateChildText: true,
                containProtocol: false,
                multiElementsForUrlDisplay: 1
            }
        ],
        'givewater': [
            {
                parentSelector: 'div.web-bing__result',
                linkNodeSelector: 'a.web-bing__title',
                textNodeSelector: 'span.web-bing__url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'excite': [
            {
                parentSelector: 'div.web-bing__result',
                linkNodeSelector: 'a.web-bing__title',
                textNodeSelector: 'span.web-bing__url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'webcrawler': [
            {
                parentSelector: 'div.web-bing__result',
                linkNodeSelector: 'a.web-bing__title',
                textNodeSelector: 'span.web-bing__url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'metacrawler': [
            {
                parentSelector: 'div.web-bing__result',
                linkNodeSelector: 'a.web-bing__title',
                textNodeSelector: 'span.web-bing__url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'dogpile': [
            {
                parentSelector: 'div.web-bing__result',
                linkNodeSelector: 'a.web-bing__title',
                textNodeSelector: 'span.web-bing__url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'infospace': [
            {
                parentSelector: 'div.web-bing div.result',
                linkNodeSelector: 'a.title',
                textNodeSelector: 'span.url',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ],
        'refseek': [
            {
                selector: 'div.sticky a'
            },
            {
                parentSelector: 'div.gsc-webResult.gsc-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-short',
                updateTextByOverwrite: true,
                urlDisplayMethod: 3
            }
        ],
        'zapmeta': [
            {
                parentSelector: 'ol.organic-results__list li',
                linkNodeSelector: 'div.organic-results__title a',
                textNodeSelector: 'div.organic-results__display-url',
                updateTextByOverwrite: true,
                useTopLevelDomain: true,
                urlDisplayMethod: 3
            }
        ],
        'izito': [
            {
                parentSelector: 'ol.organic-results__list li',
                linkNodeSelector: 'div.organic-results__title a',
                textNodeSelector: 'div.organic-results__display-url',
                updateTextByOverwrite: true,
                useTopLevelDomain: true,
                urlDisplayMethod: 3
            }
        ],
        'ask': [
            {
                selector: 'div.result-title a'
            },
            {
                selector: 'div.result-url-section a',
                childSelector: 'span.result-url',
                updateChildText: true,
                urlDisplayMethod: 3
            }
        ],
        'pronto': [
            {
                selector: 'div.result-title a'
            },
            {
                selector: 'div.result-url-section a',
                childSelector: 'span.result-url',
                updateChildText: true,
                urlDisplayMethod: 3
            }
        ],
        'anoox': [
            {
                selector: 'div.search_item div.ad_brief_desc a'
            },
            {
                selector: 'div.search_item div.adv_url_con a',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
            }
        ]
        // Additional search engines can be defined here...
    };

    // User-defined list of search engine instance URLs
    const searchEngines = {
        'google': {
            hosts: ['google.com'],
            // search results container
            // you can ignore this parameter if you don't want to set it, just delete it
            // defult value is 'body'
            resultContainerSelectors: [
                'div.GyAeWb#rcnt',
                'div.mJxzWe'
            ]
        },
        'bing': {
            hosts: ['bing.com'],
            resultContainerSelectors: ['div#b_content']
        },
        'yahoo': {
            hosts: ['search.yahoo.com'],
            resultContainerSelectors: ['div#results div#cols']
        },
        'yahoojp': {
            hosts: ['search.yahoo.co.jp'],
            resultContainerSelectors: ['div#contents div#contents__wrap']
        },
        'baidu': {
            hosts: ['baidu.com'],
            resultContainerSelectors: ['div#wrapper_wrapper div#container']
        },
        'yandex': {
            hosts: [
                'yandex.com',
                'yandex.ru'
            ],
            resultContainerSelectors: ['div.main__container']
        },
        'searx': {
            hosts: [
                'search.disroot.org',
                'searx.tiekoetter.com',
                'search.bus-hit.me',
                'search.inetol.net',
                'priv.au',
                'searx.be',
                'searxng.site',
                'search.hbubli.cc',
                'search.im-in.space',
                'opnxng.com',
                'search.upinmars.com',
                'search.sapti.me',
                'freesearch.club',
                'xo.wtf',
                'www.gruble.de',
                'searx.tuxcloud.net',
                'baresearch.org',
                'searx.daetalytica.io',
                'etsi.me',
                'search.leptons.xyz',
                'search.rowie.at',
                'search.mdosch.de',
                'searx.catfluori.de',
                'searx.si',
                'searx.namejeff.xyz',
                'search.itstechtime.com',
                's.mble.dk',
                'searx.kutay.dev',
                'ooglester.com',
                'searx.ox2.fr',
                'searx.techsaviours.org',
                'searx.perennialte.ch',
                's.trung.fun',
                'search.in.projectsegfau.lt',
                'search.projectsegfau.lt',
                'darmarit.org',
                'searx.lunar.icu',
                'nyc1.sx.ggtyler.dev',
                'search.rhscz.eu',
                'paulgo.io',
                'northboot.xyz',
                'searx.zhenyapav.com',
                'searxng.ch',
                'copp.gg',
                'searx.sev.monster',
                'searx.oakleycord.dev',
                'searx.juancord.xyz',
                'searx.work',
                'search.ononoki.org',
                'search.demoniak.ch',
                'searx.cthd.icu',
                'searx.fmhy.net',
                'searx.headpat.exchange',
                'sex.finaltek.net',
                'search.gcomm.ch',
                'search.smnz.de',
                'searx.ankha.ac',
                'search.lvkaszus.pl',
                'searx.nobulart.com',
                'sx.t-1.org',
                'www.jabber-germany.de',
                'sx.catgirl.cloud'
            ],
            resultContainerSelectors: [
                'main#main_results'
                // 'maindiv#main_results div#urls'
                // 'div#sidebar div#infoboxes'
            ]
        },
        'startpage': {
            hosts: ['startpage.com'],
            resultContainerSelectors: [
                'div.show-results',
            ]
        },
        'brave': {
            hosts: ['search.brave.com'],
            resultContainerSelectors: [
                'main.main-column',
                'aside.sidebar'
            ]
        },
        'duckduckgo': {
            hosts: ['duckduckgo.com'],
            resultContainerSelectors: [
                'section[data-testid="mainline"][data-area="mainline"]',
                'section[data-testid="sidebar"][data-area="sidebar"]'
            ]
        },
        'ghostery': {
            hosts: ['ghosterysearch.com'],
            resultContainerSelectors: ['section.results']
        },
        'presearch': {
            hosts: ['presearch.com'],
            resultContainerSelectors: ['div.w-full']
        },
        'metager': {
            hosts: [
                'metager.org',
                'metager.de'
            ],
            resultContainerSelectors: [
                'div#results',
                'div#additions-container'
            ]
        },
        '4get': {
            hosts: [
                '4get.ca',
                '4get.silly.computer',
                '4get.plunked.party',
                '4get.konakona.moe',
                '4get.sijh.net',
                '4get.hbubli.cc',
                '4get.perennialte.ch',
                '4get.zzls.xyz',
                '4getus.zzls.xyz',
                '4get.seitan-ayoub.lol',
                '4get.dcs0.hu',
                '4get.psily.garden',
                '4get.lvkaszus.pl',
                '4get.kizuki.lol'
            ],
            resultContainerSelectors: ['div#overflow']
        },
        'librey': {
            hosts: [
                'search.ahwx.org',
                'search2.ahwx.org',
                'search3.ahwx.org',
                'ly.owo.si',
                'librey.franklyflawless.org',
                'librey.org',
                'search.davidovski.xyz',
                'search.milivojevic.in.rs',
                'glass.prpl.wtf',
                'librex.uk.to',
                'librey.ix.tc',
                'search.funami.tech',
                'librex.retro-hax.net',
                'librex.nohost.network',
                'search.pabloferreiro.es',
                'librey.baczek.me',
                'lx.benike.me',
                'search.seitan-ayoub.lol',
                'librey.myroware.net',
                'librey.nezumi.party',
                'search.zeroish.xyz',
                'search.zeroish.xyz'
            ],
            resultContainerSelectors: [
                'div.text-result-container',
                'p.special-result-container'
            ]
        },
        'stract': {
            hosts: ['stract.com'],
            resultContainerSelectors: [
                'div.col-start-1',
                'div.row-start-2'
            ]
        },
        'whoogle': {
            hosts: [
                'search.albony.xyz',
                'search.garudalinux.org',
                'search.dr460nf1r3.org',
                'search.nezumi.party',
                's.tokhmi.xyz',
                'search.sethforprivacy.com',
                'whoogle.dcs0.hu',
                'whoogle.lunar.icu',
                'gowogle.voring.me',
                'whoogle.privacydev.net',
                'whoogle.hostux.net',
                'wg.vern.cc',
                'whoogle.hxvy0.gq',
                'whoogle.ungovernable.men',
                'whoogle2.ungovernable.men',
                'whoogle3.ungovernable.men',
                'wgl.frail.duckdns.org',
                'whoogle.no-logs.com',
                'whoogle.ftw.lol',
                'whoogle-search--replitcomreside.repl.co',
                'search.notrustverify.ch',
                'whoogle.datura.network',
                'whoogle.yepserver.xyz'
            ],
            resultContainerSelectors: ['div#main']
        },
        'etools': {
            hosts: ['etools.ch'],
            // resultContainerSelectors: ['table.result']
        },
        'mojeek': {
            hosts: [
                'mojeek.com',
                'mojeek.co.uk'
            ],
            resultContainerSelectors: ['div.container.serp-results']
        },
        'wiby': {
            hosts: ['wiby.me']
        },
        'yep': {
            hosts: ['yep.com']
        },
        'torry': {
            hosts: ['torry.io'],
            resultContainerSelectors: ['div.searpListouterappend'],
            attribute: 'data-target'
        },
        'qwant': {
            hosts: ['qwant.com'],
            resultContainerSelectors: ['div._35zId']
        },
        'ecosia': {
            hosts: ['ecosia.org'],
            resultContainerSelectors: [
                'section.mainline.web__mainline',
                'aside.sidebar.web__sidebar'
            ]
        },
        'oscobo': {
            hosts: ['search.becovi.com'],
            resultContainerSelectors: ['div#results.col']
        },
        'good': {
            hosts: ['good-search.org'],
            resultContainerSelectors: [
                'div.grid__item.two-thirds',
                'div.grid__item.one-third'
            ]
        },
        'alltheinternet': {
            hosts: ['alltheinternet.com']
        },
        'searchalot': {
            hosts: ['searchalot.com']
        },
        'aol': {
            hosts: ['search.aol.com'],
            resultContainerSelectors: ['div#results div#cols']
        },
        'onesearch': {
            hosts: ['onesearch.com'],
            resultContainerSelectors: ['div#results div#cols']
        },
        'info': {
            hosts: ['info.com'],
            resultContainerSelectors: ['div.layout__body']
        },
        'oceanhero': {
            hosts: ['oceanhero.today']
        },
        'swisscows': {
            hosts: ['swisscows.com'],
            resultContainerSelectors: ['section.container.page-results']
        },
        'lilo': {
            hosts: ['search.lilo.org'],
            resultContainerSelectors: ['div.container#content']
        },
        'entireweb': {
            hosts: ['search.entireweb.com'],
            resultContainerSelectors: ['div.container.search-container']
        },
        'tadadoo': {
            hosts: ['tadadoo.com']
        },
        'gmx': {
            hosts: ['search.gmx.com']
        },
        'youcare': {
            hosts: ['youcare.world']
        },
        'lycos': {
            hosts: ['search.lycos.com'],
            resultContainerSelectors: ['div.content.con-search']
        },
        'alohafind': {
            hosts: ['alohafind.com'],
            resultContainerSelectors: ['section.layout']
        },
        'spot': {
            hosts: ['spot.ecloud.global'],
            resultContainerSelectors: ['div.container.contents']
        },
        'qmamu': {
            hosts: ['qmamu.com'],
            resultContainerSelectors: ['div.sc-7aqnu-1.ffCHAv']
        },
        'carrot2': {
            hosts: ['search.carrot2.org'],
            resultContainerSelectors: ['div.Views']
        },
        'nona': {
            hosts: ['nona.de'],
            resultContainerSelectors: ['main.search-results div.container']
        },
        'sapo': {
            hosts: ['sapo.pt'],
            resultContainerSelectors: ['div.content div.ink-tabs.top']
        },
        'exalead': {
            hosts: ['exalead.com'],
            resultContainerSelectors: ['ul.media-list']
        },
        'biglobe': {
            hosts: ['search.biglobe.ne.jp'],
            resultContainerSelectors: ['div#contents div#searchResult'],
        },
        'goo': {
            hosts: ['search.goo.ne.jp'],
            resultContainerSelectors: [
                'section[role="main"] div.section#main',
                'section[role="main"] aside[role="complementary"]'
            ],
        },
        'walla': {
            hosts: ['search.walla.co.il'],
            resultContainerSelectors: ['section.walla-core-container'],
        },
        'coccoc': {
            hosts: ['coccoc.com'],
            resultContainerSelectors: ['div#root'],
        },
        'seznam': {
            hosts: ['search.seznam.cz'],
            resultContainerSelectors: ['div.PageWrapper.SearchPage#searchpage-root'],
        },
        'startsiden': {
            hosts: ['startsiden.no'],
            resultContainerSelectors: ['div.results ul.results__list'],
        },
        'marginalia': {
            hosts: ['search.marginalia.nu'],
            resultContainerSelectors: ['section.sidebar-narrow section#results'],
        },
        'mwmbl': {
            hosts: ['mwmbl.org'],
            resultContainerSelectors: ['div.main ul.results'],
        },
        'naver': {
            hosts: ['search.naver.com'],
            resultContainerSelectors: ['div#main_pack.main_pack'],
        },
        'gibiru': {
            hosts: ['gibiru.com'],
            resultContainerSelectors: ['div.container#web-results'],
        },
        'lukol': {
            hosts: ['lukol.com']
        },
        'draze': {
            hosts: ['draze.com'],
            resultContainerSelectors: ['div.container div#content'],
        },
        'yelliot': {
            hosts: ['yelliot.com']
        },
        'efind': {
            hosts: ['efind.com'],
            resultContainerSelectors: ['main#main_results'],
        },
        'fireball': {
            hosts: ['fireball.de'],
            resultContainerSelectors: ['div.search-results'],
        },
        'freespoke': {
            hosts: ['freespoke.com'],
            resultContainerSelectors: ['div.WebSearch div.wrapper'],
        },
        'gogoprivate': {
            hosts: ['gogoprivate.com'],
            resultContainerSelectors: ['div#cse-body'],
        },
        'resulthunter': {
            hosts: ['resulthunter.com'],
            resultContainerSelectors: ['main.main-content#content'],
        },
        'givewater': {
            hosts: ['search.givewater.com'],
            resultContainerSelectors: ['div.mainline-results']
        },
        'excite': {
            hosts: ['results.excite.com'],
            resultContainerSelectors: ['div.mainline-results']
        },
        'webcrawler': {
            hosts: ['webcrawler.com'],
            resultContainerSelectors: ['div.web-bing'],
        },
        'metacrawler': {
            hosts: ['metacrawler.com'],
            resultContainerSelectors: ['div.web-bing'],
        },
        'dogpile': {
            hosts: ['dogpile.com'],
            resultContainerSelectors: ['div.web-bing'],
        },
        'infospace': {
            hosts: ['infospace.com'],
            resultContainerSelectors: ['div.layout div.layout__body'],
        },
        'refseek': {
            hosts: ['refseek.com'],
            resultContainerSelectors: ['div.main__container div.main__content'],
        },
        'zapmeta': {
            hosts: ['zapmeta.com'],
            resultContainerSelectors: ['div.component-container__main ol.organic-results__list'],
        },
        'izito': {
            hosts: ['izito.com'],
            resultContainerSelectors: ['div.component-container__main ol.organic-results__list'],
        },
        'ask': {
            hosts: ['ask.com'],
            resultContainerSelectors: ['div.search-results div.results'],
        },
        'pronto': {
            hosts: ['pronto.com'],
            resultContainerSelectors: ['div.search-results div.results'],
        },
        'anoox': {
            hosts: ['anoox.com'],
            resultContainerSelectors: ['div#main_srch_window div#se_holder_center'],
        }
        // ... more search engines
    };

    // Function to modify URLs and optionally text
    const modifyUrls = (observer, resultContainer, engineInfo) => {
        try {
            const selectors = selectorRules[engineInfo.engine];
            if (selectors) {
                // Disconnect the observer to prevent recursive triggering
                observer.disconnect();

                // Modify search results
                selectors.forEach(rule => {
                    // Get original URL from 'Baidu' search results to avoid unnecessary redirection
                    if (engineInfo.engine === 'baidu' && rule.originalUrlSelector) {
                        processBaiduElements(rule.linkNodeSelector, rule.originalUrlSelector, rule.originalUrlAttribute);
                        return; // Skip to the next iteration of the forEach loop
                    }

                    // URL modification based on custom RegEx rules
                    if (rule.selector) {
                        processElements(rule.selector, rule, engineInfo.attribute);
                    } else if (rule.parentSelector) {
                        processElements(rule.parentSelector, rule, engineInfo.attribute, true);
                    }
                });

                // Reconnect the observer after DOM modifications are done
                observer.observe(resultContainer, { childList: true, subtree: true });
            }
        } catch (error) {
            console.error("URL Modification Error: ", error);
        }
    };

    // Get original URL from 'Baidu' search results and update the link elements to get rid of unnecessary redirection links
    const processBaiduElements = (linkNodeSelector, selector, attribute) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(element => {
                const originalUrl = element.getAttribute(attribute);
                if (originalUrl && !originalUrl.includes('lightapp.baidu.com')) {
                    for (let i = 0; i < linkNodeSelector.length; i++) {
                        const linkElement = element.querySelector(linkNodeSelector[i]);
                        if (linkElement) {
                            linkElement.href = decodeURIComponent(originalUrl);
                        }
                    }
                }
            });
        }
    };

    // Function to process elements specified by `selector` or `parentSelector`
    const processElements = (selector, rule, additionalAttribute, isParentSelector) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(element => {
                let linkElement = isParentSelector ? element.querySelector(rule.linkNodeSelector) : element;
                let textElement = isParentSelector ? element.querySelector(rule.textNodeSelector) : element;

                for (let i = 0; i < urlModificationRules.length; i++) {
                    try {
                        const urlRule = urlModificationRules[i];
                        let urlToModify = additionalAttribute ? linkElement.getAttribute(additionalAttribute) : linkElement.href;
                        urlToModify = decodeURIComponent(urlToModify);
                        // Update attribute
                        if (urlToModify && urlRule.matchRegex.test(urlToModify)) {
                            // Generate redirected URL
                            let newUrl = urlToModify.replace(urlRule.matchRegex, urlRule.replaceWith);
                            if (linkElement.href) {
                                linkElement.href = newUrl;
                            } else if (additionalAttribute) {
                                linkElement.setAttribute(additionalAttribute, newUrl);
                            }
                            newUrl = rule.useTopLevelDomain ? extractTopLevelDomain(newUrl) : newUrl;
                            updateTextContent(textElement, rule, removeUnnecessaryTailing(newUrl));
                            break;
                        }
                    } catch (error) {
                        console.error("Update Link/Text Error: ", error);
                    }
                }
            });
        }
    };

    // Function to update text content (displayed URL)
    const updateTextContent = (element, rule, newUrl) => {
        if (rule.updateChildText || rule.updateTextWithoutOverwrite || rule.updateTextByOverwrite) {
            try {
                if (rule.multiElementsForUrlDisplay) {
                    updateMultiElementContent(element, rule, newUrl);
                } else {
                    const targetElement = rule.childSelector ? element.querySelector(rule.childSelector) : element;
                    updateSingleElementText(targetElement, rule, newUrl);
                }
            } catch (error) {
                console.error("Update Displayed URL Error: ", error);
            }
        }
    };

    // Function to update text for multi elements (e.g. DuckDuckGo, Brave)
    const updateMultiElementContent = (targetElement, rule, newUrl) => {
        if (!targetElement) {
            console.error("Target DOM Element not found for Multi-Element Text update!");
            return;
        }
        // Remove the "https://" protocol if containProtocol is false
        newUrl = rule.containProtocol ? newUrl : removeProtocol(newUrl);
        let formattedUrl = breadCumbFormat(newUrl, rule.containProtocol);
        let urlParts = formattedUrl.split(' › ');

        const spans = targetElement.querySelectorAll(rule.childSelector)

        switch (rule.multiElementsForUrlDisplay) {
            case 1:
                parallelElements(urlParts, spans);
                break;
            case 2:
                mixedElements(urlParts, spans, targetElement);
                break;
            case 3:
                mixedElementsWithoutClear(urlParts, spans, targetElement);
                break;
            case 4:
                fourGetSearchElements(newUrl, spans, targetElement);
        }
    };

    // Case where URL parts are scattered into parallel elements
    const parallelElements = (urlParts, elements) => {
        if (elements && elements.length >= 2) {
            elements.forEach(clearElementContent);
            elements[0].textContent = urlParts[0]; // Update the first part
            elements[1].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (parallel elements) URL update!");
        }
    };

    // Case where URL parts are scattered into non-parallel elements
    const mixedElements = (urlParts, elements, parent) => {
        if (elements && elements.length >= 1) {
            elements.forEach(clearElementContent);
            updateTextWithoutOverwriteChildNodes(parent, urlParts[0]); // Update the first part
            elements[0].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (mixed elements) URL update!");
        }
    };

    // Same as case 2, but update elements without clearing their original contents
    const mixedElementsWithoutClear = (urlParts, elements, parent) => {
        if (elements && elements.length >= 1) {
            updateTextWithoutOverwriteChildNodes(parent, urlParts[0]); // Update the first part
            elements[0].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (mixed elements with clear) URL update!");
        }
    };

    // Case where search engine is 4get
    const fourGetSearchElements = (newUrl, elements, parent) => {
        // Convert NodeList to Array if necessary
        const elementsArray = Array.isArray(elements) ? elements : Array.from(elements);

        // Split the new URL into parts
        const urlParts = splitUrlIntoParts(newUrl);

        // Ensure the elements array length matches the number of URL parts
        matchElementNumWithPartsFor4Get(urlParts, elementsArray, parent);

        let prevCombinedLink = '';
        // Update or add new elements based on the urlParts
        urlParts.forEach((part, index) => {
            let element = elementsArray[index];
            if (!element) {
                element = createPartElementFor4Get(parent);
                elementsArray.push(element);
            }
            prevCombinedLink += part + '/';
            element.href = prevCombinedLink;
            element.textContent = part;
            // Handle separators
            if (index < urlParts.length - 1 && (!element.nextSibling || element.nextSibling.className !== 'separator')) {
                let separator = createSeparatorElementFor4Get();
                parent.insertBefore(separator, element.nextSibling);
            }
        });

        // Remove any extra elements if the new URL has fewer parts than existing elements
        while (elementsArray.length > urlParts.length) {
            const elementToRemove = elementsArray.pop();
            const separator = elementToRemove.nextSibling;
            if (separator && separator.className === 'separator') {
                separator.remove();
            }
            elementToRemove.remove();
        }
    };

    // 4get specific fucntion
    // Ensure the elements array length matches the number of URL parts, if not, add new < a > elements
    const matchElementNumWithPartsFor4Get = (urlParts, elements, parent) => {
        while (elements.length < urlParts.length) {
            const newElement = createPartElementFor4Get(parent);
            parent.appendChild(newElement);
            elements.push(newElement);
        }
    };

    // 4get specific fucntion
    // Create a new <a> element that represents a URL component
    const createPartElementFor4Get = () => {
        const element = document.createElement('a');
        element.className = 'part';
        element.setAttribute('rel', 'noreferrer nofollow');
        element.setAttribute('tabindex', '-1');
        return element;
    };

    // 4get specific fucntion
    // Create a new <span> element that represents a URL separator '/'
    const createSeparatorElementFor4Get = () => {
        const separator = document.createElement('span');
        separator.className = 'separator';
        return separator;
    };

    // Function to update text for a single element
    const updateSingleElementText = (targetElement, rule, newUrl) => {
        if (!targetElement) {
            console.error("Target DOM Element not found for Single-Element Text update!");
            return;
        }
        let formattedUrl = '';
        switch (rule.urlDisplayMethod) {
            case 1:
                formattedUrl = breadCumbFormat(newUrl, rule.containProtocol);
                break;
            case 2:
                formattedUrl = newUrl; // Full URL with protocol
                break;
            case 3:
                formattedUrl = decodeURIComponent(removeProtocol(newUrl)); // Full URL without protocol
                break;
        }
        if (rule.updateTextWithoutOverwrite) {
            updateTextWithoutOverwriteChildNodes(targetElement, formattedUrl);
        } else if (rule.updateTextByOverwrite) {
            updateTextByOverwriteEverything(targetElement, formattedUrl);
        } else {
            targetElement.textContent = formattedUrl;
        }
    };

    // Format URLs into Breadcrumb style, while leaving 'https://' intact
    const breadCumbFormat = (url, containProtocol) => {
        if (!containProtocol) {
            url = removeProtocol(url);
        }

        const urlParts = splitUrlIntoParts(url, containProtocol);

        // Join the URL parts with ' › '
        const joinedUrl = urlParts.join(' › ');

        // Decode the URL to convert encoded characters to their original form
        return decodeURIComponent(joinedUrl);
    };

    // Function to update only the text node within an element, leave the child elements, if exist, intact
    const updateTextWithoutOverwriteChildNodes = (element, newContent) => {
        let currentIndex = 0;
        const indexObject = { currentIndex };
        collectNodes(element, node => {
            if (currentIndex >= newContent.length) return; // Stop if we've used all the new content
            replaceTextContent(node, oldText => replaceTextBasedOnIndex(oldText, newContent, indexObject));
        });
    };

    // Function to collect all text nodes within an element
    const collectNodes = (node, callback) => {
        // View these elements as text node
        const elementsToIncludeAsText = ['B'];
        // Do not view these elements as text node
        const elementsToExcludeAsText = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'];

        if (node.nodeType === Node.TEXT_NODE) {
            callback(node);
        } else if (node.nodeType === Node.ELEMENT_NODE && elementsToIncludeAsText.includes(node.tagName.toUpperCase())) {
            callback(node);
        } else if (node.nodeType === Node.ELEMENT_NODE && !elementsToExcludeAsText.includes(node.tagName.toUpperCase())) {
            node.childNodes.forEach(child => collectNodes(child, callback));
        }
    };

    // Function to replace the text content of a node
    const replaceTextContent = (node, textUpdater) => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = textUpdater(node.nodeValue);
        } else if (node.innerHTML) { // For elements treated as text, like <b>
            node.innerHTML = textUpdater(node.innerHTML);
        }
    };

    // Function to replace text based on index
    const replaceTextBasedOnIndex = (oldText, newContent, indexObject) => {
        const newText = newContent.slice(indexObject.currentIndex, indexObject.currentIndex + oldText.length);
        indexObject.currentIndex += oldText.length;
        return newText;
    };

    // Function to update the content by overwriting everything
    const updateTextByOverwriteEverything = (element, newContent) => {
        clearElementContent(element);
        element.textContent = newContent;
    };

    // Split URL into components, while preserving 'https://' in all occurrences
    const splitUrlIntoParts = (url, containProtocol) => {
        // Temporary replace 'https://' with a placeholder that is unlikely to be part of any URL
        const placeholder = "HTTPS_PLACEHOLDER";
        let tempUrl = url.replace(/https:\/\//g, placeholder);

        // Split the URL by '/'
        let parts = tempUrl.split('/');

        // Replace the placeholder back with 'https://'
        parts = parts.map(part => part.replace(new RegExp(placeholder, 'g'), 'https://'));

        // Filter out any empty strings that may have resulted from the split
        parts = parts.filter(part => part !== '');

        // Ensure the first part always starts with 'https://', adjusting if necessary
        if (containProtocol && parts.length > 0 && !parts[0].startsWith('https://')) {
            parts[0] = 'https://' + parts[0];
        }

        return parts;
    };

    // Extract the top level domain from URL link
    const extractTopLevelDomain = (url) => {
        const parsedUrl = new URL(url);
        return `${parsedUrl.protocol}//${parsedUrl.hostname}/`;
    };

    // Remove 'https://' from the URL link
    const removeProtocol = (url) => {
        return url.replace(/^https?:\/\//, '');
    };

    // Remove unnecessary tailing in the URL link
    const removeUnnecessaryTailing = (url) => {
        // Remove tailing slash '/'
        // Check if the URL ends with a slash and remove it if present
        url = url.endsWith('/') ? url.slice(0, -1) : url;

        // Remove parameters (the part behind ?)
        url = url.split('?')[0];

        // Remove article section indicator (the part behind #)
        return url.split('#')[0];
    };

    // Function to clear existing content of an element
    const clearElementContent = (element) => {
        element.textContent = '';
    };

    // Improved function to determine the search engine
    const getSearchEngineInfo = () => {
        try {
            const host = window.location.host;
            for (const engine in searchEngines) {
                if (searchEngines[engine].hosts.some(instanceHost => host.includes(instanceHost))) {
                    // Default to 'body' if not specified
                    const selectors = searchEngines[engine].resultContainerSelectors || ['body'];
                    // Get the attribute if specified
                    const attribute = searchEngines[engine].attribute;
                    return {
                        engine,
                        selectors: selectors,
                        attribute: attribute
                    };
                }
            }
        } catch (error) {
            console.error("Error determining search engine: ", error);
        }
    };

    // Function to observe and execute the URL modifier script
    const observeToExecute = (selector, engineInfo) => {
        const resultContainers = document.querySelectorAll(selector);
        if (resultContainers) {
            resultContainers.forEach(resultContainer => {
                // Observe changes in each result container
                const observer = new MutationObserver(() => modifyUrls(observer, resultContainer, engineInfo));
                observer.observe(resultContainer, { childList: true, subtree: true });
                modifyUrls(observer, resultContainer, engineInfo);
            });
        }
    };

    // Run the script for the current search engine
    try {
        const engineInfo = getSearchEngineInfo();
        if (engineInfo) {
            engineInfo.selectors.forEach(containerSelector => {
                observeToExecute(containerSelector, engineInfo);
            });
        }
    } catch (error) {
        console.error("Error executing URL Modifier Script: ", error);
    }
})();
