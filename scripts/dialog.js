const saveDialog = document.querySelector('#save-dialog');
const saveButton = document.querySelector('.save-button');
const closeDialogButton = saveDialog.querySelector('.dialog__button');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  saveDialog.close();
});
