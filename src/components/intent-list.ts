import { PageType } from "../pages/home";
import { IntentType } from "../models/intent";
import IntentRow from "./intent-row";

const IntentList: PageType = {
  render: async (intents: Array<IntentType> = []) => {
    if (intents.length === 0) {
      return /*html*/ `
            <p>No intents yet</p>
          `;
    }

    const rows = await Promise.all(
      intents.map(intent => IntentRow.render(intent))
    );
    return /*html*/ `
        <ul>
            ${rows.join("")}
        </ul>
    `;
  },
  afterRender: (intents: Array<IntentType> = []) => Promise.resolve()
};

export default IntentList;
