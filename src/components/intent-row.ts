import { PageType } from "../pages/home";
import { IntentType } from "../models/intent";

const IntentRow: PageType = {
  render: async (intent: IntentType) => {
    return /*html*/ `
        <p><a href="/#/intent/${intent.id}/view">${intent.title}</a> <a href="/#/intent/${intent.id}/edit">Edit</a> <a href="/#/intent/${intent.id}/delete">Delete</a></p>
    `;
  },
  afterRender: () => Promise.resolve()
};

export default IntentRow;
