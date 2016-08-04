
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'parts/dashboard.html',
            controller: 'dashboardctrl'
        })
        .otherwise({
            templateUrl: 'parts/dashboard.html',
            controller: 'dashboardctrl'
        });
    $locationProvider.html5Mode(true);
});