var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8086/SpringBootCRUDApp',
    USER_SERVICE_API : 'http://localhost:8086/SpringBootCRUDApp/api/user/',
    LOGIN_SERVICE_API : 'http://localhost:8086/SpringBootCRUDApp/api/login/'
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
                controller: 'UserController',
                controllerAs:'login'
              });;
        $urlRouterProvider.otherwise('/');
    }]);

