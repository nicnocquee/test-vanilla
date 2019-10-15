import { PageType } from "../pages/home";

const Header: PageType = {
  render: async () => {
    return /*html*/ `
        <div>This is Header</div>
    `;
  },
  afterRender: () => Promise.resolve()
};

export default Header;
