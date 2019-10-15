import { PageType } from "../pages/home";

const Modal: PageType = {
  render: async (content: string) => {
    return /*html*/ `
        <div id="modal-bg">
            <div id="modal-white">
                ${content}
            </div>
        </div>
      `;
  },
  afterRender: async () => {
    const modalBg = document.getElementById("modal-bg");
    if (modalBg) {
      modalBg.addEventListener("click", e => {
        if (e.target !== modalBg) return;
        window.history.back();
        modalBg.remove();
      });
    }
  }
};

export const closeModal = () => {
  const modalBg = document.getElementById("modal-bg");
  if (modalBg) {
    window.history.back();
    modalBg.remove();
  }
};

export default Modal;
