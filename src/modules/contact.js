const Page = (() => {
    const _createTitle = () => {
        const title = document.createElement("h1");
        title.classList.add("page-title");
        return title;
    }
    const buildTitle = (string) => {
        const title = _createTitle();
        title.textContent = string;
        return title;
    }
    return {
        buildTitle,
    }
})();

const Form = (() => {
    const createForm = () => {
        return document.createElement("form");
    };
    const createLabel = (fieldName) => {
        const labelElement = document.createElement("label");
        labelElement.classList.add("label");
        labelElement.textContent = `${fieldName}:`;
        const labelKebab = lowerCaseKebab(fieldName);
        labelElement.for = `${labelKebab}-input`;
        return labelElement;
    };
    const lowerCaseKebab = (string) => {
        let myString = string;
        let myKebab = myString.replace(/\s+/g, '-').toLowerCase();
        return myKebab;
    };
    const createTextInput = (fieldName) => {
        const input = document.createElement("input");
        const labelKebab = lowerCaseKebab(fieldName);
        input.id = `${labelKebab}-input`;
        input.type = "text";
        return input;
    };
    const createTextField = (fieldName) => {
        const field = document.createElement("div");
        field.appendChild(createLabel(fieldName));
        field.appendChild(createTextInput(fieldName));
        return field;
    };
    const createMessageInput = (fieldName) => {
        const input = document.createElement("textarea");
        const labelKebab = lowerCaseKebab(fieldName);
        input.id = `${labelKebab}-input`;
        input.placeholder = "Erzähl uns ein Geheimnis! ✨";
        return input;
    };
    const createMessageField = (fieldName) => {
        const field = document.createElement("div");
        field.appendChild(createLabel(fieldName));
        field.appendChild(createMessageInput(fieldName));
        return field;
    };
    const createSubmitButton = () => {
        const button = document.createElement("input");
        button.classList.add("submit-button");
        button.type = "submit";
        button.value = "Formular abschicken";
        button.disabled = true;
        return button;
    }
    const buildForm = () => {
        const form = createForm();
        form.appendChild(createTextField("Name"));
        form.appendChild(createTextField("Email"));
        form.appendChild(createMessageField("Deine Nachricht"));
        form.appendChild(createSubmitButton());
        return form;
    };
    return {
        buildForm,
    }
})();

const Contact = (() => {
    const buildContact = () => {
        const contact = document.createElement("div");
        contact.classList.add("page", "contact");
        contact.appendChild(Page.buildTitle("Kontakt"));
        contact.appendChild(Form.buildForm());
        return contact;
    };
    const load = () => {
        const main = document.querySelector("main");
        main.appendChild(buildContact());
    };
    return {
        load,
    }
})();

export default Contact;