'use strict';

angular.module('crudApp').factory('LoginService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

    	
            var factory = {
                loginUser: loginUser,             
            };

            return factory;

            function getUserByName(name) {
                console.log('userid'+name);
                var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API+name)
                    .then(
                        function (response) {
                            console.log('successfully logged in'+name);                           
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