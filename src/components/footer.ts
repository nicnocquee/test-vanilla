import { PageType } from "../pages/home";

const Footer: PageType = {
  render: async () => {
    return /*html*/ `
        <div>This is footer <a href="/#/about">About</a></div>
      `;
  },
  afterRender: () => Promise.resolve()
};

export default Footer;
