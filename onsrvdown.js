// in case of the server being down
console.log("osrd: onsrvdown.js is LOADED!");
// the connection is possibly slow. make sure that we already haven't made the
// assumption that we have failed.
let doRun = true;
if (!document.getElementById("onsrvdown-failed").classList.contains("hidden")) {
    console.error(
        "The inevitable happened. We thought we didn't load, but we really did... what?"
    );
    doRun = false;
}

if (doRun) {
    console.log("osrd: we are ready to load css");
    console.log("osrd: load osd.css");
    let s = document.createElement("link");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", "osd.css");
    document.body.appendChild(s);
}
