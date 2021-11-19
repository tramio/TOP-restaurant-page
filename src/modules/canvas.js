import Homepage from "./homepage";
import About from "./about";
import Shop from "./shop";
import Contact from "./contact";
import Menu from "./menu";

const Header = (() => {
    const createTitle = () => {
        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "Café Castelli e Comete";
        return title;
    }
    const createNavbar = () => {
        const navbar = document.createElement("nav");
        navbar.classList.add("navbar");
        navbar.appendChild(createNavbarTabs());
        return navbar;
    }
    const createNavbarTabs = () => {
        const ul = document.createElement("ul");
        const tabs = [["Startseite", Homepage.load], ["Speisekarte", Menu.load], ["Shop", Shop.load], ["Über uns", About.load], ["Blog"], ["Kontakt", Contact.load]];
        for (let i = 0; i < tabs.length; i++) {
            const li = document.createElement("li");
            li.textContent = tabs[i][0];
            li.addEventListener("click", () => {
                const main = document.querySelector("main");
                main.textContent = "";
                tabs[i][1]();
            })
            ul.appendChild(li);
        }
        return ul;
    }
    const load = () => {
        const header = document.createElement("header");
        header.appendChild(createTitle());
        header.appendChild(createNavbar());
        return header;
    }
    return {
        load,
    }
})();
    
const Main = (() => {
    const load = () => {
        const main = document.createElement("main");
        return main;
    }
    return {
        load,
    }
})();

const Footer = (() => {
    const footer = document.createElement("footer");
    const Div = (() => {
        const createDiv = (title) => {
            const div = document.createElement("div");
            return div;
        }
        const createH2 = (title) => {
            const h2 = document.createElement("h2");
            h2.textContent = title;
            return h2;
        }
        const createParagraph = (innerHTML) => {
            const paragraph = document.createElement("p");
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
    const _loadHeader = () => content.appendChild(Header.load());
    const _loadMain = () => content.appendChild(Main.load());
    const _loadFooter = () => content.appendChild(Footer.load());
    const load = () => {
        _loadHeader();
        _loadMain();
        _loadFooter();
        Homepage.load();
    }
    return {
        load,
    }
})();

export default Canvas;