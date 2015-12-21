angular
  .module('writeAway')
  .controller('NewBookCtrl', ['$uibModalInstance', NewBookCtrl]);

function NewBookCtrl ($uibModalInstance) {
  // method declarations
  this.cancel = cancel;
  this.submit = submit;


  // variable declarations
  this.error = null;


  // method definitions
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
