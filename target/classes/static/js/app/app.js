var app = angular.module('crudApp',['ui.router','ngStorage']);


function HeaderCtrl($scope) {
    $scope.header = {name: "header", url: "header.ftl"};
}

app.constant('urls', {
    BASE: 'http://localhost:8086/SpringBootCRUDApp',
    USER_SERVICE_API : 'http://localhost:8086/SpringBootCRUDApp/api/user/',
    LOGIN_SERVICE_API : 'http://localhost:8086/SpringBootCRUDApp/api/user/nameexist/',
    	AUDIT_SERVICE_API : 'http://localhost:8086/SpringBootCRUDApp/api/audit/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            }).state('login', {
                url: '/login',
                templateUrl: 'partials/login',
                controller: 'loginController',
                controllerAs:'login'
              }).state('authenticate', {
                  url: '/authenticate',
                  templateUrl: 'partials/authenticate',
                  controller: 'AuthenticationController',
                  controllerAs:'vm'
              }).state('audit', {
                  url: '/audit',
                  templateUrl: 'partials/audit',
                  controller: 'AuditController',
                  controllerAs:'audit'
                  
              });/*.
              state('authenticate', {
                  url: '/authenticate',
                  templateUrl: 'partials/authenticate',
                  controller: 'AuthenticationController',
                  controllerAs:'vm',
                 
                	  require: function ($q) {
                		 
                		  var deferred = $q. defer ();
                		  Console. log ('AuthenticationController.controller')

                		  require (['AuthenticationController.controller '], function () {
                		  
                			  deferred.resolve()
                		  });
                		  return deferred.promise;
                	  }
                });*/
        $urlRouterProvider.otherwise('/');
    }]);

