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
            default: false
        },
        resettable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    template: require("views/quick-form.html"),
    components: fields,

    methods: {
        submit() {
            this.$emit("submit", JSON.parse(JSON.stringify(this.document)));
        },

        cancel() {
            this.$emit("cancel");
        }
    }
});
