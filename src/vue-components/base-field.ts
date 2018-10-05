import Vue from "vue";
import { QuickField } from "../definitions";

/**
 * Test to see if the field is required and, if so, see if the value is filled.
 * If it is required and the value is not filled, will return an error message
 */
function doesntMeetRequire(field: QuickField, value?: any): string | undefined {
    if (field.required === false) return;
    if (value === undefined) return "Field is required";
}

function doesntMeetValidator(field: QuickField, value: any): Promise<string | undefined> {
    if (!(field.validator instanceof Function)) return Promise.resolve(undefined);
    const result = field.validator(value);
    if (result instanceof Promise) return result;
    return Promise.resolve(result);
}

// tslint:disable-next-line:variable-name
export const BaseField = Vue.extend({
    props: {
        value: { required: false },
        field: {
            type: Object as () => QuickField,
            required: true
        }
    },

    created() {
        this.$on("Input", () => {
            this.$set(this.field, "errorMessage", undefined);
            const msg = doesntMeetRequire(this.field, this.value);
            if (msg) return this.$set(this.field, "errorMessage", msg);

            doesntMeetValidator(this.field, this.value)
                .then(result => this.$set(this.field, "errorMessage", result))
                .catch(_ => undefined);
        });
    }
});
