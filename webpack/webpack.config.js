const serverConfig = require('./server.config');
const clientConfig = require('./client.config');

module.exports = [serverConfig({isWatch: false}), clientConfig({isWatch: false})];