var url = window.location.href;
if ((url.startsWith("https://www.google") || url.startsWith("https://www.bing")) && url.indexOf("q=d+") > 0) {
    var searchString = getSearchStringDetails("q");
    window.location = "http://" + window.location.hostname + "/search?q=define+" + searchString;
} else if (url.startsWith("https://search.yahoo") && url.indexOf("p=d+") > 0) {
    var searchString = getSearchStringDetails("p")
    window.location = "http://" + window.location.hostname + "/search?p=define+" + searchString;
}

function getSearchStringDetails(searchQueryParam) {
    let searchParams = (new URL(document.location)).searchParams;
    var searchFullString = searchParams.get(searchQueryParam);
    return searchFullString.substr(searchFullString.indexOf(" ") + 1);
}