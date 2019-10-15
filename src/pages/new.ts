import { PageType } from "./home";
import IntentForm from "../components/intent-form";
import { closeModal } from "../components/modal";

const NewIntent: PageType = {
  render: async () => {
    const form = await IntentForm.render();
    return /*html*/ `
        <div>
          <h1>New Intent</h1>
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

export default NewIntent;
