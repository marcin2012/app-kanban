require("./viewTwo.style.scss");

module.exports = function (ngModule) {
  ngModule.component('secondComponent', {
    template: require('./viewTwo.template.html'),
    controllerAs: "vm",
    controller: function ($scope) {

      $scope.lists = [];

      $scope.addList = function () {
        $scope.lists.push({name: 'new list', tickets: []})
      };

      $scope.addTicket = function (list) {
        list.tickets.push({})
      };

      $scope.delete = function ($index, list) {
        list.tickets.splice($index, 1)
      };
    }
  });
};