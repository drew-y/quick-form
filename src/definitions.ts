import { VueConstructor } from "vue";

export interface QuickFieldTemplate {
    /** The corresponding QuickField type */
    type: string;

    /** The template supplied to the field's component */
    template: string;

    /**
     * Optional custom component. Note that QuickForm will override the template value with
     * this.template
     */
    component?: VueConstructor;
}

export interface QuickField<T = any> {
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

    /**
     * A custom validator for the field. Can be async.
     *
     * If the function returns true, this.isInvalid will be set to true.
     * If the function returns a string, this.isInvalid will be set to true
     * and the errorMessage will be set to said string.
     *
     * Note: Will mot work if field has been passed through JSON.stringify.
     *
     * @param val - The value the user has entered for the field in the form
     */
    validator?(val: T): string | undefined | Promise<string | undefined>;

    /**
     * An error message to show the user.
     * This value is automatically set by the validator function.
     * It's best to not set this to anything.
     */
    errorMessage?: string;

    /** Additional data, passed to the corresponding QuickFieldTemplate of this type */
    [extensions: string]: any;
}

export interface QuickInputField<T = any> extends QuickField<T> {
    type: "Input";
    inputType: "text" | "number" | "password" | "email" | "tel" | "url" | "color";
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

export interface QuickSubmitField extends QuickField {
    type: "Submit";
}
