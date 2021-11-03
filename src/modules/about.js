const About = (() => {
    const _createTitle = () => {
        const h1 = document.createElement("h1");
        h1.textContent = "Über uns";
        return h1;
    };
    const _createText = () => {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel praesentium inventore, dolorem ducimus facere error exercitationem! A explicabo tempore saepe iure, excepturi cupiditate quisquam atque reiciendis, sunt illo consequuntur impedit.";
        return paragraph;
    }
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(_createTitle());
        main.appendChild(_createText());
    };
    return {
        load,
    }
})();

export default About;