# vite

* import scss into `client.ts`
* rename `client.ts` to `app.ts`
* Move `index.html` to root directory and update script tag
* Delete node_modules and package.lock
* [Update dependencies](https://stackblitz.com/edit/vitejs-vite-ysoiv93u?file=package.json&terminal=dev)
* Add vite config
* Update readme and npm scripts
* Move `public_html/media/music` to `dist/media/music`
* Update elixir script with dist path

* Update vite dev server proxy with buffer option for media/music [https://github.com/sagemathinc/http-proxy-3#options](https://github.com/sagemathinc/http-proxy-3#options)
* update minitaur-config for music-hall