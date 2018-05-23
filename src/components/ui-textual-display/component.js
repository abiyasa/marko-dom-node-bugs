module.exports = class {
  onClick(event) {
    this.emit('click', event);
  }
};
