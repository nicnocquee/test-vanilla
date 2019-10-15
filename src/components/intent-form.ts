import { PageType } from "../pages/home";
import { addIntent, IntentType, editIntent } from "../models/intent";
// @ts-ignore
import uuid from "uuid/v1";

const IntentForm: PageType = {
  render: async (intent?: IntentType) => {
    return /*html*/ `
      <form id="form-intent">
        <input type="text" name="title" id="form-intent-title" placeholder="Intent name" value="${
          intent ? intent.title : ""
        }"  />
        <button type="submit" id="form-intent-save">${
          intent ? "Create" : "Edit"
        }</button>
        <input type="hidden" name="intent-id" id="form-intent-id" value="${
          intent ? intent.id : ""
        }" />
        </form>
    `;
    // TODO: add other fields inside the form
  },
  afterRender: async (onSaveIntent?: () => void) => {
    const form = document.getElementById("form-intent");
    if (form) {
      form.addEventListener("submit", event => {
        event.preventDefault();

        const titleInput = <HTMLInputElement>(
          document.getElementById("form-intent-title")
        );
        const idInput = <HTMLInputElement>(
          document.getElementById("form-intent-id")
        );
        var title = "";
        var intentId = "";
        if (titleInput) {
          title = titleInput.value;
        }
        if (idInput) {
          intentId = idInput.value;
        }

        // validate the intent first then save or edit

        const intentToSave = {
          id: intentId || uuid(),
          title,
          expressions: [],
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date()
        };

        if (intentId) {
          // edit the new intent
          editIntent(intentToSave);
        } else {
          // add the new intent
          addIntent(intentToSave);
        }

        if (onSaveIntent) {
          onSaveIntent();
        }
      });
    }
  }
};

export default IntentForm;
