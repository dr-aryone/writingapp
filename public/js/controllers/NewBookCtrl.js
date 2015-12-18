angular
  .module('writeAway')
  .controller('NewBookCtrl', ['$uibModalInstance', NewBookCtrl]);

function NewBookCtrl ($uibModalInstance) {
  this.cancel = cancel;
  this.submit = submit;

  function cancel () {
    $uibModalInstance.close(false);
  }

  function submit (title, description) {
    var newBook = { title: title, summary: description };
    $uibModalInstance.close(newBook);
  }
}
