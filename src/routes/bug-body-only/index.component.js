const bodyOnlyItem = require('./components/body-only-item');

module.exports = class {
  onMount(event) {
    bodyOnlyItem
      .render({ showSpan: true, text: 'test' })
      .then(result => {
        result.appendTo(this.getEl('container-1'));
    });

    bodyOnlyItem
      .render({ showSpan: false, text: 'test' })
      .then(result => {
        result.appendTo(this.getEl('container-2'));
    });
  }
};
