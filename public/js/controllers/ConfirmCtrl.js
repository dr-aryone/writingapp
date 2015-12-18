angular
  .module('writeAway')
  .controller('ConfirmCtrl', ['$uibModalInstance', 'settings', ConfirmCtrl]);

function ConfirmCtrl ($uibModalInstance, settings) {
  this.settings = settings;
  this.isDelete = settings.action === 'delete' ? true : false;

  this.ok = function () {
    $uibModalInstance.close(true);
  };

  this.cancel = function () {
    $uibModalInstance.close(false);
  };
}
