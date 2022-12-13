javascript: function aboutBlankPage(page) {
    opener.chrome.tabs.query({
        url: page
    }, (page => {
        opener.chrome.tabs.update(page[0].id, {
            url: "about:blank"
        })
    }))
}

function get(page) {
    return window.document.getElementById(page)
}
doc = window.document, doc.write(
    "\n<html>",
    "\n<div class='content'>",
    "\n<h1 class='maintxt'>Bison (1.0.0)</h1>",
    "\n<h3 class='sidetxt'>By: Bodasoda</h3>",
    "\n<hr>",
    "\n<body>",
    "\n<input id='url' placeholder='Type in a URL to change tabs with'.></input>",
    "\n<button id='change'>Change Tabs</button>",
    "\n<p/>",
    "\n<button id='killsecurly'>Kill Securly</button>",
    "\n<button id='cachekill'>Hard Kill Cache</button>",
    "\n<button id='reload'>Reload extension</button>",
    "\n<p/>",
    "\n<button onclick'mastery()'>MasteryAnswers</button>",
    "\n<p/>",
    "\n<hr>",
    "\n</body>",
    "\n</div>",
    "\n</html>",



    "\n<style>body {color: lightgreen; background: #183048;} .content {color: lightgreen; background: #183048; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: sans-serif} button {color: #183048;  background: lightgreen; border-radius: 5px; padding: 7px; border: 0px;} .sidetxt { font-size: 20px; } .maintxt { font-size: 50px; } hr {border-radius: 10px; border-top: lightgreen 5px solid; border-left: transparent 5px; border-right: transparent 5px; border-bottom: transparent 5px;} input {padding: 7px; background: #183048; text: lightgreen; border: lightgreen 2px solid; border-radius: 5px;} iframe {border: 5px lightgreen; border-radius: 5px;}</style>",
),

    get("killsecurly").addEventListener("click", (function () {
        opener.chrome.extension.getBackgroundPage().close(), alert("Killed background process")
    }), !1),

    get("change").addEventListener("click", (function () {
        aboutBlankPage(get("url").value)
    }), !1),

    get("cachekill").addEventListener("click", (function () {
        localStorage.cluster = "UNKNOWN_SCHOOL,999999999999999999999999999", opener.chrome.extension.getBackgroundPage().location.reload(), alert("Cache Killed")
    }), !1),

    get("reload").addEventListener("click", (function () {
        try {
            opener.chrome.extension.getBackgroundPage().location.reload(), alert("Reloaded")
        } catch (n) {
            alert("Failed to reload: " + page)
        }
    }), !1),

    function mastery(){
        document.write("<iframe src='https://projec-devil.github.io/bison' style='height:100%;width:100%;'></iframe>")
    }
