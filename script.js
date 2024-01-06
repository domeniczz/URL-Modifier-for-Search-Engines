// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      1.9
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
// @match        *://metager.org/meta/meta.ger3*
// @match        *://metager.de/meta/meta.ger3*
// @match        *://www.mojeek.com/search?q=*
// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

// DuckDuckGo, Metager, Brave

(function() {
    'use strict';

    // Define URL modification rules with precompiled regex
    const urlModificationRules = [
        {
            matchRegex: new RegExp(/^https?:\/\/www\.reddit\.com(.*)/),
            replaceWith: 'https://old.reddit.com$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/twitter\.com\/([A-Za-z_][\w]+)(\/status\/(\d+))?.*/),
            replaceWith: 'https://nitter.net/$1$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:www\.)?youtube\.com\/(@[\w-]+|watch\?v=[\w-]+|playlist\?list=[\w-]+)/),
            replaceWith: 'https://yewtu.be/$1'
            // replaceWith: 'https://piped.video/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/stackoverflow\.com(\/questions\/\d+\/.*)/),
            replaceWith: 'https://code.whatever.social$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:en\.?m?|simple)\.wikipedia\.org\/wiki\/(?!Special:Search)(.*)/),
            replaceWith: 'https://www.wikiwand.com/en/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/zh\.?m?\.wikipedia\.org\/(?:zh-hans|wiki)\/(.*)/),
            replaceWith: 'https://www.wikiwand.com/zh-hans/$1'
        },
        {
            matchRegex: new RegExp(/https?:\/\/([a-z]+)\.?m?\.wikipedia\.org\/(?:[a-z]+|wiki)\/(.*)/),
            replaceWith: 'https://www.wikiwand.com/$1/$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/((?:(?:\w+\.)?medium|towardsdatascience)\.com\/.*)/),
            replaceWith: 'https://freedium.cfd/https://$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/imgur\.com\/(a\/)?((?!gallery)\w+)/),
            replaceWith: 'https://rimgo.totaldarkness.net/a/$1$2'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/www\.npr\.org\/(?:\d{4}\/\d{2}\/\d{2}|sections)\/(?:[A-Za-z-]+\/\d{4}\/\d{2}\/\d{2}\/)?(\d+)\/.*/),
            replaceWith: 'https://text.npr.org/$1'
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
            matchRegex: new RegExp(/^https?:\/\/github\.ink\/(.*)/),
            replaceWith: 'https://github.com/$1'
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
                containProtocol: true,
                displayMethod: 1
            }
            // ... [Other rules for Google]
        ],
        'searx': [
            {
                selector: 'article a.url_wrapper',
                childSelector: '.url_i1',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: true,
                displayMethod: 1
            },
            {
                selector: 'h3 a'
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
            }
        ],
        'brave': [
            {
                selector: 'a.h.svelte-1dihpoi',
                childSelector: 'cite.snippet-url.svelte-1ygzem6 span.netloc.text-small-bold.svelte-1ygzem6',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: false,
                displayMethod: 1
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
                useTopLevelDomain: true,
                containProtocol: true,
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
                containProtocol: false
            }
        ],
        'mojeek': [
            {
                selector: 'li a.ob',
                childSelector: 'span.url',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: true,
                displayMethod: 1
            }
            // ... [Other rules for Mojeek]
        ]
        // Additional search engines can be defined here...
    };

    // User-defined list of search engine instance URLs
    const searchEngines = {
        'google': {
            hosts: ['www.google.com'],
            // search results container
            // you can ignore this parameter if you don't want to set it, just delete it
            // defult value is 'body'
            resultContainerSelectors: ['div.GyAeWb#rcnt']
        },
        'searx': {
            hosts: [
                'searx.tiekoetter.com',
                'search.disroot.org'
            ],
            resultContainerSelectors: [
                'main#main_results'
                // 'maindiv#main_results div#urls'
                // 'div#sidebar div#infoboxes'
            ]
        },
        'startpage': {
            hosts: ['www.startpage.com'],
            resultContainerSelectors: [
                'div.show-results'
                // 'div.sidebar-results'
            ]
        },
        'brave': {
            hosts: ['search.brave.com'],
            resultContainerSelectors: [
                'main.main-column'
                // 'aside.sidebar'
            ]
        },
        'duckduckgo': {
            hosts: ['duckduckgo.com'],
            resultContainerSelectors: [
                'section[data-testid="mainline"][data-area="mainline"]'
                // 'section[data-testid="sidebar"][data-area="sidebar"]'
            ]
        },
        'metager': {
            hosts: [
                'metager.org',
                'metager.de'
            ],
            resultContainerSelectors: ['div#results']
        },
        'mojeek': {
            hosts: ['mojeek.com']
        }
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
    const updateTextContent = (element, rule, newUrl) => {
        if (rule.updateText || (rule.updateChildText && rule.childSelector)) {
            const targetElement = rule.childSelector ? element.querySelector(rule.childSelector) : element;
            if (targetElement) {
                let originalUrlLength = newUrl.trim().length;
                let maxLength = Math.min(originalUrlLength, 70);
                let formattedUrl = '';
                switch (rule.displayMethod) {
                    case 1:
                        formattedUrl = formatMethod1(newUrl, maxLength);
                        break;
                    case 2:
                        formattedUrl = newUrl; // Full URL with protocol
                        break;
                    case 3:
                        formattedUrl = removeProtocol(newUrl); // Full URL without protocol
                        break;
                }
                targetElement.textContent = formattedUrl;
            }
        }
    };

    // Function for Method 1 (Breadcrumb Style URLs), leaving 'https://' intact
    const formatMethod1 = (url, maxLength) => {
        // Split the URL while keeping 'https://' intact
        let parts = url.replace('https://', 'https›').split('/');
        parts[0] = parts[0].replace('https›', 'https://'); // Restore 'https://'

        // Join the URL parts with ' › ' and check if it exceeds maxLength
        let joinedUrl = parts.join(' › ');
        if (joinedUrl.length > maxLength) {
            // Apply truncation based on maxLength
            let truncatedUrl = joinedUrl.slice(0, maxLength - 3); // Reserve space for '...'
            truncatedUrl += '...';
            joinedUrl = truncatedUrl;
        }

        // Decode the URL to convert encoded characters to their original form
        return decodeURIComponent(joinedUrl);
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

    const removeProtocol = (url) => {
        return url.replace(/^https?:\/\//, '');
    };

    // Improved function to determine the search engine
    const getSearchEngineInfo = () => {
        try {
            const host = window.location.host;
            for (const engine in searchEngines) {
                if (searchEngines[engine].hosts.some(instanceHost => host.includes(instanceHost))) {
                    const selectors = searchEngines[engine].resultContainerSelectors || ['body']; // Default to 'body' if not specified
                    return {
                        engine,
                        selectors: selectors
                    };
                }
            }
        } catch (error) {
            console.error("Error determining search engine: ", error);
        }
    };

    const observeToExecute = (engine, selector) => {
        const resultContainers = document.querySelectorAll(selector);
        if (resultContainers) {
            resultContainers.forEach(resultContainer => {
                modifyUrls(engine.engine);
                // Observe changes in each result container
                const observer = new MutationObserver(() => modifyUrls(engine));
                observer.observe(resultContainer, { childList: true, subtree: true });
            });
        }
        // else {
        //     // Check again after a short delay if the container is not found
        //     setTimeout(() => setUpObserver(engine, selector), 500);
        // }
    };

    // Run the script for the current search engine
    try {
        const engineInfo = getSearchEngineInfo();
        if (engineInfo) {
            engineInfo.selectors.forEach(containerSelector => {
                observeToExecute(engineInfo.engine, containerSelector);
            });
        }
    } catch (error) {
        console.error("Error executing URL Modifier Script: ", error);
    }
})();
