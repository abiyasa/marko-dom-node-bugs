const path = require('path');
const { loadAllFixtures } = require('../../utils/fixtures-loader');
const template = require('./index.marko');

exports.path = "/ui-textual-display";
exports.handler = (input, out) => {
  // get all fixtures
  input.params.fixtures = loadAllFixtures(path.resolve(__dirname, './fixtures'));

  template.render(input, out);
};
