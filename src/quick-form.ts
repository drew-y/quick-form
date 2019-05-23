import Vue, { VueConstructor } from "vue";
import { QuickField } from "./definitions";
import { VueToElement } from "./helpers";
import { QuickForm } from "./vue-components";

/**
 * Standalone QuickForm class. Allows QuickForm to be
 * used outside of Vue.
 */
export class QuickFormVanilla {
    readonly vue: Vue;
    readonly element: Element;

    constructor({ fields, quickFormComponent }: {
        fields: QuickField[],

        /** Use a Custom version of the quick form component */
        quickFormComponent?: VueConstructor;
    }) {
        // tslint:disable-next-line:variable-name
        const MainVue = Vue.extend({
            components: { "QuickForm": quickFormComponent || QuickForm },
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
