function listenForClicks() {
    document.addEventListener("click", (e) => {

        function zebrafy(tabs) {
            //var article = new Readability(document).parse();
            //doc = ["34", 343, 342];
            browser.tabs.sendMessage(tabs[0].id, {
                command: "zebrafy",
                doc: "lol"
            });
        }

        if (e.target.classList.contains("button")) {
            browser.tabs.query({active: true, currentWindow: true})
                .then(zebrafy)
                .catch(() => console.error(error));
        }
    });
}

browser.tabs.executeScript({file: "/content_scripts/zebrafy.js"})
    .then(listenForClicks)
    .catch(() => console.log("lol"));
