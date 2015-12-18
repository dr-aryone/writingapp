angular
  .module('writeAway')
  .controller('NewBookCtrl', ['$uibModalInstance', NewBookCtrl]);

function NewBookCtrl ($uibModalInstance) {
  this.error = null;

  this.cancel = cancel;
  this.submit = submit;

  function cancel () {
    $uibModalInstance.close(false);
  }

  function submit (title, description) {
    var newBook = null;

    if (title) {
      newBook = { title: title, summary: description };
      $uibModalInstance.close(newBook);
    } else {
      this.error = 'Oops! You forgot a title.';
    }
  }
}
