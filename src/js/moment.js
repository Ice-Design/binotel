const t = window.TrelloPowerUp.iframe();
const call_list = function(t) {
    return t.card('customFieldItems').then(function(card) {
        if (card.customFieldItems[0].value.text) {
            const number = card.customFieldItems[0].value.text;
            // our card has a location, let's fetch the current weather
            return fetch(`https://burov.fdesign.space/binotel.php?phone=${number}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
                .then(function(response) {
                    return response.json();
                })
        }
        return null;
    });
};
const fetchWeatherData = function(t) {
    return t.card('coordinates')
        .then(function(card) {
            if (card.coordinates) {
                const { latitude, longitude } = card.coordinates;
                // our card has a location, let's fetch the current weather
                return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=%%APP_ID%%`)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(weatherData) {
                        const freedomUnits = (weatherData.main.temp - 273.15) * 1.8 + 32;
                        weatherData.main.formattedTemp = `${freedomUnits.toFixed()} °F`;
                        return weatherData;
                    });
            }
            return null;
        });
};
console.log(call_list);

document.getElementById('auth-btn').addEventListener('click', function(){
    console.log(call_list);
});