const Page = (() => {
    const _createTitle = () => {
        const title = document.createElement("h1");
        title.classList.add("page-title");
        return title;
    }
    const _createSubtitle = () => {
        const title = document.createElement("h2");
        title.classList.add("menu-title");
        return title;
    }
    const buildTitle = (string) => {
        const title = _createTitle();
        title.textContent = string;
        return title;
    }
    const buildSubtitle = (string) => {
        const title = _createSubtitle();
        title.textContent = string;
        return title;
    }
    return {
        buildTitle,
        buildSubtitle,
    }
})();

const Products = (() => {
    const products = [["Espresso", "1,90 €"], ["Espresso macchiato", "1,90 €"], ["Espresso doppio", "2,90 €"], ["Milchkaffee", "2,90 €"], ["Cappuccino", "3,20 €"], ["Latte macchiato", "3,60 €"], ["Flat white", "3,60 €"], ["Mokaccino", "3,20 €"], ["Heiße Schokolade 🦉", "3,20 €"], ["Chemex", "4,20 €"], ["Hario V60", "4,20 €"]];
    const getFromProducts = (position) => {
        let newArray = [];
        for (let i = 0; i < products.length; i++) {
            newArray.push(products[i][position]);
        };
        return newArray;
    };
    const createParagraph = (position) => {
        const names = getFromProducts(position);
        let currentName = "";
        let paragraphHTML = "";
        for (let i = 0; i < names.length; i++) {
            currentName = names[i];
            paragraphHTML += `${currentName}<br>`;
        };
        const myParagraph = document.createElement("p");
        myParagraph.innerHTML = paragraphHTML;
        return myParagraph;
    };
    const createNamesParagraph = () => {
        const paragraph = createParagraph(0);
        paragraph.classList.add("menu-paragraph-names");
        return paragraph;
    }
    const createPricesParagraph = () => {
        const paragraph = createParagraph(1);
        paragraph.classList.add("menu-paragraph-prices");
        return paragraph;
    }
    const createMenuSection = () => {
        const div = document.createElement("div");
        div.classList.add("menu-section");
        return div;
    }
    const createContentDiv = () => {
        const div = document.createElement("div");
        div.classList.add("content-div");
        div.appendChild(createNamesParagraph());
        div.appendChild(createPricesParagraph());
        return div;
    }
    const createTitleDiv = (subtitle) => {
        const div = document.createElement("div");
        div.appendChild(Page.buildSubtitle(subtitle));
        return div;
    }
    const buildDrinksDiv = () => {
        const div = createMenuSection();
        div.appendChild(createTitleDiv("Heiße Getränke"));
        div.appendChild(createContentDiv());
        const extraLine = document.createElement("p");
        extraLine.textContent = "Hafer-, Reis-, Haselnuss- oder Mandelmilch, sowie entkoffeinierte Alternativen stehen auch zur Verfügung. ☕";
        extraLine.style.fontStyle = "italic";
        div.appendChild(extraLine);
        return div;
    }
    return {
        buildDrinksDiv,
    }
})();

const Menu = (() => {
    const buildMenu = () => {
        const Menu = document.createElement("div");
        Menu.classList.add("page", "menu");
        Menu.appendChild(Page.buildTitle("Speisekarte"));
        Menu.appendChild(Products.buildDrinksDiv());
        return Menu;
    };
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(buildMenu());
    };
    return {
        load,
    };
})();

export default Menu;