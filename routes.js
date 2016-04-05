app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url : '/dashboard',
            templateUrl : 'dashboard/views/dashboard.html',
            controller: 'dashboardController'
        })        
});