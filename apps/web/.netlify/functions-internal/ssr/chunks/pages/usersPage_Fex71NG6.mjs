import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderSlot, k as renderComponent } from '../astro_djpS_wdL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { hc } from 'hono/client';

const isDevelopment = false;
console.log("🚀isDevelopment:", isDevelopment);
const apiUrl = "#";

const $$Astro$2 = createAstro();
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Users;
  const client = hc(apiUrl);
  const res = await client.users.$get();
  const users = await res.json();
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"> ${users.map((user) => {
    const { id, username } = user;
    console.log(id, username);
    return renderTemplate`<article${addAttribute(`overflow-hidden col-span-1 rounded`, "class")}> <a class="flex gap-x-4 p-4 h-full items-center justify-center relative"${addAttribute(`/users/${id}`, "href")}${addAttribute(`Ver user ${username}`, "title")}> ${username} </a> </article>`;
  })} </section>`;
}, "/home/josemo/steam.learn/apps/web/src/components/Users.astro", void 0);

const $$Astro$1 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="container m-auto mb-20"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/josemo/steam.learn/apps/web/src/components/Container.astro", void 0);

const $$Astro = createAstro();
const $$UsersPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UsersPage;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="font-title text-5xl text-black text-center py-10">Todos los usuarios</h2> ${renderComponent($$result2, "Users", $$Users, {})} ` })}`;
}, "/home/josemo/steam.learn/apps/web/src/pages/usersPage.astro", void 0);
const $$file = "/home/josemo/steam.learn/apps/web/src/pages/usersPage.astro";
const $$url = "/usersPage";

export { $$UsersPage as default, $$file as file, $$url as url };
