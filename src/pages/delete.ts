import { PageType } from "./home";
import { closeModal } from "../components/modal";
import { removeIntentById } from "../models/intent";

const DeleteIntent: PageType = {
  render: async () => {
    return /*html*/ `
        <div>
          <h1>Delete intent</h1>
          <p>Are you sure you want to delete?</p>
          <button id="delete-cancel-button">No</button>
          <button id="confirm-cancel-button">Yes</button>
        </div>
      `;
  },
  isModal: true,
  afterRender: async (intentId: string) => {
    const cancelButton = document.getElementById("delete-cancel-button");
    const confirmButton = document.getElementById("confirm-cancel-button");

    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        closeModal();
      });
    }

    if (confirmButton) {
      confirmButton.addEventListener("click", () => {
        removeIntentById(intentId);
        closeModal();
      });
    }
  }
};

export default DeleteIntent;
