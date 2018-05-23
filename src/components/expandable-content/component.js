const { toggleBooleanAttribute, toggleClass } = require('./helper');

module.exports = {
  onCreate() { },

  onQuestionClick(selectedElementId, event) {
    event.preventDefault();
    const element = document.getElementById(selectedElementId);
    const btn = element && element.querySelector('button');

    if (btn) {
      toggleBooleanAttribute(btn, 'aria-expanded');
    }

    if (element) {
      toggleClass(element, 'expanded');
    }
  }
};
