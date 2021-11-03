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

function create(element) {
    return document.createElement(`${element}`);
}
function createFooter() {
    const footer = create("footer");
    footer.appendChild(createOpeningHoursDiv());
    footer.appendChild(createAddressDiv());
    footer.appendChild(createContactDiv());
    return footer;
}
function createOpeningHoursDiv() {
    const h2 = create("h2");
    h2.textContent = "Öffnungszeiten";
    const paragraph = create("p");
    paragraph.innerHTML = "Mo bis Fr 07:30 - 18:30 Uhr<br>Sa 09:00 - 18:30 Uhr";
    const div = create("div");
    div.appendChild(h2);
    div.appendChild(paragraph);
    return div;
}
function createAddressDiv() {
    const h2 = create("h2");
    h2.textContent = "Adresse";
    const paragraph = create("p");
    paragraph.innerHTML = "<em>Café Castelli e Comete</em><br>Guter-Kaffee Allee 136<br>20099 Hamburg";
    const div = create("div");
    div.appendChild(h2);
    div.appendChild(paragraph);
    return div;
}
function createContactDiv() {
    const h2 = create("h2");
    h2.textContent = "Kontakt";
    const paragraph = create("p");
    paragraph.textContent = "Telefon: +49 (xxx) xxxx-xxx";
    const paragraph2 = create("p");
    paragraph2.textContent = "E-Mail: hallo@castelliecomete.de";
    const div = create("div");
    div.appendChild(h2);
    div.appendChild(paragraph);
    div.appendChild(paragraph2);
    return div;
}

const canvas = (() => {
    const content = document.getElementById("content");
    const _loadHeader = () => content.appendChild(createHeader());
    const _loadFooter = () => content.appendChild(createFooter());
    const load = () => {
        _loadHeader();
        _loadFooter();
    }
    return {
        load,
    }
})();

export default canvas;