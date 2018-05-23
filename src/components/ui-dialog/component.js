module.exports = {
  onMount() {
    this.dialog = this.getEl('dialog');
    this.closeButton = this.getEl('closeButton');
  },

  onCreate() {
    this.state = { open: false };
  },

  openDialog() {
    this.state.open = true;
    this.emit('open');
  },

  closeDialog() {
    this.state.open = false;
    this.emit('close');
  },

  closeOnBackgroundClick(event) {
    if (this.state.open && (event.target === this.dialog)) {
      this.closeDialog();
    }
  },

  closeOnEscape(event) {
    if (this.state.open && event.key.indexOf('Esc') !== -1) {
      this.closeDialog();
    }
  },

  focusCloseButton() {
    this.closeButton.focus();
  }
};
