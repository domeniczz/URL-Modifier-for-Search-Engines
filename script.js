// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Modify URLs in search results of search engines
// @author       Domenic
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.disroot.org/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
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
                selector: 'a.url_wrapper',
                childSelector: '.url_i1',
                updateChildText: true,
                useTopLevelDomain: true // Flag for using top-level domain
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
        ]
        // Additional search engines can be defined here...
    };

    // User-defined list of SearX instance URLs
    const searxInstances = [
        'https://searx.tiekoetter.com/search',
        'https://search.disroot.org/search',
        // Add more SearX instance URLs as needed
    ];

    // Function to modify URLs and optionally text
    const modifyUrls = (engine) => {
        const selectors = selectorRules[engine];
        if (selectors) {
            selectors.forEach(rule => {
                document.querySelectorAll(rule.selector).forEach(element => {
                    urlModificationRules.forEach(urlRule => {
                        if (element.href && urlRule.matchRegex.test(element.href)) {
                            const newHref = element.href.replace(urlRule.matchRegex, urlRule.replaceWith);
                            element.href = newHref;

                            // Check if text content update is needed
                            if (rule.updateText) {
                                element.textContent = newHref;
                            }

                            // Check if child text content update is needed
                            if (rule.updateChildText && rule.childSelector) {
                                const childElement = element.querySelector(rule.childSelector);
                                if (childElement) {
                                    const textContent = rule.useTopLevelDomain ? extractTopLevelDomain(newHref) : newHref;
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
    const extractTopLevelDomain = (url) => {
        const matches = url.match(/^(https?:\/\/[^\/]+)/);
        return matches ? matches[1] : url;
    };

    // Determine which search engine the script is running on
    const getSearchEngine = () => {
        const host = window.location.host;
        const path = window.location.pathname;

        if (searxInstances.some(instance => host + path.startsWith(instance))) {
            return 'searx';
        } else if (host.includes('startpage')) {
            return 'startpage';
        }
        // Additional search engines can be added here
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
