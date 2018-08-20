import Vue from "vue";
import { customQuickFormComponent } from "./vue-components/quick-form-component";
import { QuickFieldTemplate, QuickField } from "./definitions";
import { bulmaTemplates } from "./field-templates";
import { VueToElement } from "./helpers";

/**
 * Standalone QuickForm class. Allows QuickForm to be
 * used outside of Vue.
 */
export class QuickForm {
    readonly vue: Vue;
    readonly element: HTMLElement;

    constructor(fields: QuickField[], templates?: QuickFieldTemplate[]) {
        const formVue = customQuickFormComponent(templates ? templates : bulmaTemplates);

        // tslint:disable-next-line:variable-name
        const MainVue = Vue.extend({
            components: { "QuickForm": formVue },
            template: `<QuickForm :fields="fields" @submit="$emit('submit', $event)"></QuickForm>`,
            data() { return { fields }; }
        });
        this.vue = new MainVue();
        this.element = VueToElement(this.vue);
    }

    on(event: "submit", cb: (formData: object) => void): this;
    on(event: string, cb: (...args: any[]) => void): this {
        this.vue.$on(event, cb);
        return this;
    }
}
