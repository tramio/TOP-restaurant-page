import myTeamPicture from "../images/team-by-pixdeluxe.jpg";
import myBaristaPicture from "../images/barista-by-bradley-pisney.jpg";

const About = (() => {
    const _createPicture = (className) => {
        const picture = document.createElement("img");
        picture.classList.add("about-picture", `${className}`);
        return picture;
    }
    const _createTeamPicture = () => {
        const teamPicture = _createPicture("team-picture");
        teamPicture.src = myTeamPicture;
        return teamPicture;
    }
    const _createBaristaPicture = () => {
        const baristaPicture = _createPicture("barista-picture");
        baristaPicture.src = myBaristaPicture;
        return baristaPicture;
    }
    const _createContainer = (className) => {
        const container = document.createElement("div");
        container.classList.add(`${className}`);
        return container;
    }
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
    const _buildBaristaDiv = () => {
        const div = _createContainer("about-barista");
        div.appendChild(_createBaristaPictureDiv());
        div.appendChild(_createBaristaTextDiv());
        return div;
    }
    const _createBaristaPictureDiv = () => {
        const div = _createContainer("about-barista-picture");
        div.appendChild(_createBaristaPicture());
        return div;
    }
    const _createBaristaTextDiv = () => {
        const div = _createContainer("about-barista-text");
        div.appendChild(_createTitle());
        div.appendChild(_createText());
        return div;
    }    
    const _buildTeamDiv = () => {
        const div = _createContainer("about-team")
        div.appendChild(_createTeamPicture());
        return div;
    }
    const _buildAbout = () => {
        const about = _createContainer("about");
        about.classList.add("page");
        about.appendChild(_buildBaristaDiv());
        about.appendChild(_buildTeamDiv());
        return about;
    };
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(_buildAbout());
    }
    return {
        load,
    }
})();

export default About;