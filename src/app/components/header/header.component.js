require("./header.style.scss");

module.exports = function (ngModule) {
  ngModule.component('header', {
    template: require('./header.template.html'),
    controllerAs: "vm",
    controller: headerController
  });
};

function headerController($mdDialog) {
  var vm = this;

  vm.status = false;

  vm.showPrompt = function (ev) {
    var confirm = $mdDialog.prompt()
    .title('Please enter your dasboard name')
    .placeholder('Dashboard name')
    .ariaLabel('Dashboard name')
    .targetEvent(ev)
    .ok('Create')
    .cancel('Cancel');

    $mdDialog.show(confirm).then(function (result) {
      vm.status = result;
    }, function () {
      vm.status = false;
    });
  };
}