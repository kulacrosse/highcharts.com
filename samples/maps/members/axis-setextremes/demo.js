$(function () {

    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {
        
        // Initiate the chart
        $('#container').highcharts('Map', {

            chart: {
                width: 600,
                height: 500
            },

            title : {
                text : 'Set axis extremes'
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series : [{
                data : data,
                mapData: Highcharts.maps.world,
                joinBy: 'code',
                name: 'Population density',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                tooltip: {
                    valueSuffix: '/km²'
                }
            }]
        });
    });

    $('#setextremes').click(function () {
        var chart = $('#container').highcharts();

        chart.xAxis[0].setExtremes(4000, 6200, false);
        chart.yAxis[0].setExtremes(1400, 2400, false);
        chart.redraw();
    });
});