import { PageType } from "./home";
import IntentForm from "../components/intent-form";
import { IntentType, getIntentById } from "../models/intent";
import { closeModal } from "../components/modal";

const EditIntent: PageType = {
  render: async (intentId: string) => {
    const intent = getIntentById(intentId);
    const form = await IntentForm.render(intent);
    return /*html*/ `
        <div>
          <h1>Edit Intent</h1>
          ${form}
        </div>
      `;
  },
  isModal: true,
  afterRender: async () => {
    if (IntentForm.afterRender) {
      await IntentForm.afterRender(() => {
        closeModal();
      });
    }
  }
};

export default EditIntent;
