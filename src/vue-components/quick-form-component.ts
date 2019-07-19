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
    data() {
        return { localDoc: JSON.parse(JSON.stringify(this.document)) };
    },

    watch: {
        document: {
            immediate: true,
            handler(v) {
                this.localDoc = JSON.parse(JSON.stringify(v));
            }
        }
    },

    methods: {
        shouldShowField(field: QuickField) {
            if (!field.showIf) return true;
            const fieldVal = this.localDoc[field.showIf.field];
            return fieldVal === field.showIf.is;
        },

        submit() {
            this.$emit("submit", this.localDoc);
        },

        handleSubFormInput(model: string, val: any) {
            this.localDoc[model] = val;
            this.$emit("input", this.localDoc);
        }
    }
});
