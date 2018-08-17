import Vue from "vue";
import { customQuickFormVue } from "./quick-form-vue";
import { QuickFieldTemplate, QuickField } from "./definitions";
import { bulmaTemplates } from "./templates";
import { VueToElement } from "./helpers";

/**
 * Standalone QuickForm class. Allows QuickForm to be
 * used outside of Vue.
 */
export class QuickForm {
    private readonly vue: Vue;
    readonly element: HTMLElement;

    constructor(fields: QuickField[], templates?: QuickFieldTemplate[]) {
        const formVue = customQuickFormVue(templates ? templates : bulmaTemplates);

        // tslint:disable-next-line:variable-name
        const MainVue = Vue.extend({
            components: { "form-vue": formVue },
            template: `<form-vue :fields="fields"></form-vue>`,
            data() { return { fields }; }
        });
        this.vue = new MainVue();
        this.element = VueToElement(this.vue);
    }

    on(event: "Submit", cb: (formData: object) => void): this;
    on(event: string, cb: (...args: any[]) => void): this {
        this.vue.$on(event, cb);
        return this;
    }
}
