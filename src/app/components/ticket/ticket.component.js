require("./ticket.style.scss");

module.exports = function (ngModule) {
  ngModule.component('ticket', {
    template: require('./ticket.template.html'),
    controllerAs: "vm",
    controller: ticketController
  });
};

function ticketController() {

}
