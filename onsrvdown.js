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

console.log(
    "osrd: adjusting text in mountpoint #onsrvdown-mount so we dont get confused"
);
document.getElementById("onsrvdown-mount").innerHTML =
    "<!-- osrd.mountpoint loaded -->";

if (doRun) {
    console.log("osrd: we are ready to load css");
    console.log("osrd: load osd.css");
    let s = document.createElement("link");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", "osd.css");
    document.body.appendChild(s);

    console.log("osrd: injected osd.css");
    console.log("osrd: load osd.html into mountpoint #onsrvdown-mount");
    fetch("osd.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            console.log("osrd: injecting osd.html...");
            // FIXME: this is very dangerous
            document.getElementById("onsrvdown-mount").innerHTML = html;
            document.getElementById("error-message").innerText = em;
            document.getElementById("verr").onclick = () => {
                document
                    .getElementById("error-message")
                    .classList.toggle("hidden");
            };
        })
        .catch(function (err) {
            // There was an error
            console.err("Something went wrong.", err);
        });
}
