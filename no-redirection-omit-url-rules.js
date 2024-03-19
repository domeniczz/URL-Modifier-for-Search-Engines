/**
 * You can simply copy and paste the content to script.js to use it.
 * It is the URL match rules without Yahoo redirection URL compatibility.
 */
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
        replaceWith: 'https://old.reddit.com/$1'
        //replaceWith: 'https://safereddit.com/$1'
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
        matchRegex: new RegExp(/^https?:\/\/((?:(?:[\w.-]+)?medium|towardsdatascience|betterprogramming|.*?plainenglish|.*?gitconnected|aninjusticemag|betterhumans|uxdesign|uxplanet)\.\w+\/(?=.*-)(?:[\w\/-]+|[\w@.]+\/[\w-]+))(?:\?source=.*)?/),
        replaceWith: 'https://freedium.cfd/https://$1'
    },
    {
        matchRegex: new RegExp(/^https?:\/\/(?:www\.|m\.)?youtube\.com\/(watch(?:\/?\?v=|\/)[\w-]{11})[\s\S]*/),
        replaceWith: 'https://piped.video/$1'
        // replaceWith: 'https://vid.puffyan.us/$1'
    },
    {
        matchRegex: new RegExp(/^https?:\/\/(?:www\.|m\.)?youtube\.com\/((?:@|playlist\?|channel\/|user\/|shorts\/).*)/),
        replaceWith: 'https://piped.video/$1'
        // replaceWith: 'https://vid.puffyan.us/$1'
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
        matchRegex: new RegExp(/^https?:\/\/(?:(?:.*)(?:arxiv\.org\/pdf|arxiv-export-lb\.library\.cornell\.edu\/(?:pdf|abs)))\/(\d{4}\.\d{4,5}(v\d)?)(?:.*)/),
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