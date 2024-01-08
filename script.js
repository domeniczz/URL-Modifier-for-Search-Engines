// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Modify URLs in search results of search engines
// @author       Domenic
// @match        *://www.google.com/search?*q=*
// @match        *://searx.tiekoetter.com/search*
// @match        *://search.disroot.org/search*
// @match        *://priv.au/search*
// @match        *://www.startpage.com/search*
// @match        *://www.startpage.com/sp/search*
// @match        *://search.brave.com/search*
// @match        *://duckduckgo.com
// @match        *://duckduckgo.com/?*q=*
// @match        *://metager.org/meta/meta.ger3*
// @match        *://metager.de/meta/meta.ger3*
// @match        *://www.mojeek.com/search?q=*
// @match        *://www.qwant.com/?q=*
// @grant        none
// @run-at       document-end
// @license      GPL-2.0-only
// ==/UserScript==

// TODO: qwant breadcrumb URL display issue

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
        // {
        //     matchRegex: new RegExp(/^https?:\/\/(?:www\.)?youtube\.com\/(@[\w-]+|watch\?v=[\w-]+|playlist\?list=[\w-]+)/),
        //     replaceWith: 'https://yewtu.be/$1'
        //     // replaceWith: 'https://piped.video/$1'
        // },
        // {
        //     matchRegex: new RegExp(/^https?:\/\/stackoverflow\.com(\/questions\/\d+\/.*)/),
        //     replaceWith: 'https://code.whatever.social$1'
        // },
        {
            matchRegex: new RegExp(/^https?:\/\/(?:en\.?m?|simple)\.wikipedia\.org\/wiki\/(?!Special:Search)(.*)/),
            replaceWith: 'https://www.wikiwand.com/en/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/zh\.?m?\.wikipedia\.org\/(?:zh-hans|wiki)\/(.*)/),
            replaceWith: 'https://www.wikiwand.com/zh-hans/$1'
        },
        {
            matchRegex: new RegExp(/^https?:\/\/((?!test)[a-z]+)\.?m?\.wikipedia\.org\/(?:[a-z]+|wiki)\/(.*)/),
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
            },
            {
                hasSubResults: true, // Indicating the search engine can have sub-results
                subResultSelector: 'table tr h3 a' // Selector for sub-results
            }
            // ... [Other rules for Google]
        ],
        'searx': [
            {
                selector: 'article a.url_wrapper',
                childSelector: 'span span',
                updateChildText: true,
                useTopLevelDomain: true,
                containProtocol: true,
                displayMethod: 1,
                multiElementsForUrlDisplay: true
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
                childSelector: 'cite.snippet-url.svelte-1ygzem6 span',
                updateChildText: true,
                containProtocol: false,
                displayMethod: 1,
                multiElementsForUrlDisplay: true
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
                hasSubResults: true, // Indicating Google has sub-results
                subResultSelector: 'ul.b269SZlC2oyR13Fcc4Iy li a.f3uDrYrWF3Exrfp1m3Og' // Selector for sub-results
            }
        ],
        'qwant': [
            {
                selector: 'div._35zId._3A7p7.RMB_d.eoseI a.external'
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
                hasSubResults: true, // Indicating Google has sub-results
                subResultSelector: 'div._12BMd div._2-LMx._2E8gc._16lFV.Ks7KS.tCpbb.m_hqb a.external' // Selector for sub-results
            }
        ],
        'metager': [
            {
                selector: 'h2.result-title a'
            },
            {
                selector: 'div.result-subheadline a',
                updateText: true,
                containProtocol: false,
                displayMethod: 3
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
                'search.disroot.org',
                'priv.au'
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
        'qwant': {
            hosts: ['qwant.com'],
            resultContainerSelectors: [
                'div._35zId'
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
                    // Modify main results
                    processElements(rule.selector, rule, engine);

                    // Modify sub-results if applicable
                    if (rule.hasSubResults && rule.subResultSelector) {
                        processElements(rule.subResultSelector, rule, engine);
                    }
                });
            }
        } catch (error) {
            console.error("URL Modifier Script Error: ", error);
        }
    };

    // Function to process elements based on selector and rule
    const processElements = (selector, rule, engine) => {
        const elements = document.querySelectorAll(selector);
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
    };

    // Function to update text content
    const updateTextContent = (element, rule, newUrl) => {
        if (rule.updateText || (rule.updateChildText && rule.childSelector)) {
            // Special handling for DuckDuckGo and Brave
            if (rule.multiElementsForUrlDisplay) {
                updateDoubleElementContent(element, rule, newUrl);
            } else {
                // General handling for other search engines
                const targetElement = rule.childSelector ? element.querySelector(rule.childSelector) : element;
                updateSingleElementText(targetElement, rule, newUrl);
            }
        }
    };

    // Function to clear existing content of an element
    const clearElementContent = (element) => {
        if (element) {
            element.textContent = '';
        }
    };

    // Function to update text for multi elements (i.e. DuckDuckGo, Brave)
    const updateDoubleElementContent = (element, rule, newUrl) => {
        // Remove the "https://" protocol if containProtocol is false
        newUrl = rule.containProtocol ? newUrl : removeProtocol(newUrl);

        let formattedUrl = formatMethod1(newUrl, 70); // Assume max length 70 for splitting
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
        if (targetElement) {
            clearElementContent(targetElement);
            let formattedUrl = '';
            switch (rule.displayMethod) {
                case 1:
                    formattedUrl = formatMethod1(newUrl, rule.maxLength);
                    break;
                case 2:
                    formattedUrl = newUrl; // Full URL with protocol
                    break;
                case 3:
                    formattedUrl = decodeURIComponent(removeProtocol(newUrl)); // Full URL without protocol
                    break;
            }
            targetElement.textContent = formattedUrl;
        } else {
            console.error("Script: Expected element not found for Single Element URL update!");
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
