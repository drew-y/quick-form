import { QuickFieldTemplate } from "../../definitions";

const input: QuickFieldTemplate = {
    type: "Input", template: require("views/field-templates/input.html")
};

const textarea: QuickFieldTemplate = {
    type: "Textarea", template: require("views/field-templates/textarea.html")
};

const select: QuickFieldTemplate = {
    type: "Select", template: require("views/field-templates/select.html")
};

const checkbox: QuickFieldTemplate = {
    type: "Checkbox", template: require("views/field-templates/checkbox.html")
};

const radio: QuickFieldTemplate = {
    type: "Radio", template: require("views/field-templates/radio.html")
};

const submit: QuickFieldTemplate = {
    type: "Submit", template: require("views/field-templates/submit.html")
};

export const bulmaTemplates = [input, textarea, select, checkbox, radio, submit];
