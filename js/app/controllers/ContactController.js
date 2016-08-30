function ContactController() {
		var vm = this;
    vm.name = 'Bill Gates';
    vm.email = 'william@microsoft.com'
}

angular
    .module('app')
    .controller('ContactController', ContactController);
