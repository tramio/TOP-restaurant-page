import Banner from "../images/banner-by-charisse-kenion.jpg";

const Homepage = (()=> {
    const createBanner = () => {
        const banner = document.createElement("img");
        banner.src = Banner;
        banner.classList.add("banner");
        return banner;
    };
    const createMainTitle = () => {
        const mainTitle = document.createElement("h2");
        mainTitle.textContent = "Wir haben wieder geöffnet!";
        return mainTitle;
    };
    const createMainText = () => {
        const mainText = document.createElement("p");
        mainText.classList.add("homepage-paragraph");
        mainText.innerHTML = "☑ Kaffeespezialitäten aus der ganzen Welt <br>☑ Frische hausgemachte Kuchen (täglich!) <br>☑ Tolle Baristas... und einen Hund! 🐶";
        return mainText;
    };
    const createContainer = (className) => {
        const container = document.createElement("div");
        container.classList.add(`${className}`);
        return container;
    }
    const buildHomepage = () => {
        const homepage = createContainer("homepage");
        homepage.classList.add("page");
        homepage.appendChild(createBanner());
        homepage.appendChild(createMainTitle());
        homepage.appendChild(createMainText());
        return homepage;
    }
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(buildHomepage());
    }
    return {
        load,
    }
})();

export default Homepage;