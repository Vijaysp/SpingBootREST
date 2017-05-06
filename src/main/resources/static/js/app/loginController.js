'use strict';

angular.module('crudApp').controller('loginController',
    ['LoginService', '$scope',  function( LoginService, $scope) {

        var self = this;
        self.user = {};
        self.users=[];
        $scope.userName;

        self.getUser = getUser;
        self.successMessage = '';
        self.errorMessage = '';
        

        function getUser(name){
        	console.log('User Name --> '+$scope.login.user.name+" "+$scope.name+" "+self.user.name +$scope.userName);
        	console.log('User Name --> '+self.user.name);
        	console.log('User Name --> '+self.user.password);        	 
            return LoginService.getUserByName(self.user.name).then(
                    function (response) {
                        console.log('User created successfully');
                        self.successMessage = 'User logged successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating User');
                        self.errorMessage = 'User not exist	: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }

        function reset(){
        	console.log('reset');
        
            self.successMessage='';
            self.errorMessage='';
            self.user={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
    ]);