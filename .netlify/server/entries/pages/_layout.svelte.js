import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const index$2 = "";
const index$1 = "";
const index = "";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button>dark mode</button>
    <a href="${"/"}">home</a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
