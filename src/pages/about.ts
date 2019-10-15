import { PageType } from "./home";

const About: PageType = {
  render: async () => {
    return /*html*/ `
        <div>This is About page</div>
      `;
  },
  afterRender: () => Promise.resolve()
};

export default About;
