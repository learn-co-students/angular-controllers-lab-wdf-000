function StaffController() {
		var vm = this;
    vm.name = 'Steve Jobs';
    vm.email = 'steve@apple.com';
}

angular
    .module('app')
    .controller('StaffController', StaffController);
