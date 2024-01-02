// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      1.7.3
// @description  Modify URLs in search results of search engines
// @author       Domenic
// @match        *://www.google.com/search?*q=*
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.disroot.org/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
// @match        *://search.brave.com/search*
// @match        *://duckduckgo.com
// @match        *://duckduckgo.com/?*q=*
// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

(function() {
    'use strict';

    // Define URL modification rules with precompiled regex
    const urlModificationRules = [
        {
            matchRegex: new RegExp(/^https?:\/\/www\.reddit\.com(.*)/),
            replaceWith: 'https://old.reddit.com$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:en.?m?|simple)\.wikipedia.org\/wiki\/(?!Special:Search)(.*)/),
            replaceWith: 'https://www.wikiwand.com/en/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/zh\.?m?\.wikipedia\.org\/(?:zh-hans|wiki)\/(.*)/),
            replaceWith: 'https://www.wikiwand.com/zh-hans/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/((\w+\.)?medium\.com\/.*)/),
            replaceWith: 'https://freedium.cfd/https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:(?:.*)arxiv\.org\/pdf|arxiv-export-lb\.library\.cornell\.edu\/(?:pdf|abs))\/(\d{4}\.\d{4,5}(v\d)?)(?:.*)/),
            replaceWith: 'https://arxiv.org/abs/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(ieeexplore\.ieee\.org\/document\/\d+)\//),
            replaceWith: 'https://$1'
        }
        // Add more rules here as needed
    ];

    // Define enhanced selector rules for each search engine
    const selectorRules = {
        'google': [
            {
                selector: 'div.yuRUbf div span a',
                childSelector: 'div.byrV5b cite',
                updateChildText: true,
                useTopLevelDomain: true, // Flag for using top-level domain
                containProtocol: true
            }
        ],
        'searx': [
            {
                selector: 'article a.url_wrapper',
                childSelector: '.url_i1',
                updateChildText: true,
                useTopLevelDomain: true,
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
        'google': [
            'www.google.com'
        ],
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
        try {
            const selectors = selectorRules[engine];
            if (selectors) {
                selectors.forEach(rule => {
                    const elements = document.querySelectorAll(rule.selector);
                    if (elements.length > 0) {
                        elements.forEach(element => {
                            urlModificationRules.forEach(urlRule => {
                                if (element.href && urlRule.matchRegex.test(element.href)) {
                                    const newHref = element.href.replace(urlRule.matchRegex, urlRule.replaceWith);
                                    element.href = newHref;
                                    updateTextContent(element, rule, newHref);
                                }
                            });
                        });
                    }
                });
            }
        } catch (error) {
            console.error("URL Modifier Script Error: ", error);
        }
    };

    // Function to update text content
    const updateTextContent = (element, rule, newHref) => {
        if (rule.updateText) {
            element.textContent = getUpdatedText(newHref, rule);
        }
        if (rule.updateChildText && rule.childSelector) {
            const childElement = element.querySelector(rule.childSelector);
            if (childElement) {
                childElement.textContent = getUpdatedText(newHref, rule);
            }
        }
    };

    // Function to get updated text
    const getUpdatedText = (url, rule) => {
        return rule.useTopLevelDomain ? extractTopLevelDomain(url, rule.containProtocol) : url;
    };

    // Function to extract top-level domain from a URL
    const extractTopLevelDomain = (url, containProtocol) => {
        const regex = containProtocol ? /^(https?:\/\/[^\/]+)/ : /^(?:https?:\/\/)?([^\/]+)/;
        const matches = url.match(regex);
        return matches ? matches[1] : url;
    };

    // Improved function to determine the search engine
    const getSearchEngine = () => {
        try {
            const host = window.location.host;
            for (const engine in searchEngines) {
                if (searchEngines[engine].some(instanceHost => host.includes(instanceHost))) {
                    return engine;
                }
            }
        } catch (error) {
            console.error("Error determining search engine: ", error);
        }
    };

    // Run the script for the current search engine
    try {
        const currentEngine = getSearchEngine();
        if (currentEngine) {
            modifyUrls(currentEngine);
            // Observe DOM changes to handle dynamic content
            const observer = new MutationObserver(() => modifyUrls(currentEngine));
            observer.observe(document.body, { childList: true, subtree: true });
        }
    } catch (error) {
        console.error("Error executing URL Modifier Script: ", error);
    }
})();
