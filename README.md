# lux@web

This is the repository for my personal site, [luxatweb.dev](https://luxatweb.dev).
I'm using [svelte/SvelteKit](https://svelte.dev) and [tailwindcss](https://tailwindcss.com) for this site.
I'm also using the [Rose Pine Moon and Dawn palettes](https://rosepinetheme.com/palette/ingredients/) as color inspirations.

## Development

- Install [pnpm](https://pnpm.io/installation) if not already installed
- Run `pnpm install`
- Run `pnpm run dev`

## Building

- Run `pnpm run build`
- To check the build, run `pnpm run preview`

## Deploy

- lux@web is deployed on [fly.io](https://fly.io)
- Run `fly auth` if not already authenticated
- Run `fly deploy`

## TODO

- [ ] use github actions to deploy
- [ ] use [mdsvex](https://github.com/pngwn/MDsveX) to render blog posts
- [ ] reroute [blog.luxatweb.dev/posts](https://blog.luxatweb.dev/posts) to `luxatweb.dev/posts`
- [ ] reroute [blog.luxatweb.dev/index.xml](https://blog.luxatweb.dev/index.xml) to `luxatweb.dev/index.xml`
