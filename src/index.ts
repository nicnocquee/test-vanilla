import Home, { PageType } from "./pages/home";
import NewIntent from "./pages/new";
import EditIntent from "./pages/edit";
import ViewIntent from "./pages/view";
import DeleteIntent from "./pages/delete";
import { parseRequestURL } from "./utils/utils";
import Error404 from "./pages/404";
import Header from "./components/header";
import Footer from "./components/footer";
import Modal from "./components/modal";

import "./styles.scss";
import About from "./pages/about";

const routes: { [key: string]: PageType } = {
  "/": Home,
  "/new": NewIntent,
  "/about": About,
  "/intent/:id/edit": EditIntent,
  "/intent/:id/view": ViewIntent,
  "/intent/:id/delete": DeleteIntent
};

const router = async () => {
  // Lazy load view element:
  const content = document.getElementById("content");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const modal = document.getElementById("modal");

  // Get the parsed URl from the addressbar
  let request = parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  if (page.isModal) {
    const modalContent = await page.render(request.id);
    const modalRendered = await Modal.render(modalContent);
    modal!.innerHTML = modalRendered;
  } else {
    content!.innerHTML = await page.render(request.id);
  }
  if (page.afterRender) {
    await page.afterRender(request.id);
  }
  if (page.isModal && Modal.afterRender) {
    await Modal.afterRender();
  }

  // render header
  header!.innerHTML = await Header.render(request.id);
  if (Header.afterRender) {
    await Header.afterRender();
  }

  // render footer
  footer!.innerHTML = await Footer.render(request.id);
  if (Footer.afterRender) {
    await Footer.afterRender();
  }
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
