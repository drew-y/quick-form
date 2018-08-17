import Vue, { VueConstructor } from "vue";
import { QuickField, QuickFieldTemplate } from "../definitions";
import { DefaultFieldTemplateComponent } from "./default-field-template-component";
import { bulmaTemplates } from "../field-templates";

function generateFieldComponents(templates: QuickFieldTemplate[]) {
    const components: { [type: string]: VueConstructor } = {};

    templates.forEach(templ => {
        if (templ.component) {
            components[templ.type] = templ.component.extend({ template: templ.template });
        }

        components[templ.type] = DefaultFieldTemplateComponent.extend({ template: templ.template });
    });

    return components;
}

export function customQuickFormComponent(templates: QuickFieldTemplate[]) {
    return Vue.extend({
        props: {
            fields: {
                type: Array as () => QuickField[],
                required: true
            }
        },
        template: require("./quick-form.html"),
        components: generateFieldComponents(templates),

        data(): {
            formData: object
        } {
            return { formData: {} };
        },

        methods: {
            submit() {
                this.$emit("submit", { ...this.formData });
            }
        }
    });
}

// tslint:disable-next-line:variable-name
export const BulmaQuickFormComponent = customQuickFormComponent(bulmaTemplates);
