// Get all the items in the publication list
let ol = document.getElementById("publication-list");
let pubs = ol.getElementsByTagName("li");
let pubs_map = new Map();

for (let i = 0; i < pubs.length; i++) {
    pubs[i].index = i + 1

    // map id -> pub-li
    if (pubs[i].id) {
        pubs_map.set(pubs[i].id, pubs[i]);
    }
}

scrollToElem = (elem) => {
    let elemPos = window.pageYOffset + elem.getBoundingClientRect().top;
    var headerOffset = window.innerHeight / 5;
    let offsetPos = elemPos - headerOffset;

    // Save current location in history before scrolling
    history.pushState({}, "", new URL(window.location));

    window.scrollTo({
      top: offsetPos,
      behavior: "smooth"
    });
}

highlight_classes = ["text-danger", "bg-info"]
add_highlight = (elem) => {
    elem.classList.add(...highlight_classes);
    elem.style.transition = "all 1s";
}

remove_highlight = (elem) => {
    elem.classList.remove(...highlight_classes);
}

let citations = document.getElementsByTagName("cite");
for (let citation of citations) {
    let cite_id = citation.innerText.trim();
    let pub = pubs_map.get(cite_id);
    citation.innerHTML = `<a href="#${cite_id}">${pub.index}</a>`;
    citation.onclick = (e) => {
        e.preventDefault();
        scrollToElem(pub);

        // Add and remove highlight
        add_highlight(pub);
        setTimeout(() => remove_highlight(pub), 1000);
    };
}
