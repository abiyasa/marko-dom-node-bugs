exports.path = `/${require('path').basename(__dirname)}`;

const template = require('./index.marko');
exports.handler = (input, out) => {
  input.params.model = require('./fixtures/default');

  template.render(input, out);
};
