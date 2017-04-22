'use strict';

angular.module('crudApp').controller('LoginController',
    ['LoginService', '$scope',  function( UserService, $scope) {

        var self = this;
        self.user = {};
        self.users=[];

        self.getUser = getUser;
        self.successMessage = '';
        self.errorMessage = '';

        function getUser(name){
        	console.log('User Name'+name);
 
            return LoginService.getUserByName(name);
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.user={};
            $scope.myForm.$setPristine(); //reset Form
        }

    ]);