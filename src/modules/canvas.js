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

function createElement(element) {
    return document.createElement(`${element}`);
}
const Footer = (() => {
    const footer = createElement("footer");
    const Div = (() => {
        const createDiv = (title) => {
            const div = createElement("div");
            div.setAttribute("id", title);
            return div;
        }
        const createH2 = (title) => {
            const h2 = createElement("h2");
            h2.textContent = title;
            return h2;
        }
        const createParagraph = (innerHTML) => {
            const paragraph = createElement("p");
            paragraph.innerHTML = innerHTML;
            return paragraph;
        }
        const load = (title, innerHTML) => {
            const div = createDiv();
            div.appendChild(createH2(title));
            div.appendChild(createParagraph(innerHTML));
            return div;
        }
        return {
            load,
        };
    })();
    const _loadDivs = () => {
        const divs = [["Öffnungszeiten", "Mo bis Fr 07:30 - 18:30 Uhr<br>Sa 09:00 - 18:30 Uhr"],["Adresse", "<em>Café Castelli e Comete</em><br>Guter-Kaffee Allee 136<br>20099 Hamburg"], ["Kontakt", "Telefon: +49 (xxx) xxxx-xxx<br>E-Mail: hallo@castelliecomete.de"]]
        for (let i = 0; i < divs.length; i++) {
            footer.appendChild(Div.load(divs[i][0], divs[i][1]));
        }
    }
    const load = () => {
        _loadDivs();
        return footer;
    }
    return {
        load,
    }
})();

const Canvas = (() => {
    const content = document.getElementById("content");
    const _loadHeader = () => content.appendChild(createHeader());
    const _loadFooter = () => content.appendChild(Footer.load());
    const load = () => {
        _loadHeader();
        _loadFooter();
    }
    return {
        load,
    }
})();

export default Canvas;