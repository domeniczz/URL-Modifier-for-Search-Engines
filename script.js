// ==UserScript==
// @name         URL Modifier for Search Engines
// @namespace    http://tampermonkey.net/
// @version      1.3
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
    const urlRules = [
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

    // Function to extract the top-level domain from a URL
    const extractTopLevelDomain = (url) => {
        const matches = url.match(/^(https?:\/\/[^\/]+)/);
        return matches ? matches[1] : '';
    };

    // Function to modify URLs
    const modifyUrls = () => {
        document.querySelectorAll('article.result').forEach(article => {
            urlRules.forEach(rule => {
                // Modify href of <a> with class "url_wrapper"
                const urlWrapper = article.querySelector('a.url_wrapper');
                if (urlWrapper && rule.matchRegex.test(urlWrapper.href)) {
                    const originalHref = urlWrapper.href;
                    urlWrapper.href = originalHref.replace(rule.matchRegex, rule.replaceWith);

                    // Extract and update the top-level domain
                    const topLevelDomain = extractTopLevelDomain(urlWrapper.href);
                    const topLevelDomainSpan = article.querySelector('span.url_i1');
                    if (topLevelDomainSpan) {
                        topLevelDomainSpan.textContent = topLevelDomain;
                    }
                }

                // Modify href under <h3>
                const h3Link = article.querySelector('h3 a');
                if (h3Link && rule.matchRegex.test(h3Link.href)) {
                    h3Link.href = h3Link.href.replace(rule.matchRegex, rule.replaceWith);
                }
            });
        });
    };

    // Run the script on page load
    modifyUrls();

    // Observe DOM changes to handle dynamic content
    const observer = new MutationObserver(modifyUrls);
    observer.observe(document.body, { childList: true, subtree: true });
})();
