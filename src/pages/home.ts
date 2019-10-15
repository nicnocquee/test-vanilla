import { getIntents } from "../models/intent";
import IntentList from "../components/intent-list";

export interface PageType {
  render: (params?: any) => Promise<string>;
  afterRender?: (params?: any) => Promise<void>;
  isModal?: boolean;
}

const Home: PageType = {
  render: async () => {
    const intents = getIntents();
    const renderedIntents = await IntentList.render(intents);

    return /*html*/ `
        <div>
          <h1>Home</h1>
          <ul>
            <li><a href="/#/new">New</a></li>
          </ul>
          <h2>Intens</h2>
          ${renderedIntents}
        </div>
      `;
  },
  afterRender: async () => {
    if (IntentList.afterRender) {
      const intents = getIntents();
      await IntentList.afterRender(intents);
    }
  }
};

export default Home;
