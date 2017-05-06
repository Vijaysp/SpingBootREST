'use strict';

angular.module('crudApp').controller('AuditController',
    ['AuditService', '$scope',  function( AuditService, $scope) {

        var self = this;
        self.user = {};
        self.users=[];
        $scope.userName;

        self.saveAudit = saveAudit;
        self.successMessage = '';
        self.errorMessage = '';

        function saveAudit(audit){
        	console.log('Audit Name --> '+$scope.audit.name+self.audit.name );
        	console.log('Audit Name --> '+self.user.name);
        	console.log('Audti Name --> '+self.user.password);
            return AuditService.saveAuditService(self.audit);
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