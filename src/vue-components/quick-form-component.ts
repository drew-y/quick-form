import Vue from "vue";
import { QuickField } from "../definitions";
import { fields } from "./fields";

export const BaseQuickForm = Vue.extend({
    name: "QuickForm",
    props: {
        fields: {
            type: Array as () => QuickField[],
            required: true
        }
    },
    template: require("views/quick-form.html"),

    data(): {
        formData: object
    } {
        return { formData: {} };
    },

    methods: {
        submit() {
            this.$emit("submit", { ...this.formData });
        }
    }
});

export const BulmaQuickForm = BaseQuickForm.extend({ components: fields });
