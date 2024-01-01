// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Modify URLs in search results of search engines
// @author       Domenic
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.disroot.org/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
// @match        *://search.brave.com/search*
// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

(function() {
    'use strict';

    // Define URL modification rules
    const urlModificationRules = [
        {
            matchRegex: /^https?:\/\/www\.reddit\.com(.*)/,
            replaceWith: 'https://old.reddit.com$1'
        },
        {
            matchRegex: /^https?:\/\/(en(.m)?|simple)\.wikipedia.org\/wiki\/(?!Special:Search)(\w+)/,
            replaceWith: 'https://www.wikiwand.com/en/$3'
        },
        {
            matchRegex: /^https?:\/\/zh(\.m)?\.wikipedia\.org\/(zh-hans|wiki)\/(.*)/,
            replaceWith: 'https://www.wikiwand.com/zh-hans/$3'
        },
        {
            matchRegex: /^https?:\/\/((\w+\.)?medium\.com\/.*)/,
            replaceWith: 'https://freedium.cfd/https://$1'
        },
        {
            matchRegex: /^https?:\/\/((.*)arxiv\.org\/pdf|arxiv-export-lb.library.cornell.edu\/(pdf|abs))\/(\d{4}\.\d{4,5}(v\d)?)(.*)/,
            replaceWith: 'https://arxiv.org/abs/$4'
        },
        {
            matchRegex: /^https?:\/\/(ieeexplore\.ieee\.org\/document\/\d+)\//,
            replaceWith: 'https://$1'
        }
        // Add more rules here as needed
    ];

    // Define enhanced selector rules for each search engine
    const selectorRules = {
        'searx': [
            {
                selector: 'article a.url_wrapper',
                childSelector: '.url_i1',
                updateChildText: true,
                useTopLevelDomain: true, // Flag for using top-level domain
                containProtocol: true
            },
            {
                selector: 'h3 a'
            }
        ],
        'startpage': [
            {
                selector: 'a.w-gl__result-url.result-link',
                updateText: true
            },
            {
                selector: 'a.w-gl__result-title.result-link'
            }
        ],
        'brave': [
            {
                selector: 'a.h.svelte-1dihpoi',
                childSelector: 'cite.snippet-url.svelte-1ygzem6 span.netloc.text-small-bold.svelte-1ygzem6',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: false
            }
        ],
        'duckduckgo': [
            {
                selector: 'a.eVNpHGjtxRBq_gLOfGDr.LQNqh2U1kzYxREs65IJu'
            },
            {
                selector: 'div.mwuQiMOjmFJ5vmN6Vcqw.LQVY1Jpkk8nyJ6HBWKAk a.Rn_JXVtoPVAFyGkcaXyK',
                childSelector: 'span',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: true
            }
        ]
        // Additional search engines can be defined here...
    };

    // User-defined list of search engine instance URLs
    const searchEngines = {
        'searx': [
            'searx.tiekoetter.com',
            'search.disroot.org'
        ],
        'startpage': [
            'www.startpage.com'
        ],
        'brave': [
            'search.brave.com'
        ],
        'duckduckgo': [
            'duckduckgo.com'
        ],
        // ... more search engines
    };

    // Function to modify URLs and optionally text
    const modifyUrls = (engine) => {
        const selectors = selectorRules[engine];
        if (selectors) {
            selectors.forEach(rule => {
                document.querySelectorAll(rule.selector).forEach(element => {
                    urlModificationRules.forEach(urlRule => {
                        let newHref = "error";
                        if (element.href && urlRule.matchRegex.test(element.href)) {
                            newHref = element.href.replace(urlRule.matchRegex, urlRule.replaceWith);
                            element.href = newHref;

                            // Check if text content update is needed
                            if (rule.updateText) {
                                let textContent = rule.useTopLevelDomain ? extractTopLevelDomain(newHref, rule.containProtocol) : newHref;
                                element.textContent = textContent;
                            }

                            // Check if child text content update is needed
                            if (rule.updateChildText && rule.childSelector) {
                                let childElement = element.querySelector(rule.childSelector);
                                if (childElement) {
                                    let textContent = rule.useTopLevelDomain ? extractTopLevelDomain(newHref, rule.containProtocol) : newHref;
                                    childElement.textContent = textContent;
                                }
                            }
                        }
                    });
                });
            });
        }
    };

    // Function to extract top-level domain from a URL
    const extractTopLevelDomain = (url, containProtocol) => {
        let regex = containProtocol ? /^(https?:\/\/[^\/]+)/ : /^(?:https?:\/\/)?([^\/]+)/;
        let matches = url.match(regex);
        return matches ? matches[1] : url;
    };

    // Improved function to determine the search engine
    const getSearchEngine = () => {
        let host = window.location.host;

        for (let engine in searchEngines) {
            if (searchEngines[engine].some(instanceHost => host.includes(instanceHost))) {
                return engine;
            }
        }
    };

    // Run the script for the current search engine
    const currentEngine = getSearchEngine();

    if (currentEngine) {
        modifyUrls(currentEngine);

        // Observe DOM changes to handle dynamic content
        const observer = new MutationObserver(() => modifyUrls(currentEngine));
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();
