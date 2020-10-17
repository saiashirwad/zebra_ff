(function() {
    console.log("run");
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function zebrafy(message) {
        document.body.innerHTML = null;
        console.log(message);
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command == "zebrafy") {
            zebrafy(message);
        }
    })

})();
