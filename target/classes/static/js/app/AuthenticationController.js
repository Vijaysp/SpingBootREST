'use strict';
angular.module('crudApp').controller('AuthenticationController',
    [ 'AuthenticationService', 'FlashService', '$scope',  
     
     function( FlashService,AuthenticationService, $scope) {
    	
/*
    	var self = this;
        self.user = {};
        self.users=[];
        $scope.userName;*/

        var vm = this;

        vm.login = login;

        function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        };

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
 
    }]);
 
