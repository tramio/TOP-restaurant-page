const Homepage = (()=> {
    const createBanner = () => {
        const banner = document.createElement("img");
        banner.src = "../images/banner-by-charisse-kenion.jpg";
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
        mainText.innerHTML = "☑ Kaffeespezialitäten aus der ganzen Welt <br>☑ Frische hausgemachte Kuchen (täglich!) <br>☑ Tolle Baristas... und einen Hund! 🐶";
        return mainText;
    };
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(createBanner());
        main.appendChild(createMainTitle());
        main.appendChild(createMainText());
    }
    return {
        load,
    }
})();

export default Homepage;