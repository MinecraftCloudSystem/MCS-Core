app.controller('DashboardCtrl', ['$rootScope', '$scope', 'Socket', function($rootScope, $scope, Socket) {

    $rootScope.setLoading(true);

    Socket.emit("page-req", { page: "dashboard" });

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

    });

    var playersOnline = [];
    var last = 1950;
    var max = 2000;
    for (var i = 0; i < 30; i += 1) {
        playersOnline.push([i, last]);
        last += Math.floor((Math.random() * 4));
    }
    for (var k = 30; k < 60; k += 1) {
        playersOnline.push([k, last]);
        last -= Math.floor((Math.random() * 4));
    }
    var line_data1 = {
        data: playersOnline,
        color: "#3c8dbc"
    };
    $.plot("#line-chart", [line_data1], {
        grid: {
            hoverable: true,
            borderColor: "#f3f3f3",
            borderWidth: 1,
            tickColor: "#f3f3f3"
        },
        series: {
            shadowSize: 1,
            lines: {
                show: true
            },
            points: {
                show: false
            }
        },
        lines: {
            fill: false,
            color: ["#3c8dbc", "#f56954"]
        },
        yaxis: {
            show: true,
        },
        xaxis: {
            show: false
        }
    });
    //Initialize tooltip on hover
    $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
        position: "absolute",
        display: "none",
        opacity: 0.8
    }).appendTo("body");
    $("#line-chart").bind("plothover", function (event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(0),
                y = item.datapoint[1].toFixed(0);

            $("#line-chart-tooltip").html(y + " / " + max + " Players online <br/>" + calcTime(x))
                .css({top: item.pageY + 5, left: item.pageX + 5})
                .fadeIn(200);
        } else {
            $("#line-chart-tooltip").hide();
        }

    });

    var calcTime = function(time) {
        var minutes = parseInt(60 - time);

        return minutes + " minute" + (minutes != 1 ? "s" : "") + " ago";
    };

}]);