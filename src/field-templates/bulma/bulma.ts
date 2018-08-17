import { QuickFieldTemplate } from "../../definitions";

const input: QuickFieldTemplate = {
    type: "Input", template: require("./input.html")
};

const textarea: QuickFieldTemplate = {
    type: "Textarea", template: require("./textarea.html")
};

const select: QuickFieldTemplate = {
    type: "Select", template: require("./select.html")
};

const checkbox: QuickFieldTemplate = {
    type: "Checkbox", template: require("./checkbox.html")
};

const radio: QuickFieldTemplate = {
    type: "Radio", template: require("./radio.html")
};

const submit: QuickFieldTemplate = {
    type: "Submit", template: require("./submit.html")
};

export const bulmaTemplates = [input, textarea, select, checkbox, radio, submit];
