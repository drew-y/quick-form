import Vue, { VueConstructor } from "vue";
import { QuickField, QuickFieldTemplate } from "./definitions";
import { DefaultTemplateComponent } from "./default-template-vue";

export function customQuickFormVue(templates: QuickFieldTemplate[]) {
    const components: { [type: string]: VueConstructor } = {};

    templates.forEach(templ => {
        if (templ.component) {
            components[templ.type] = templ.component.extend({ template: templ.template });
        }

        components[templ.type] = DefaultTemplateComponent.extend({ template: templ.template });
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

// tslint:disable-next-line:variable-name
export const BulmaQuickFormVue = customQuickFormVue([]);
