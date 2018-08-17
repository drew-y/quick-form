import Vue, { VueConstructor } from "vue";
import { QuickField, QuickFieldTemplate } from "./definitions";

export function customQuickFormVue(templates: QuickFieldTemplate[]) {
    const components: { [type: string]: VueConstructor } = {};

    templates.forEach(templ => {
        components[templ.type] = Vue.extend({ template: templ.template })
    });

    return Vue.extend({
        props: ["fields"],
        template: "TODO",
        components,

        data(): {
            fields: QuickField[];
        } {
            return {
                fields: []
            };
        },
    });
}

export const quickFormVue = customQuickFormVue([]);
