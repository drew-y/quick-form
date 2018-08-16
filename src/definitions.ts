
export interface QuickFieldTemplate {
    type: string;
    template: string;
}

export interface QuickField {
    type: string;

    /**
     * When a user sumbits a quick form, the instance will emit a submit event
     * that returns an object with all the values the user supplied. model represents
     * the field of that object the QuickField value will be attached to.
     *
     * Internally, this value is what v-model gets set to on the input. For
     * more information visit: https://vuejs.org/v2/api/#v-model
     */
    model: string;

    /** The field is required, defaults to true */
    required?: boolean;

    /** A label for the field to present to the user */
    label?: string;

    /** Additional data, passed to the corresponding QuickFieldTemplate of this type */
    [extensions: string]: any;
}

export interface QuickInputField extends QuickField {
    type: "Input";
    inputType: "text" | "number" | "password" | "email" | "tel" | "url" | "color";
    regexp?: RegExp;
}

export interface QuickTextareaField extends QuickField {
    type: "Textarea";
}

export interface QuickSelectField extends QuickField {
    type: "Select";
    options: { label: string; value: any }[];
}

export interface QuickCheckboxField extends QuickField {
    type: "Checkbox";
}

export interface QuickRadioField extends QuickField {
    type: "Radio";
    options: { label: string; value: any }[];
}
