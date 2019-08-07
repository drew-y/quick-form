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

    data() {
        return { errorMessage: undefined as string | undefined };
    },

    watch: {
        value: {
            immediate: true,
            handler() {
                if (this.field.default !== undefined && this.value === undefined) {
                    this.$emit("input", this.field.default);
                }
            }
        }
    },

    created() {
        this.$on("input", () => {
            this.errorMessage = undefined;
            const msg = doesntMeetRequire(this.field, this.value);
            if (msg) {
                this.errorMessage = msg;
                return;
            }

            doesntMeetValidator(this.field, this.value)
                .then(result => this.errorMessage = result)
                .catch(_ => undefined);
        });
    }
});
