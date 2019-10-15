import { PageType } from "./home";
import { IntentType, getIntentById } from "../models/intent";

const ViewIntent: PageType = {
  render: async (intentId: string) => {
    const intent = getIntentById(intentId);
    if (!intent) {
      return /*html*/ `
      <div>Intent not found</div>
    `;
    }
    return /*html*/ `
        <div>
          <h1>${intent.id}</h1>
          <p>${intent.title}</p>
        </div>
      `;
  },
  isModal: true,
  afterRender: () => Promise.resolve()
};

export default ViewIntent;
