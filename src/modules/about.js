import myTeamPicture from "../images/team-by-pixdeluxe.jpg";
import myBaristaPicture from "../images/barista-by-bradley-pisney.jpg";

const About = (() => {
    const createPicture = (className) => {
        const picture = document.createElement("img");
        picture.classList.add("about-picture", `${className}`);
        return picture;
    }
    const createContainer = (className) => {
        const container = document.createElement("div");
        container.classList.add(`${className}`);
        return container;
    }
    const createTitle = (title) => {
        const h1 = document.createElement("h1");
        h1.textContent = title;
        return h1;
    };
    const _buildAbout = () => {
        const about = createContainer("about");
        about.classList.add("page");
        about.appendChild(BaristaSection.build());
        about.appendChild(TeamSection.build());
        return about;
    };
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(_buildAbout());
    }
    return {
        createPicture,
        createContainer,
        createTitle,
        load,
    }
})();

const BaristaSection = (() => {
    const createPictureDiv = () => {
        return About.createContainer("about-barista-picture");
    }
    const createPicture = () => {
        const picture = About.createPicture("barista-picture");
        picture.src = myBaristaPicture;
        return picture;
    }
    const buildPictureDiv = () => {
        const div = createPictureDiv();
        div.appendChild(createPicture());
        return div;
    }
    const createTextDiv = () => {
        return About.createContainer("about-barista-text");
    }
    const createTextTitle = () => {
        return About.createTitle("Wir sind Castelli e Comete");
    }
    const createTextContent = () => {
        const text = document.createElement("p");
        text.textContent = "Lorem ipsum dolor sit amet. Quo quod internos aut magnam neque est fuga architecto ut galisum vero vel deleniti quaerat. Sed nesciunt laudantium in illo expedita sed amet nobis id sint nemo aut maiores consequatur. Aut molestiae nihil vel nihil labore eum molestias dolorem ea autem nostrum.";
        return text;
    }
    const buildTextDiv = () => {
        const div = createTextDiv();
        div.appendChild(createTextTitle());
        div.appendChild(createTextContent());
        return div;
    }
    const build = () => {
        const div = About.createContainer("about-barista");
        div.appendChild(buildPictureDiv());
        div.appendChild(buildTextDiv());
        return div;
    }
    return {
        build,
    }
})();

const TeamSection = (() => {
    const createPictureDiv = () => {
        return About.createContainer("about-team-picture");
    }
    const createPicture = () => {
        const picture = About.createPicture("team-picture");
        picture.src = myTeamPicture;
        return picture;
    }
    const buildPictureDiv = () => {
        const div = createPictureDiv();
        div.appendChild(createPicture());
        return div;
    }
    const createTextDiv = () => {
        return About.createContainer("about-team-text");
    }
    const createTextTitle = () => {
        return About.createTitle("Unser Engagement");
    }
    const createTextContent = () => {
        const text = document.createElement("p");
        text.textContent = "Id voluptatem voluptatem vel laborum perspiciatis fuga corrupti eum quaerat corrupti et aperiam laudantium. Non nemo incidunt ex molestiae architecto aut modi quae. Ea nesciunt reiciendis ex porro amet cum nemo repudiandae rem asperiores exercitationem est magni aliquid.";
        return text;
    }
    const buildTextDiv = () => {
        const div = createTextDiv();
        div.appendChild(createTextTitle());
        div.appendChild(createTextContent());
        return div;
    }
    const build = () => {
        const div = About.createContainer("about-team");
        div.appendChild(buildPictureDiv());
        div.appendChild(buildTextDiv());
        return div;
    }
    return {
        build,
    }
})();

export default About;