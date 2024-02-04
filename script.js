// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      2.3.4
// @description  Modify (Redirect) URL links in search engines results to alternative frontends or for other purposes
// @author       Domenic

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

// @match        *://www.etools.ch/searchSubmit.do*
// @match        *://www.etools.ch/mobileSearch.do*

// @match        *://www.mojeek.com/search?*
// @match        *://yep.com/web?*
// @match        *://www.torry.io/search*
// @match        *://www.qwant.com/?*
// @match        *://www.ecosia.org/search?*
// @match        *://www.alltheinternet.com/?*
// @match        *://oceanhero.today/web?*

// @match        *://swisscows.com/*/web?*

// @match        *://search.lilo.org/?*
// @match        *://search.entireweb.com/search?*
// @match        *://search.gmx.com/web/result?*
// @match        *://search.gmx.com/web?*
// @match        *://youcare.world/all?*
// @match        *://spot.ecloud.global/search*
// @match        *://www.nona.de/?*
// @match        *://www.exalead.com/search/web/results/?*
// @match        *://search.seznam.cz/?*
// @match        *://gibiru.com/results.html?*
// @match        *://www.lukol.com/s.php?*
// @match        *://search.givewater.com/serp?*
// @match        *://results.excite.com/serp?*
// @match        *://www.webcrawler.com/serp?*
// @match        *://www.metacrawler.com/serp?*
// @match        *://www.dogpile.com/serp?*

// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

(function() {
    'use strict';

    // Define URL modification rules with precompiled regex
    const urlModificationRules = [
        // {
        //     matchRegex: new RegExp(/^(?:https?:\/\/)(?:[\w-]+\.|)((?:imdb|imgur|instagram|medium|odysee|quora|reddit|tiktok|twitter|wikipedia|youtube)\.(?:[a-z]+).*)/),
        //     replaceWith: 'https://farside.link/$1'
        // },
        {
            matchRegex: new RegExp(/^https?:\/\/((?!test)[a-z]+)\.?m?\.wikipedia\.org\/(?:[a-z]+|wiki)\/(?!Special:Search)(.*)/),
            replaceWith: 'https://www.wikiwand.com/$1/$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/zh\.?m?\.wikipedia\.org\/(?:zh-hans|wiki)\/(.*)/),
            replaceWith: 'https://www.wikiwand.com/zh-hans/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/wikipedia\.org\/(?:[a-z]+|wiki)\/(?!Special:Search)(.*)/),
            replaceWith: 'https://www.wikiwand.com/en/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:old|www)\.reddit\.com\/((?:r|u)\/.*)/),
            replaceWith: 'https://safereddit.com/$1'
            // replaceWith: 'https://lr.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.quora\.com\/((?=.*-)[\w-]+$|profile\/.*)/),
            replaceWith: 'https://quetre.iket.me/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/twitter\.com\/([A-Za-z_][\w]+)(\/status\/(\d+))?.*/),
            replaceWith: 'https://nitter.catsarch.com/$1$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/stackoverflow\.com(\/questions\/\d+\/[\w-]+)/),
            replaceWith: 'https://ao.vern.cc$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/((?:(?:.*?)?medium|towardsdatascience|betterprogramming|.*?plainenglish|.*?gitconnected|aninjusticemag|betterhumans|uxdesign|uxplanet)\.\w+\/(?=.*-)(?:[\w\/-]+|[\w@.]+\/[\w-]+))(?:\?source=.*)?/),
            replaceWith: 'https://freedium.cfd/https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:www\.|m\.)?youtube\.com\/((?:@|watch\?|playlist\?|channel\/|user\/|shorts\/).*)/),
            replaceWith: 'https://vid.puffyan.us/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/music\.youtube\.com\/((?:playlist\?|watch\?|channel\/|browse\/).*)/),
            replaceWith: 'https://hyperpipe.surge.sh/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.twitch\.tv\/(\w+)$/),
            replaceWith: 'https://ttv.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:m|www)\.imdb\.com\/(title\/\w+).*/),
            replaceWith: 'https://ld.vern.cc$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.goodreads\.com\/((?:(?:[a-z]+\/)?book\/show|work\/quotes|series|author\/show)\/[\w.-]+)/),
            replaceWith: 'https://bl.vern.cc/$1'
        },
        {
            // only support English Fandom sites
            matchRegex: new RegExp(/^https?:\/\/((?!www|community).*?)\.fandom\.com\/wiki\/(.*)/),
            replaceWith: 'https://antifandom.com/$1/wiki/$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.urbandictionary\.com\/(define\.php\?term=.*)/),
            replaceWith: 'https://rd.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.reuters\.com\/((?=.*\/)(?=.*-).*)/),
            replaceWith: 'https://nu.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(www\.ft\.com\/content\/[\w-]+)/),
            replaceWith: 'https://archive.today/https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(www\.bloomberg\.com\/(?:(?:[a-z]+\/)?news|opinion)\/[\w\/-]+).*/),
            replaceWith: 'https://archive.today/https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.npr\.org\/(?:\d{4}\/\d{2}\/\d{2}|sections)\/(?:[A-Za-z-]+\/\d{4}\/\d{2}\/\d{2}\/)?(\d+)\/.*/),
            replaceWith: 'https://text.npr.org/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/news\.ycombinator\.com\/item\?id=(\d+)/),
            replaceWith: 'https://www.hckrnws.com/stories/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:[a-z]+)\.slashdot\.org(.*)/),
            replaceWith: 'https://slashdot.org$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:(?:.*)arxiv\.org\/pdf|arxiv-export-lb\.library\.cornell\.edu\/(?:pdf|abs))\/(\d{4}\.\d{4,5}(v\d)?)(?:.*)/),
            replaceWith: 'https://arxiv.org/abs/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(ieeexplore\.ieee\.org\/document\/\d+)\//),
            replaceWith: 'https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/github\.ink(.*)/),
            replaceWith: 'https://github.com$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.snopes\.com(.*)/),
            replaceWith: 'https://sd.vern.cc$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.instructables\.com\/(.*)/),
            replaceWith: 'https://ds.vern.cc/$1'
            // replaceWith: 'https://structables.private.coffee/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/genius\.com\/((?=[\w-]+lyrics|search\?q=).*)/),
            replaceWith: 'https://dm.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(.*?)\.bandcamp\.com\//),
            replaceWith: 'https://tn.vern.cc/artist.php?name=$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(.*?)\.bandcamp\.com\/(.*?)\/(.*)/),
            replaceWith: 'https://tn.vern.cc/release.php?artist=$1&type=$2&name=$3'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/bandcamp\.com\/search\?q=(.*)/),
            replaceWith: 'https://tn.vern.cc/search.php?query=$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/f4\.bcbits\.com\/img\/(.*)/),
            replaceWith: 'https://tn.vern.cc/image.php?file=$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/t4\.bcbits\.com\/stream\/(.*?)\/(.*?)\/(.*?)\?token=(.*)/),
            replaceWith: 'https://tn.vern.cc/audio.php?directory=$1&format=$2&file=$3&token=$4'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:\w+\.)?imgur.com\/((?:a\/)?(?!gallery)[\w.]+)/),
            replaceWith: 'https://rimgo.totaldarkness.net/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.pixiv\.net\/(?:[a-z]+\/)?(artworks\/\d+|tags\/\w+|users\/\d+).*/),
            replaceWith: 'https://pixivfe.exozy.me/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/knowyourmeme\.com\/(.*)/),
            replaceWith: 'https://mm.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/tenor\.com\/((?:view|search)\/.*)/),
            replaceWith: 'https://sp.vern.cc/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:\w+\.)?ifunny\.co\/(picture\/.*)/),
            replaceWith: 'https://uf.vern.cc/$1'
        },
        // Add more rules here as needed
    ];

    // Define enhanced selector rules for each search engine
    const selectorRules = {
        'google': [
            {
                selector: 'div.MjjYud div.yuRUbf div span a',
                childSelector: 'div.byrV5b cite',
                updateChildText: true,
                containProtocol: true,
                urlDisplayMethod: 1
            },
            {
                // selector for sub-results
                selector: 'div.MjjYud div.HiHjCd a'
            },
            {
                // selector for sidebar links
                selector: 'div.TQc1id#rhs a'
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
                selector: 'div.text-result a.hover'
            },
            {
                selector: 'div.text-result div.sublinks a'
            },
            {
                selector: 'div.right-wrapper div.answer-wrapper div.answer div.answer-title a.answer-title'
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
        'alltheinternet': [
            {
                parentSelector: 'div.gs-webResult.gs-result',
                linkNodeSelector: 'a.gs-title',
                textNodeSelector: 'div.gsc-url-top div.gs-visibleUrl-long',
                updateTextByOverwrite: true,
                urlDisplayMethod: 2
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
                childSelector: 'span',
                updateChildText: true,
                containProtocol: true,
                multiElementsForUrlDisplay: 2
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
            resultContainerSelectors: ['div.GyAeWb#rcnt']
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
        'etools': {
            hosts: ['etools.ch'],
            // resultContainerSelectors: ['table.result']
        },
        'mojeek': {
            hosts: ['mojeek.com'],
            resultContainerSelectors: ['div.container.serp-results']
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
        'alltheinternet': {
            hosts: ['alltheinternet.com']
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
        'gmx': {
            hosts: ['search.gmx.com']
        },
        'youcare': {
            hosts: ['youcare.world']
        },
        'spot': {
            hosts: ['spot.ecloud.global'],
            resultContainerSelectors: ['div.container.contents']
        },
        'nona': {
            hosts: ['nona.de'],
            resultContainerSelectors: ['main.search-results div.container']
        },
        'exalead': {
            hosts: ['exalead.com'],
            resultContainerSelectors: ['ul.media-list']
        },
        'seznam': {
            hosts: ['search.seznam.cz'],
            resultContainerSelectors: ['div.PageWrapper.SearchPage#searchpage-root'],
        },
        'gibiru': {
            hosts: ['gibiru.com'],
            resultContainerSelectors: ['div.container#web-results'],
        },
        'lukol': {
            hosts: ['lukol.com']
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
        }
        // ... more search engines
    };

    // Function to modify URLs and optionally text
    const modifyUrls = (engine, observer, resultContainer, engineInfo) => {
        try {
            const selectors = selectorRules[engine];
            if (selectors) {
                // Disconnect the observer to prevent recursive triggering
                observer.disconnect();

                // Modify results
                selectors.forEach(rule => {
                    if (rule.selector) {
                        processElements(rule.selector, rule, engineInfo);
                    } else if (rule.parentSelector) {
                        processParentElements(rule.parentSelector, rule, engineInfo);
                    }
                });

                // Reconnect the observer after DOM modifications are done
                observer.observe(resultContainer, { childList: true, subtree: true });
            }
        } catch (error) {
            console.error("URL Modification Error: ", error);
        }
    };

    // Function to process elements specified by `selector`
    const processElements = (selector, rule, engineInfo) => {
        const elements = document.querySelectorAll(selector);
        const additionalAttribute = engineInfo.attribute; // Get the additional attribute if specified
        if (elements.length > 0) {
            elements.forEach(element => {
                for (let i = 0; i < urlModificationRules.length; i++) {
                    try {
                        const urlRule = urlModificationRules[i];
                        let urlToModify = additionalAttribute ? element.getAttribute(additionalAttribute) : element.href;
                        urlToModify = decodeURIComponent(urlToModify);
                        // update attribute
                        if (urlToModify && urlRule.matchRegex.test(urlToModify)) {
                            // Generate redirected URL
                            let newUrl = urlToModify.replace(urlRule.matchRegex, urlRule.replaceWith);
                            newUrl = rule.useTopLevelDomain ? extractTopLevelDomain(newUrl) : newUrl;
                            if (element.href) {
                                element.href = newUrl;
                            } else if (additionalAttribute) {
                                element.setAttribute(additionalAttribute, newUrl);
                            }
                            updateTextContent(element, rule, removeParameters(newUrl));
                            break;
                        }
                    } catch (error) {
                        console.error("Update Link/Text Error: ", error);
                    }
                }
            });
        }
    };

    // Function to process elements specified by `parentSelector`
    const processParentElements = (selector, rule, engineInfo) => {
        const elements = document.querySelectorAll(selector);
        const additionalAttribute = engineInfo.attribute; // Get the additional attribute if specified
        if (elements.length > 0) {
            elements.forEach(element => {
                const linkElement = element.querySelector(rule.linkNodeSelector);
                const textElement = element.querySelector(rule.textNodeSelector);

                for (let i = 0; i < urlModificationRules.length; i++) {
                    try {
                        const urlRule = urlModificationRules[i];
                        let urlToModify = additionalAttribute ? element.getAttribute(additionalAttribute) : linkElement.href;
                        urlToModify = decodeURIComponent(urlToModify);
                        // update attribute
                        if (urlToModify && urlRule.matchRegex.test(urlToModify)) {
                            // Generate redirected URL
                            let newUrl = urlToModify.replace(urlRule.matchRegex, urlRule.replaceWith);
                            newUrl = rule.useTopLevelDomain ? extractTopLevelDomain(newUrl) : newUrl;
                            if (linkElement.href) {
                                linkElement.href = newUrl;
                            } else if (additionalAttribute) {
                                linkElement.setAttribute(additionalAttribute, newUrl);
                            }
                            updateTextContent(textElement, rule, removeParameters(newUrl));
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
        if (rule.updateTextWithoutOverwrite || rule.updateTextByOverwrite || rule.updateChildText) {
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
        }
    };

    const parallelElements = (urlParts, elements) => {
        if (elements && elements.length >= 2) {
            elements.forEach(clearElementContent);
            elements[0].textContent = urlParts[0]; // Update the first part
            elements[1].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (parallel elements) URL update!");
        }
    };

    const mixedElements = (urlParts, elements, parent) => {
        if (elements && elements.length >= 1) {
            elements.forEach(clearElementContent);
            updateTextWithoutOverwriteChildNodes(parent, urlParts[0]); // Update the first part
            elements[0].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (mixed elements) URL update!");
        }
    };

    const mixedElementsWithoutClear = (urlParts, elements, parent) => {
        if (elements && elements.length >= 1) {
            updateTextWithoutOverwriteChildNodes(parent, urlParts[0]); // Update the first part
            elements[0].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Multi-Element (mixed elements with clear) URL update!");
        }
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

    // Function for Method 1 (Breadcrumb style URLs), leaving 'https://' intact
    const breadCumbFormat = (url, containProtocol) => {
        if (!containProtocol) {
            url = removeProtocol(url);
        }
        // Split the URL while keeping 'https://' intact; Replace the second occurrence of 'https://' with 'https', if exists
        // Replace the first occurrence of 'https://' with a placeholder
        url = url.replace('https://', 'https›');
        // Deal with the second 'https://'
        let secondHttpsIndex = url.indexOf('https://');
        if (secondHttpsIndex !== -1) {
            url = url.substring(0, secondHttpsIndex) + 'https/' + url.substring(secondHttpsIndex + 8);
        }
        // Split the URL with '/'
        let parts = url.split('/');
        // Restore the first 'https://' in the URL
        parts[0] = parts[0].replace('https›', 'https://');

        // Join the URL parts with ' › '
        let joinedUrl = parts.join(' › ');

        // Decode the URL to convert encoded characters to their original form
        return decodeURIComponent(joinedUrl);
    };

    // Function to update only the text node within an element, leave the child elements, if exist, intact
    const updateTextWithoutOverwriteChildNodes = (element, newContent) => {
        // Iterate through child nodes
        for (const node of element.childNodes) {
            // Identify and update the first text node
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = newContent;
                break; // Stop after updating the first text node
            }
        }
    };

    // Function to update the content by overwriting everything
    const updateTextByOverwriteEverything = (element, newContent) => {
        clearElementContent(element);
        element.textContent = newContent;
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

    // Remove parameters (the part behind ?) in the URL link
    const removeParameters = (url) => {
        return url.split('?')[0];
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
                    const selectors = searchEngines[engine].resultContainerSelectors || ['body']; // Default to 'body' if not specified
                    const attribute = searchEngines[engine].attribute; // Get the attribute if specified
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

    const observeToExecute = (engine, selector, engineInfo) => {
        const resultContainers = document.querySelectorAll(selector);
        if (resultContainers) {
            resultContainers.forEach(resultContainer => {
                // Observe changes in each result container
                const observer = new MutationObserver(() => modifyUrls(engine, observer, resultContainer, engineInfo));
                observer.observe(resultContainer, { childList: true, subtree: true });
                modifyUrls(engine, observer, resultContainer, engineInfo);
            });
        }
    };

    // Run the script for the current search engine
    try {
        const engineInfo = getSearchEngineInfo();
        if (engineInfo) {
            engineInfo.selectors.forEach(containerSelector => {
                observeToExecute(engineInfo.engine, containerSelector, engineInfo);
            });
        }
    } catch (error) {
        console.error("Error executing URL Modifier Script: ", error);
    }
})();
