/* empty css                         */
import { k as createComponent, l as renderTemplate, p as renderHead, q as renderSlot, o as createAstro, m as maybeRenderHead, n as addAttribute, t as renderComponent } from './astro/server_cKPxeRc_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Lux UI Kit Revoluciona tu desarrollo con nuestra librería UI
rapidez, elegancia y simplicidad en cada componente"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="p-3"> <h2 class="text-3xl">Buttons</h2> <h3 class="text-2xl p-4">Default</h3> <div class="text-center pb-4"> <div> ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-default" }, { "default": () => renderTemplate` Default ` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-primary", "color": "primary" }, { "default": () => renderTemplate` Primary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-secondary", "color": "secondary" }, { "default": () => renderTemplate` Secondary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-accent", "color": "accent" }, { "default": () => renderTemplate` Accent` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-danger", "color": "danger" }, { "default": () => renderTemplate` Danger` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-success", "color": "success" }, { "default": () => renderTemplate` Success` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-warning", "color": "warning" }, { "default": () => renderTemplate` Warning` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-info", "color": "info" }, { "default": () => renderTemplate` Info` })} </div> <div class="p-4"> <pre>        <code id="code-container" class="language-html">&lt;lux-button&gt; Default &lt;/lux-button&gt;</code>
      </pre> </div> </div> </div> <hr> <div class="p-3"> <h3 class="text-2xl p-4">Outline</h3> <div class="text-center pb-4"> <div> ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-default", "variant": "outline" }, { "default": () => renderTemplate`Outline` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-primary", "variant": "outline", "color": "primary" }, { "default": () => renderTemplate`
Primary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-secondary", "variant": "outline", "color": "secondary" }, { "default": () => renderTemplate`
Secondary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-accent", "variant": "outline", "color": "accent" }, { "default": () => renderTemplate`
Accent` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-danger", "variant": "outline", "color": "danger" }, { "default": () => renderTemplate`
Danger` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-success", "variant": "outline", "color": "success" }, { "default": () => renderTemplate`
Success` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-warning", "variant": "outline", "color": "warning" }, { "default": () => renderTemplate`
Warning` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-outline-info", "variant": "outline", "color": "info" }, { "default": () => renderTemplate`
Info` })} </div> <div class="p-4"> <pre>     <code id="code-container-outline" class="language-html">&lt;lux-button variant="outline"&gt; Outline &lt;/lux-button&gt;</code>
   </pre> </div> </div> </div> <hr> <div class="p-3"> <h3 class="text-2xl p-4">Flat</h3> <div class="text-center pb-4"> <div> ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-default", "variant": "flat" }, { "default": () => renderTemplate`Flat` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-primary", "variant": "flat", "color": "primary" }, { "default": () => renderTemplate`
Primary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-secondary", "variant": "flat", "color": "secondary" }, { "default": () => renderTemplate`
Secondary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-accent", "variant": "flat", "color": "accent" }, { "default": () => renderTemplate`
Accent` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-danger", "variant": "flat", "color": "danger" }, { "default": () => renderTemplate`
Danger` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-success", "variant": "flat", "color": "success" }, { "default": () => renderTemplate`
Success` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-warning", "variant": "flat", "color": "warning" }, { "default": () => renderTemplate`
Warning` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-flat-info", "variant": "flat", "color": "info" }, { "default": () => renderTemplate`
Info` })} </div> <div class="p-4"> <pre>      <code id="code-container-flat" class="language-html">&lt;lux-button variant="flat"&gt; Flat &lt;/lux-button&gt;</code>
    </pre> </div> </div> </div> <hr> <div class="p-3"> <h3 class="text-2xl p-4">Raised</h3> <div class="text-center pb-4"> <div> ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-default", "variant": "raised" }, { "default": () => renderTemplate`Raised` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-primary", "variant": "raised", "color": "primary" }, { "default": () => renderTemplate`
Primary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-secondary", "variant": "raised", "color": "secondary" }, { "default": () => renderTemplate`
Secondary` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-accent", "variant": "raised", "color": "accent" }, { "default": () => renderTemplate`
Accent` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-danger", "variant": "raised", "color": "danger" }, { "default": () => renderTemplate`
Danger` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-success", "variant": "raised", "color": "success" }, { "default": () => renderTemplate`
Success` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-warning", "variant": "raised", "color": "warning" }, { "default": () => renderTemplate`
Warning` })} ${renderComponent($$result, "lux-button", "lux-button", { "id": "btn-raised-info", "variant": "raised", "color": "info" }, { "default": () => renderTemplate`
Info` })} </div> <div class="p-4"> <pre>      <code id="code-container-raised" class="language-html">&lt;lux-button variant="raised"&gt; Raised &lt;/lux-button&gt;</code>
    </pre> </div> </div> </div> `;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/Button.astro", void 0);

const $$Astro$4 = createAstro();
const $$GetStarted = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GetStarted;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="p-3"> <h2 class="text-3xl">Get Started</h2> <h3 class="text-2xl p-4">Installation</h3> <div class="p-4"> <pre>      <code class="language-bash"> npm i lux-ui-kit</code>
    </pre> </div> <h3 class="text-2xl p-4">Import JS/TS</h3> <div class="p-4"> <pre> <code class="language-javascript"> import "lux-ui-kit"; </code> </pre> </div> <h3 class="text-2xl p-4">Usage</h3> <div class="p-4"> <pre> <code class="language-html"> &lt;lux-button&gt; Default &lt;/lux-button&gt; </code> </pre> </div> </div>  `;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/GetStarted.astro", void 0);

const $$Astro$3 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Input;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="p-3"> <h2 class="text-3xl">Inputs</h2> <div class="flex sm:flex-row gap-4 flex-col"> <div class="sm:w-1/2 w-full"> <h3 class="text-2xl p-4">Defaults</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" placeholder="Enter name" value="My name is Lux" &gt; Defaults &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> <div class="w-full sm:w-1/2"> <h3 class="text-2xl p-4">Disabled</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "disabled": "true", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" disabled="true" placeholder="Enter name" value="My name is Lux" &gt; Disabled &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> </div> <div class="flex flex-col sm:flex-row gap-4"> <div class="sm:w-1/3"> <h3 class="text-2xl p-4">Float</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "float", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="float" placeholder="Enter name" value="My name is Lux" &gt; Float &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> <div class="sm:w-1/3"> <h3 class="text-2xl p-4">Outline</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "outline", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="outline" placeholder="Enter name" value="My name is Lux" &gt; Outline &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> <div class="sm:w-1/3"> <h3 class="text-2xl p-4">Fill</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "fill", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="fill" placeholder="Enter name" value="My name is Lux" &gt; Fill &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> </div> <div class="flex flex-col"> <div class="flex flex-col sm:flex-row"> <div class="sm:w-1/2"> <h3 class="text-2xl p-4">Primary</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "float", "color": "primary", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>          <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="float" color="primary" placeholder="Enter name" value="My name is Lux" &gt; Primary &lt;/lux-text-input&gt;</code>
        </pre> </div> </div> <div class="sm:w-1/2"> <h3 class="text-2xl p-4">Accent</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "outline", "color": "accent", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>            <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="outline" color="accent" placeholder="Enter name" value="My name is Lux" &gt; Accent &lt;/lux-text-input&gt;</code>
          </pre> </div> </div> </div> <div class="flex flex-col sm:flex-row"> <div class="sm:w-1/2"> <h3 class="text-2xl p-4">Success</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "fill", "color": "success", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>              <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="fill" color="success" placeholder="Enter name" value="My name is Lux" &gt; Success &lt;/lux-text-input&gt;</code>
            </pre> </div> </div> <div class="sm:w-1/2"> <h3 class="text-2xl p-4">Danger</h3> <div class="pl-4 pb-4"> ${renderComponent($$result, "lux-text-input", "lux-text-input", { "variant": "fill", "color": "danger", "label": "Name", "placeholder": "Enter name", "value": "My Name is Lux" })} </div> <div class="p-4"> <pre>                <code id="code-container-raised" class="language-html">&lt;lux-text-input label="Name" variant="fill" color="danger" placeholder="Enter name" value="My name is Lux" &gt; Danger &lt;/lux-text-input&gt;</code>
              </pre> </div> </div> </div>  </div> </div>`;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/Input.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-10 p-3" data-astro-cid-ivdev4kk> <h1 class="text-center text-5xl font-bold" data-astro-cid-ivdev4kk>Lux UI</h1> <p class="pt-6 pb-4 text-center" data-astro-cid-ivdev4kk>
"Revoluciona tu desarrollo con nuestra librería UI <br data-astro-cid-ivdev4kk> rapidez, elegancia
    y simplicidad en cada componente."
</p> <img class="img-difuminado" src="images/components.png" data-astro-cid-ivdev4kk> </div> `;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/Main.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} tabindex="-1" class="p-3"> <h2 class="text-3xl">Cards</h2> <div class="p-3"> ${renderComponent($$result, "lux-card", "lux-card", { "title-text": "My title", "subtitle-text": "My subtitle: card with color default" })} </div> <div class="p-3"> ${renderComponent($$result, "lux-card", "lux-card", { "title-text": "My title", "subtitle-text": "My subtitle: card with color primary", "color": "primary" })} </div> <div class="p-3"> ${renderComponent($$result, "lux-card", "lux-card", { "title-text": "My title", "subtitle-text": "My subtitle: card with color warning", "color": "warning" })} </div> <div class="p-3"> <pre><code class="language-html">&lt;lux-card title-text="My title" subtitle-text="My subtitle: card with color default" color="default"&gt;&lt;/lux-card&gt;</code></pre> </div> </div> <br> `;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$TextArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextArea;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="p-3"> <h2 class="text-3xl">Text Area</h2> <div class="p-4"> ${renderComponent($$result, "lux-textarea", "lux-textarea", { "label": "Name", "placeholder": "Enter name", "variant": "float", "color": "primary" }, { "default": () => renderTemplate`
My name is Lux
` })} </div> <div class="p-4"> <pre>      <code id="code-container-raised" class="language-html">&lt;lux-textarea label="Name" placeholder="Enter name" variant="float" color="primary" &gt; My name is Lux &lt;/lux-textarea&gt;</code>
    </pre> </div> </div> `;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/TextArea.astro", void 0);

const $$Astro = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Select;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="p-3"> <h2 class="text-3xl">Select</h2> <div class="p-4"> ${renderComponent($$result, "lux-select", "lux-select", { "label": "Colors", "placeholder": "Select one color", "variant": "float", "color": "primary", "value": "" }, { "default": () => renderTemplate` <option value="1">Red</option> <option value="2">Green</option> <option value="3">Blue</option> ` })} </div> <div class="p-4"> <pre>      <code id="code-container-raised" class="language-html">&lt;lux-select label="Colors" placeholder="Select one color" variant="float" color="primary" value="" &gt; &lt;option value="1"&gt;Red&lt;/option&gt; &lt;option value="2"&gt;Green&lt;/option&gt; &lt;option value="3"&gt;Blue&lt;/option&gt; &lt;/lux-select&gt;</code>
    </pre> </div> </div>`;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/components/Select.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lux UI Kit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center p-0 sm:p-4"> <div class="sm:w-3/4 w-11/12"> ${renderComponent($$result2, "Main", $$Main, { "id": "main" })} ${renderComponent($$result2, "GetStarted", $$GetStarted, { "id": "get-started" })} ${renderComponent($$result2, "Button", $$Button, { "id": "button" })} ${renderComponent($$result2, "Input", $$Input, { "id": "input" })} ${renderComponent($$result2, "TextArea", $$TextArea, { "id": "text-area" })} ${renderComponent($$result2, "Select", $$Select, { "id": "select" })} ${renderComponent($$result2, "Card", $$Card, { "id": "card" })} </div> </div> ` })}`;
}, "/home/mrthnx/Developer/Personal/landing-lux-ui/src/pages/index.astro", void 0);

const $$file = "/home/mrthnx/Developer/Personal/landing-lux-ui/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
