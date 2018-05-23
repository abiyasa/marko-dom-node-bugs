const DIALOG_SHOW_CONFIRMATION = 'showConfirmation';
const DIALOG_HIDDEN = 'hidden';

module.exports = {
  onCreate() {
    this.state = {
      dialogContent: null,
      disablePrimaryButton: false
    };
  },

  onMount() {
    this.dialog = this.getComponent('confirmationDialog');
  },

  openConfirmationDialog() {
    this.updateDialogContent(DIALOG_SHOW_CONFIRMATION);
    this.dialog.openDialog();
  },

  onCancelClick() {
    this.updateDialogContent(DIALOG_HIDDEN);
    this.dialog.closeDialog();
  },

  updateDialogContent(newDialogState) {
    const model = this.input.model || {};

    switch (newDialogState) {
      case DIALOG_SHOW_CONFIRMATION:
        this.state.dialogContent = model.confirmationDialog.confirmationContent;
        this.state.disablePrimaryButton = false;
        break;

      case DIALOG_HIDDEN:
      default:
        this.state.dialogContent = null;
        break;
    }
  }
};
