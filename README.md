# Quick Form

Quick HTML forms.

**Features:**

- Easy to use API
- Dynamic form generation
- Supports bulma
- Can be used standalone or as a VueComponent

## Installation

**Pre-requisites:**

- Bulma (If using standard quick form fields)
- Vue 2
- A module bundler (Webpack, ParcelJS, etc)

`npm i @vb/quick-form`

## Usage Examples

### As a Vue component

```typescript
import Vue from "vue";
import { QuickForm } from "quick-form";

const Form = Vue.extend({
    components: { QuickForm },
    template: `
        <QuickForm
            :fields="fields
            @submit="onSubmit($event)"></QuickForm>
    `,

    data() {
        return {
            fields: [
                { type: "Input", model: "test1", label: "Field 1", inputType: "text" },
                { type: "Input", model: "test2", label: "Field 2", inputType: "text" },
                { type: "Input", model: "test4", label: "Field 4", inputType: "number" },
                { type: "Submit" }
            ],
        }
    },

    methods: {
        onSubmit(document: object) {
            api.post(document)
        }
    }
})
```

### Standalone (Vanilla)

```typescript
import Vue from "vue";
import { QuickFormVanilla } from "quick-form";

const form = new QuickFormVanilla({
    fields: [
        { type: "Input", model: "test1", label: "Field 1", inputType: "text" },
        { type: "Input", model: "test2", label: "Field 2", inputType: "text" },
        { type: "Input", model: "test4", label: "Field 4", inputType: "number" },
        { type: "Submit" }
    ]
});

const main = document.getElementById("main")!;
main.appendChild(form);
```

## Vue Component

```html
<QuickForm :fields="fields"><QuickForm>
```

## Properties

- `fields` (Required) An array of QuickField objects representing the form (required). QuickFields are documented later.
- `document` (Optional) The object the form data is saved to
- `cancellable` (Optional) Determines whether or not to show the cancel button
- `resettable` (Optional) Determins whether or not to show the reset button

## Events

- `submit` Fired when the form is submitted, passes document as the first argument to the callback
- `input` Fired when the form data is changed, passes document as the first argument to the callback

## Vanilla Usage

QuickFormVanilla has the following interface:

```typescript
class QuickFormVanilla {
    readonly vue: Vue;
    readonly element: HTMLElement;

    constructor({ fields, quickFormComponent }: {
        fields: QuickField[],

        /** Use a Custom version of the quick form component */
        quickFormComponent?: VueConstructor;
    });

    on(event: "submit", cb: (formData: object) => void): this;
    on(event: string, cb: (...args: any[]) => void): this;
}
```

## Fields

The following interfaces represent fields that can be passed to QuickForm

```typescript
export interface QuickField<T = any> {
    /** The type of field. Equivelent to the name of the field component. */
    type: string;

    /**
     * When a user sumbits a quick form, the instance will emit a submit event
     * that returns an object with all the values the user supplied. model represents
     * the field of that object the QuickField value will be attached to.
     *
     * Internally, this value is what v-model gets set to on the input. For
     * more information visit: https://vuejs.org/v2/api/#v-model
     */
    model?: string;

    /** The field is required, defaults to true */
    required?: boolean;

    /** A label for the field to present to the user */
    label?: string;

    /**
     * A custom validator for the field. Can be async.
     *
     * If the function returns true, this.isInvalid will be set to true.
     * If the function returns a string, this.isInvalid will be set to true
     * and the errorMessage will be set to said string.
     *
     * Note: Will mot work if field has been passed through JSON.stringify.
     *
     * @param val - The value the user has entered for the field in the form
     */
    validator?(val: T): string | undefined | Promise<string | undefined>;

    /**
     * An error message to show the user.
     * This value is automatically set by the validator function.
     * It's best to not set this to anything.
     */
    errorMessage?: string;

    /** Additional data, passed to the corresponding QuickFieldTemplate of this type */
    [extensions: string]: any;
}

export interface QuickInputField<T = any> extends QuickField<T> {
    type: "Input";
    inputType: "text" | "number" | "password" | "email" | "tel" | "url" | "color";
}

export interface QuickTextareaField<T = any> extends QuickField<T> {
    type: "Textarea";
}

export interface QuickSelectField<T = any> extends QuickField<T> {
    type: "Select";
    options: { label: string; value: any }[];
}

export interface QuickCheckboxField<T = any> extends QuickField<T> {
    type: "Checkbox";
}

export interface QuickRadioField<T = any> extends QuickField<T> {
    type: "Radio";
    options: { label: string; value: any }[];
}

export interface QuickSubmitField<T = any> extends QuickField<T> {
    type: "Submit";
}

export interface QuickFormField<T = any> extends QuickField<T> {
    type: "QuickForm";
    fields: QuickField[];
}
```