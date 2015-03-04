function openMyFav() {
    var urls = [
        "http://coffee-script.org",
        "http://expressjs.jser.us",
        "http://www.w3cplus.com/sassguide/syntax.html",
        "http://jade-lang.com/",
        "http://www.baidu.com"
    ];
    urls.forEach(function(item) {
        chrome.tabs.create({"url": item});
    });
    clean();
}

// clean all new blank tags
function clean() {
    var tag = "打开新的标签页";
    chrome.tabs.getAllInWindow(function(tabs) {
        tabs.forEach(function(tab) {
            if (tab.title == tag) {
                chrome.tabs.remove(tab.id);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttonClean').addEventListener('click', clean);
    document.getElementById('buttonOpen').addEventListener('click', openMyFav);
});
