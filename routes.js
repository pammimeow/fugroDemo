app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/allocation');

    $stateProvider
        .state('dashboard', {
            url : '/dashboard',
            templateUrl : 'dashboard/views/dashboard.html',
            controller: 'dashboardController'
        })   
        .state('allocation', {
            url : '/allocation',
            templateUrl : 'allocation/views/allocation.html',
            controller: 'allocationController'
        })      
});