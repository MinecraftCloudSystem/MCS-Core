app.controller('NavigationCtrl', ['$scope', 'Socket', '$route', function($scope, Socket, $route) {

    $scope.$on('$routeChangeSuccess', function(next, current) {
        $scope.isActive = function(upi) {
            return upi == $route.current.upi;
        };
    });

}]);