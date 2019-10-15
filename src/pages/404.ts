import { PageType } from "./home";

const Error404: PageType = {
  render: async () => {
    return /*html*/ `
        <div>This is 404 page</div>
      `;
  },
  afterRender: () => Promise.resolve()
};

export default Error404;
