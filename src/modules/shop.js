import Brewer from "../images/brewer.jpg"
import Grinder from "../images/grinder.jpg"
import Scale from "../images/scale.jpg"

// Prêt à push, mais d'abord remplacer les images par les miennes

const Shop = (() => {
    const createArticleDiv = () => {
        const div = document.createElement("div");
        div.classList.add("article-div")
        return div;
    }
    const createArticleImage = (file) => {
        const image = document.createElement("img");
        image.src = file;
        image.classList.add("shop-picture");
        return image;
    }
    const createArticleName = (articleName) => {
        const title = document.createElement("h1");
        title.classList.add("article-name");
        title.textContent = articleName;
        return title;
    }
    const createArticlePrice = (articlePrice) => {
        const price = document.createElement("p");
        price.textContent = articlePrice;
        return price;
    }
    const buildBrewer = () => {
        const div = createArticleDiv();
        div.appendChild(createArticleImage(Brewer));
        div.appendChild(createArticleName("Brewer"));
        div.appendChild(createArticlePrice("59,00 €"));
        return div;
    }
    const buildArticles = () => {
        const articles = [[Brewer, "Brewer", "59,00 €"], [Grinder, "Grinder", "229,00 €"], [Scale, "Scale", "39,00 €"]];
        let articlesDiv = document.createElement("div");
        articlesDiv.classList.add("articles");
        for (let i = 0; i < articles.length; i++) {
            const div = createArticleDiv();
            div.appendChild(createArticleImage(articles[i][0]));
            div.appendChild(createArticleName(articles[i][1]));
            div.appendChild(createArticlePrice(articles[i][2]));
            articlesDiv.appendChild(div);
        }
        return articlesDiv;
    }
    const buildShop = () => {
        const shop = document.createElement("div");
        shop.classList.add("page", "shop");
        shop.appendChild(buildArticles());
        return shop;
    }
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(buildShop());
    }
    return {
        load,
    }
})();

export default Shop;