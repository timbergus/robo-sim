/*eslint-env node */

require('babel-polyfill');
require('babel-core/register');

const glob = require('glob');

glob(__dirname + '/src/**/_test_', (err, files) => files.map(file => require(file)));
