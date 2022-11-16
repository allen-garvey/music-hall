const serverConfig = require('./server.config');
const clientConfig = require('./client.config');

module.exports = [serverConfig({isWatch: true}), clientConfig({isWatch: false})];