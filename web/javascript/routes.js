app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when(('/dashboard' || '/'), {
            templateUrl: 'parts/dashboard.html',
            upi: 'mcs.page.dashboard'
        })
        .when(('/daemons' || '/'), {
            templateUrl: 'parts/daemons.html',
            upi: 'mcs.page.daemons'
        })
        .when(('/plugins' || '/'), {
            templateUrl: 'parts/plugins.html',
            upi: 'mcs.page.plugins'
        })
        .when(('/worlds' || '/'), {
            templateUrl: 'parts/worlds.html',
            upi: 'mcs.page.worlds'
        })
        .when(('/servertypes' || '/'), {
            templateUrl: 'parts/servertypes.html',
            upi: 'mcs.page.servertypes'
        })
        .when(('/settings' || '/'), {
            templateUrl: 'parts/settings.html',
            upi: 'mcs.page.settings'
        })
        .otherwise({
            templateUrl: 'parts/dashboard.html',
            upi: 'mcs.page.dashboard'
        });

    $locationProvider.html5Mode(true);
});