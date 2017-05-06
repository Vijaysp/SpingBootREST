'use strict';

angular.module('crudApp').factory('AuditService',
    ['$localStorage','$location', '$http', '$q', 'urls',
        function ($localStorage,$location, $http, $q, urls) {
    	 var self = this;
         self.user = {};
         self.users=[];

       
         self.successMessage = '';
         self.errorMessage = '';
         self.done = false;

         self.onlyIntegers = /^\d+$/;
         self.onlyNumbers = /^\d+([,.]\d+)?$/;
    	
            var factory = {
            		saveAuditService: saveAuditService,    
            		loadAllAudits:loadAllAudits
            };

            return factory;

            function saveAuditService(audit) {
                console.log('userid audit --> '+self.audit.name);
                var deferred = $q.defer();
                $http.post(urls.AUDIT_SERVICE_API, audit)
                .then(
                    function (response) {
                        loadAllAudits();
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                       console.error('Error while creating Audit : '+errResponse.data.errorMessage);
                       deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
            
            function submit() {
                console.log('Submitting');
                if (self.audit.id === undefined || self.audit.id === null) {
                    console.log('Saving New audit', self.audit);
                    createAudit(self.audit);
                } else {
                    updateAudit(self.audit, self.audit.id);
                    console.log('audit updated with id ', self.audit.id);
                }
            }

            
            function loadAllAudits() {
                console.log('Fetching all audits');
                var deferred = $q.defer();
                $http.get(urls.AUDIT_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all audits');
                            $localStorage.audits = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading audits');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
           
            
            function getAllAudits(){
                return $localStorage.users;
            }

            function getAudit(id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.AUDIT_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully aUDIT with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading audit with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            
           
        }
    ]);