$(document).ready(function(){

    var city;
    var api;
    var cel;
    var far


    $.getJSON("http://ipinfo.io", function(data){
        city = data.city;

        api = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6804d5e83156e176867cae9833cae67a';

        console.log(api);
        console.log(city);
        $.getJSON(api, function (data) {

            var weatherType = data.weather[0].description;
            var icon = data.weather[0].icon;
            var kelvin = data.main.temp;
            var windSpeed = data.wind.speed;
            var city = data.name;
            var country = data.sys.country;
            var tempSwap = false;
            var link = "http://openweathermap.org/img/w/"+icon+".png";

            console.log(link);
            far = ((kelvin)*(9/5) - 459.67).toFixed(1);
            cel = (kelvin - 273.15).toFixed(1);

            $("#city").html("City: " + city + ", " + country);
            $("#temperature").html("Temperature: " + cel + "ºC");
            $("#icon").attr('src', link);

            $("#changeWeather").click(function(){
                if(tempSwap){
                    $("#temperature").html("Temperature: " + cel + "ºC");
                    tempSwap = false;
                    $("#changeWeather").html("Fahrenheit")
                } else{
                    $("#temperature").html("Temperature: " + far + "ºF");
                    tempSwap = true;
                    $("#changeWeather").html("Celsius");
                }
            });

            $("#weatherType").html("Weather: " + weatherType);
            $("#wind").html("Wind Speed: " + ((windSpeed*18)/5).toFixed(1) + " Km/h");


        });
    });

});