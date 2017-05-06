'use strict';

angular.module('crudApp').factory('LoginService',
    ['$localStorage','$location', '$http', '$q', 'urls',
        function ($localStorage,$location, $http, $q, urls) {

    	
            var factory = {
            		getUserByName: getUserByName,             
            };

            return factory;

            function getUserByName(name) {
                console.log('userid'+name);
                var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API+name)
                    .then(
                        function (response) {
                        	  $location.path('/audit');
                            console.log('successfully logged in --> '+name+response.data);   
                          
                        },
                        function (errResponse) {
                        	
                            console.error('Error while loading users');
                           
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
      
           
           
        }
    ]);