function createHeader() {
    const header = document.createElement("header");
    header.appendChild(createTitle());
    header.appendChild(createNavbar());
    return header;
}
function createTitle() {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Café Castelli e Comete";
    return title;
}
function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.appendChild(createNavbarTabs());
    return navbar;
}
function createNavbarTabs() {
    const ul = document.createElement("ul");
    const tabs = ["Startseite", "Speisekarte", "Shop", "Über uns", "Blog", "Kontakt"];
    tabs.forEach(tab => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = tab;
        link.setAttribute("href", "#");
        li.appendChild(link);
        ul.appendChild(li);
    });
    return ul;
}
function loadHeader() {
    const content = document.getElementById("content");
    const header = createHeader();
    content.appendChild(header);
}

export default loadHeader;