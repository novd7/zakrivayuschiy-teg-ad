const saveDialog = document.querySelector('#save-dialog');
const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});
