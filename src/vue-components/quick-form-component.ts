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
        }
    },
    template: require("views/quick-form.html"),
    components: fields,

    methods: {
        submit() {
            this.$emit("submit", JSON.parse(JSON.stringify(this.document)));
        }
    }
});
