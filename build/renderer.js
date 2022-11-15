const fs = require('fs');
const path = require('path');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const { createRouter, createMemoryHistory } = require('vue-router');
const App = require('../dist/app.js').default;
const { routes } = require('../dist/routes.js');

const app = createSSRApp(App);
const router = createRouter({routes, history: createMemoryHistory()});
app.use(router);

const templateFileName = path.resolve(path.join(__dirname, '../public_html/player/index.html'));

module.exports = {
    render: () => 
      Promise.all([
        fs.promises.readFile(templateFileName, 'utf-8'),
        renderToString(app)
      ]).then(([templateHtml, appHtml]) => templateHtml.replace('<!--vue-ssr-outlet-->', appHtml))
};