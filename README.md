# 🤠 dustin.younse.com

Welcome to my homepage repo! This is, as always, an ever evolving website. In the past it has been a glorified resume, but I am in the process of (finally) creating the holistic personal website I always wanted.

Currently this site is using [`tea-stack`](https://github.com/mattwaler/tea-stack/), a minimal website / prototyping tech stack leveraging a bunch of fun and easy to use tools:

## 🧰 Tools

This project uses the following frameworks:

- [TailwindCSS](https://tailwindcss.com/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://alpinejs.dev/)
- [Vite](https://vitejs.dev)

## 🛠 Getting Started

- `nvm use` to switch to the valid node version
- `pnpm install` to build that big ol' `node_modules` folder
- `pnpm run dev` to boot up a live-reloading dev server
- `pnpm run build` to build the production-ready site

### `pnpm`??

I recently became a `pnpm` convert, after years of `npm` and `yarn`. `pnpm` is basically the same as either of those options, but it has some ergonomics I really appreciate like this explicit installation output:

```sh
💰 pnpm install -D @alpinejs/collapse
 WARN  3 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6, node-domexception@1.0.0
Packages: +1

Progress: resolved 698, reused 633, downloaded 0, added 0, done

devDependencies:
+ @alpinejs/collapse 3.15.0

Done in 1.2s using pnpm v10.13.1
```
