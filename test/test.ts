import { QuickForm } from "quick-form";

const main = document.getElementById("main")!;

const testForm = new QuickForm([
    { type: "Input", model: "test1", label: "Field 1", inputType: "text" },
    { type: "Input", model: "test2", label: "Field 2", inputType: "text" },
    { type: "Input", model: "", label: "Field 3", inputType: "text" },
    { type: "Input", model: "test4", label: "Field 4", inputType: "number" },
    { type: "Select", label: "Select an option", model: "test5", options: [
        { label: "Option 1", value: [1, 2, 3, 4, 5] },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 },
    ] },
    { type: "Submit", model: "" }
]);

// tslint:disable-next-line:no-console
testForm.on("submit", data => console.log(data));

main.appendChild(testForm.element);
