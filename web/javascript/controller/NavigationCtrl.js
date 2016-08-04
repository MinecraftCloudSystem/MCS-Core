app.controller('NavigationCtrl', ['$rootScope', '$scope', 'Socket', '$route', function($rootScope, $scope, Socket, $route) {

    $scope.$on('$routeChangeSuccess', function(next, current) {
        $scope.isActive = function(upi) {
            return upi == $route.current.upi;
        };
    });

}]);