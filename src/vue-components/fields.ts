import { BaseField } from "./base-field";

export const Input = BaseField.extend({
    name: "Input", template: require("views/input.html")
});

export const Textarea = BaseField.extend({
    name: "Textarea", template: require("views/textarea.html")
});

export const Select = BaseField.extend({
    name: "Select", template: require("views/select.html")
});

export const Checkbox = BaseField.extend({
    name: "Checkbox", template: require("views/checkbox.html")
});

export const Radio = BaseField.extend({
    name: "Radio", template: require("views/radio.html")
});

export const Submit = BaseField.extend({
    name: "Submit", template: require("views/submit.html")
});

export const fields = { Input, Textarea, Select, Checkbox, Radio, Submit };
