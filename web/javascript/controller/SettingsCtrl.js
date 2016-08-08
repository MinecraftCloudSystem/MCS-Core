app.controller('SettingsCtrl', ['$rootScope', '$scope', 'Socket', function($rootScope, $scope, Socket) {

    $rootScope.setLoading(true);

    Socket.emit("page-req", { page: "settings" });

    Socket.on("page-res", function(data) {
        if(data.state == "error") {
            $rootScope.sendCallout(data.state, "An error occurred", data.message);
            $rootScope.setLoading(false);
            return;
        }

        if(data.state == "success") {
            $scope.title = data.content.title;
            $rootScope.setLoading(false);
            return;
        }

        $rootScope.sendCallout("warn", "Unexpected error", "An unexpected error occurred getting the Page-Content!");
        $rootScope.setLoading(false);

    });

}]);