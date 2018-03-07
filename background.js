chrome.webNavigation.onCommitted.addListener(function(details) {
    chrome.tabs.executeScript(null, {file:"redirect.js"})
});