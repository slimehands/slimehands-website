import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>This website will become a hub for cool projects and useful <code>code</code> snippets</h1>
<p>but right now it is nothing but a webpage</p>
<a href="${"projects"}">projects and snippets</a>`;
});
export {
  Page as default
};
