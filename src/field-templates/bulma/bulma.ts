import { QuickFieldTemplate } from "../../definitions";

const input: QuickFieldTemplate = {
    type: "Input", template: require("views/field-templates/bulma/input.html")
};

const textarea: QuickFieldTemplate = {
    type: "Textarea", template: require("views/field-templates/bulma/textarea.html")
};

const select: QuickFieldTemplate = {
    type: "Select", template: require("views/field-templates/bulma/select.html")
};

const checkbox: QuickFieldTemplate = {
    type: "Checkbox", template: require("views/field-templates/bulma/checkbox.html")
};

const radio: QuickFieldTemplate = {
    type: "Radio", template: require("views/field-templates/bulma/radio.html")
};

const submit: QuickFieldTemplate = {
    type: "Submit", template: require("views/field-templates/bulma/submit.html")
};

export const bulmaTemplates = [input, textarea, select, checkbox, radio, submit];
