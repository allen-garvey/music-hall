const serverConfig = require('./server.config');
const clientConfig = require('./client.config');

module.exports = [serverConfig({skipTypecheck: true}), clientConfig({skipTypecheck: true})];