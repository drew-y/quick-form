import Vue from "vue";

/** Attach a Vue Component to a new HTMLElement */
export function VueToElement(vue: Vue): HTMLElement {
    const el = document.createElement("div");
    vue.$mount(el);
    return vue.$el;
}
