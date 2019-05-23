import Vue from "vue";
import { QuickField } from "../definitions";
import { fields } from "./fields";

export const QuickForm = Vue.extend({
    name: "QuickForm",
    props: {
        fields: {
            type: Array as () => QuickField[],
            required: true
        },
        document: {
            type: Object,
            required: false,
            default: () => ({})
        },
        cancellable: {
            type: Boolean,
            required: false,
            default: () => false
        },
        resettable: {
            type: Boolean,
            required: false,
            default: () => true
        }
    },
    template: require("views/quick-form.html"),
    components: fields,

    methods: {
        shouldShowField(field: QuickField) {
            if (!field.showIf) return true;
            const fieldVal = this.$props.document[field.showIf.field];
            return fieldVal === field.showIf.is;
        },

        submit() {
            this.$emit("submit", JSON.parse(JSON.stringify(this.$props.document)));
        }
    }
});
