(function() {
    parser = new DOMParser();

    //const readability = document.createElement('script');
    //readability.setAttribute("type", "module");
    //readability.setAttribute("src", browser.runtime.getURL("Readability.js"));
    //const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    //head.insertBefore(readability, head.lastChild);

    //console.log(head);
    //var article = new Readability(document).parse();
    const src = browser.runtime.getURL("Readability.js");
    const readability = import(src);
    console.log("run");
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function zebrafy(message) {
        console.log(message.doc.content);
        //document.body.innerHTML = null;
        //doc = parser.parseFromString(message.doc.content, "text/html").body;
        //console.log(doc);
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command == "zebrafy") {
            zebrafy(message);
        }
    })

})();
