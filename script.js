// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      2.3.2
// @description  Modify (Redirect) URL links in search engines results to alternative frontends or for other purposes
// @author       Domenic

// @match        *://www.google.com*/search?*

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
// @match        *://s.trung.fun/search*
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

// @match        *://www.qwant.com/?*
// @match        *://www.ecosia.org/search?*
// @match        *://presearch.com/search?*
// @match        *://swisscows.com/*/web?*

// @match        *://metager.org/meta/*
// @match        *://metager.de/meta/*

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
// @match        *://search.zeroish.xyz/search.php?*

// @match        *://stract.com/search?*

// @match        *://www.etools.ch/searchSubmit.do*
// @match        *://www.etools.ch/mobileSearch.do*

// @match        *://search.lilo.org/?*
// @match        *://search.entireweb.com/search?*
// @match        *://www.mojeek.com/search?*
// @match        *://yep.com/web?*
// @match        *://www.torry.io/search*

// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

(function() {
    'use strict';

    // Define URL modification rules with precompiled regex
    const urlModificationRules = [
        {
            matchRegex: new RegExp(/^https?:\/\/(?:old|www)\.reddit\.com\/((?:r|u)\/.*)/),
            replaceWith: 'https://safereddit.com/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.quora\.com\/((?=.*-)[\w-]+$|profile\/.*)/),
            replaceWith: 'https://quetre.iket.me/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/twitter\.com\/([A-Za-z_][\w]+)(\/status\/(\d+))?.*/),
            replaceWith: 'https://nitter.net/$1$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/stackoverflow\.com(\/questions\/\d+\/[\w-]+)/),
            replaceWith: 'https://ao.vern.cc$1'
        },
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
            matchRegex: new RegExp(/^https?:\/\/(?:m|www)\.imdb\.com(.*)/),
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
            matchRegex: new RegExp(/^https?:\/\/github\.ink(.*)/),
            replaceWith: 'https://github.com$1'
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
            matchRegex: new RegExp(/^https?:\/\/www\.snopes\.com(.*)/),
            replaceWith: 'https://sd.vern.cc$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.instructables\.com\/(.*)/),
            replaceWith: 'https://ds.vern.cc/$1'
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
                displayMethod: 1
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
                displayMethod: 1,
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
                displayMethod: 1,
                multiElementsForUrlDisplay: true
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
                updateText: true,
                displayMethod: 2
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
                selector: 'a.h.svelte-1dihpoi',
                childSelector: 'cite.snippet-url.svelte-1ygzem6 span',
                updateChildText: true,
                containProtocol: false,
                displayMethod: 1,
                multiElementsForUrlDisplay: true
            },
            {
                selector: 'div.snippet a'
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
                displayMethod: 1,
                multiElementsForUrlDisplay: true
            },
            {
                // Selector for sub-results
                selector: 'ul.b269SZlC2oyR13Fcc4Iy li a.f3uDrYrWF3Exrfp1m3Og'
            },
            {
                selector: 'div.react-module div section div a'
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
                displayMethod: 1,
                multiElementsForUrlDisplay: true
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
                displayMethod: 1,
                multiElementsForUrlDisplay: true
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
        'presearch': [
            {
                selector: 'div.relative div.w-auto a',
                childSelector: 'div',
                updateChildText: true,
                displayMethod: 3,
            },
            {
                selector: 'div.relative div.inline-block a'
            }
        ],
        'swisscows': [
            {
                selector: 'article.item-web a',
                updateText: true,
                containProtocol: false,
                displayMethod: 1
            }
        ],
        'metager': [
            {
                selector: 'h2.result-title a'
            },
            {
                selector: 'div.result-subheadline a',
                updateText: true,
                displayMethod: 3
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
                updateText: true,
                useTopLevelDomain: true,
                displayMethod: 2
            },
            {
                selector: 'p.special-result-container a',
                updateText: true,
                displayMethod: 2
            },
        ],
        'stract': [
            {
                selector: 'div.grid div div.flex div div div a',
                updateText: true,
                displayMethod: 2
            },
            {
                selector: 'div.grid div div.flex div div a'
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
        'lilo': [
            {
                selector: 'div.lilo-text-result div a'
            },
            {
                selector: 'div.column a'
            }
        ],
        'entireweb': [
            {
                selector: 'div.gsc-webResult.gsc-result a'
            },
            {
                selector: 'div.web-result a'
            },
            {
                selector: 'div#infobox-list div.card-body a'
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
                displayMethod: 1
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
                displayMethod: 1
            }
        ],
        'torry': [
            {
                selector: 'div.searpList p a.toranclick',
                updateText: true,
                displayMethod: 2
            },
            {
                selector: 'div.searpList div h2 a.toranclick',
            },
            {
                selector: 'div.searpList ul li a',
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
        'presearch': {
            hosts: ['presearch.com'],
            resultContainerSelectors: ['div.w-full']
        },
        'swisscows': {
            hosts: ['swisscows.com'],
            resultContainerSelectors: ['section.container.page-results']
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
        'lilo': {
            hosts: ['search.lilo.org'],
            resultContainerSelectors: ['div.container#content']
        },
        'entireweb': {
            hosts: ['search.entireweb.com'],
            resultContainerSelectors: ['div.container.search-container']
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
                    processElements(rule.selector, rule, engineInfo);
                });

                // Reconnect the observer after DOM modifications are done
                observer.observe(resultContainer, { childList: true, subtree: true });
            }
        } catch (error) {
            console.error("URL Modification Error: ", error);
        }
    };

    // Function to process elements based on selector and rule
    const processElements = (selector, rule, engineInfo) => {
        const elements = document.querySelectorAll(selector);
        const additionalAttribute = engineInfo.attribute; // Get the additional attribute if specified
        if (elements.length > 0) {
            elements.forEach(element => {
                for (let i = 0; i < urlModificationRules.length; i++) {
                    try {
                        const urlRule = urlModificationRules[i];
                        let urlToModify = element.href || (additionalAttribute && element.getAttribute(additionalAttribute));
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
                            updateTextContent(element, rule, newUrl);
                            break;
                        }
                    } catch (error) {
                        console.error("Update Link/Text Error: ", error);
                    }
                }
            });
        }
    };

    // Function to update text content (displayed url)
    const updateTextContent = (element, rule, newUrl) => {
        if (rule.updateText || rule.updateChildText) {
            try {
                if (rule.multiElementsForUrlDisplay) {
                    updateMultiElementContent(element, rule, newUrl);
                } else {
                    let targetElement = element;
                    if (rule.childSelector) {
                        targetElement = element.querySelector(rule.childSelector)
                    }
                    updateSingleElementText(targetElement, rule, newUrl);
                }
            } catch (error) {
                console.error("Update Displayed URL Error: ", error);
            }
        }
    };

    // Function to update text for multi elements (i.e. DuckDuckGo, Brave)
    const updateMultiElementContent = (element, rule, newUrl) => {
        // Remove the "https://" protocol if containProtocol is false
        newUrl = rule.containProtocol ? newUrl : removeProtocol(newUrl);

        let formattedUrl = formatMethod1(newUrl, rule.containProtocol); // Assume max length 70 for splitting
        let urlParts = formattedUrl.split(' › ');

        // Correctly select the first and second <span> elements
        let spans = element.querySelectorAll(rule.childSelector);

        if (spans && spans.length >= 2) {
            spans.forEach(clearElementContent);
            spans[0].textContent = urlParts[0]; // Update the first part
            spans[1].textContent = ' › ' + urlParts.slice(1).join(' › '); // Update the second part
        } else {
            console.error("Script: Expected structure not found for Double Element URL update!");
        }
    };

    // Function to update text for a single element
    const updateSingleElementText = (targetElement, rule, newUrl) => {
        if (!targetElement) {
            console.error("Target DOM Element not found for Single-Element Text update!");
            return;
        }
        if (targetElement) {
            let formattedUrl = '';
            switch (rule.displayMethod) {
                case 1:
                    formattedUrl = formatMethod1(newUrl, rule.containProtocol);
                    break;
                case 2:
                    formattedUrl = newUrl; // Full URL with protocol
                    break;
                case 3:
                    formattedUrl = decodeURIComponent(removeProtocol(newUrl)); // Full URL without protocol
                    break;
            }
            if (rule.updateText) {
                updateTextWithoutOverwriteChildNodes(targetElement, formattedUrl);
            } else {
                targetElement.textContent = formattedUrl;
            }
        } else {
            console.error("Script: Expected element not found for Single Element URL update!");
        }
    };

    // Function for Method 1 (Breadcrumb style URLs), leaving 'https://' intact
    const formatMethod1 = (url, containProtocol) => {
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
        let foundTextNode = false;
        // Iterate through child nodes
        for (const node of element.childNodes) {
            // Identify and update the first text node
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = newContent;
                foundTextNode = true;
                break; // Stop after updating the first text node
            }
        }
    };

    // Remove 'https://' from the URL link
    const removeProtocol = (url) => {
        return url.replace(/^https?:\/\//, '');
    };

    // Extract the top level domain from URL link
    const extractTopLevelDomain = (url) => {
        const parsedUrl = new URL(url);
        return `${parsedUrl.protocol}//${parsedUrl.hostname}/`;
    };

    // Function to clear existing content of an element
    const clearElementContent = (element) => {
        if (element) {
            element.textContent = '';
        } else {

        }
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
