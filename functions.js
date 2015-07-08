$(document).ready(function () {

    if ($('#identify_vm').val() != null) {
        //Fetch data with AJAX

        function onDataReceived(series) {

            // Load all the data in one pass; if we only got partial
            // data we could merge it with what we already have.
            data = series;

            var options = {
                series: {
                    lines: {
                        show: true,
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0,
                    mode: "time",
                    timeformat: "%d-%m-%Y"
                },
                yaxes: [{
                        position: "right"
                    }],
                legend: {
                    position: "sw"
                }
            };



            $.plot("#grafico", data, options);
        }
        //Fetch data with AJAX
        function fetchData() {

            // Normally we call the same URL - a script connected to a
            // database - but in this case we only have static example
            // files, so we need to modify the URL.

            $.ajax({
                url: "ajax.php?veid=" + $('#identify_vm').val(),
                type: "GET",
                dataType: "json",
                success: onDataReceived
            });

        }

        window.onload = fetchData;
        //If you want to load data every 10 seconds
        var interval = 300000;

        //Set interval operation
        var tid = setInterval(fetchData, interval);
    }
});
