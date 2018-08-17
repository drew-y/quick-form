import Vue from "vue";
import { customQuickFormVue } from "./quick-form-vue";
import { QuickFieldTemplate, QuickField } from "./definitions";
import { bulmaTemplates } from "./templates";

export class QuickForm {
    private readonly vue: Vue;
    readonly element = document.createElement("div");

    constructor(fields: QuickField[], templates?: QuickFieldTemplate[]) {
        const formVue = customQuickFormVue(templates ? templates : bulmaTemplates);

        // tslint:disable-next-line:variable-name
        const MainVue = Vue.extend({
            components: { "form-vue": formVue },
            template: `<form-vue :fields="fields"></form-vue>`,
            data() { return { fields }; }
        });

        this.vue = new MainVue();
        this.vue.$mount(this.element);
    }

    on(event: "Submit", cb: (formData: object) => void): this;
    on(event: string, cb: (...args: any[]) => void): this {
        this.vue.$on(event, cb);
        return this;
    }
}
