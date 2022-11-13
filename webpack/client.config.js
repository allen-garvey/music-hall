const path = require('path');
const { buildConfig } = require('./base.config');

module.exports = (options) => {
    const config = buildConfig(options);
    config.entry = {
        client: path.join(__dirname, '..', 'src', 'client.ts'),
        player: path.join(__dirname, '..', 'src', 'player.ts'),
        styles: path.join(__dirname, '..', 'styles', 'index.scss'),
    };
    config.output = {
        path: path.join(__dirname, '..', 'public_html', 'assets'),
    };

    return config;
};
