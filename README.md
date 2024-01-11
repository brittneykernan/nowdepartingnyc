# Now Departing NYC: A Simple Travel Blog with Astro

No TypeScript, PostCSS, TailwindCSS, React, or CMS. Don't need 'em, yet.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   ├── MenuImages.mjs
│   │   └── MenuItems.mjs
│   ├── layouts/
│   │   ├── Article.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── [guide]/
│   │   │   └── [guide post].md
│   │   └── [guide].md
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── AppConfig.mjs
│   │   └── utils.mjs
├── .eslintrc
├── astro.config.mjs
├── package.json
└── README.md
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro components.

Any static assets, that you don't want Astro to optimize, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESlint                                       |
| `npm run format`          | Run Prettier in fix mode                         |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credits

<a target="_blank" href="https://www.flaticon.com/free-icon/takeoff-the-plane_68380?term=plane&page=1&position=13&origin=tag&related_id=68380">Airplane</a> icon by <a target="_blank" href="https://www.flaticon.com/free-icons/plane">Flaticon</a>

<a href="https://unsplash.com/@brittneykernan/likes" target="_blank">Photos</a> from <a href="https://unsplash.com/" target="_blank">Unsplash</a>
