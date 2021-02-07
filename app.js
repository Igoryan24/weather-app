


    let form = document.querySelector("form");
    let input = document.querySelector("input");
    let inputVal = input.value;

    let day = new Date();
    document.querySelector('.date').innerHTML = day.toDateString();
    document.querySelector('.time').innerHTML = day.toLocaleTimeString();
 
    form.addEventListener("submit", e => {
    e.preventDefault()
    inputVal = input.value;
    if(inputVal && inputVal === input.value) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&APPID=5d066958a60d315387d9492393935c19`)

            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.querySelector('.city').textContent = data.name;
                document.querySelector('.country').innerHTML = data.sys.country;
                document.querySelector('.temp').innerHTML = /*'Temperature:' +*/  Math.round(data.main.temp) + '&deg';
                document.querySelector('.description').textContent = data.weather[0]['description'];
                document.querySelector('.feels-like').innerHTML = /*'Feels like:'*/ + Math.round(data.main.feels_like) + '&deg';
                document.querySelector('.humidity').textContent = /*'Humidity:' +*/ data.main['humidity'] + '%';
                document.querySelector('.pressure').textContent = /*'Pressure:' +*/ data.main['pressure'] + ' hPa';
                document.querySelector('.wind-speed').textContent = /*'Wind speed:'*/ + data.wind.speed + ' km/h';
                document.querySelector('.wind-deg').innerHTML = /*'Wind deg:'*/ + data.wind.deg + '&deg';
                document.querySelector('.img').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;

                    let sunrise = data.sys.sunrise;
                    let dateRice = new Date();
                    dateRice.setTime(sunrise);
                    let sunriseDate = (dateRice.getHours() - 12) + ":" + dateRice.getMinutes();
                        
                document.querySelector('.sunrise').innerHTML = /*'Sunrise:' +*/ sunriseDate + ' AM';

                    let sunset = data.sys.sunset;
                    let date = new Date();
                     date.setTime(sunset);
                    let sunsetDate = date.getHours() + ":" + date.getMinutes();
                    
                document.querySelector('.sunset').textContent = /*'Sunset:' +*/ sunsetDate + ' PM';
            })
        } else {
            alert('Please enter the correct city name');
            /*document.querySelector('.error').innerHTML = 'Please enter the correct city name';*/
        }
    });

/*function showWeather() { document.querySelector("button").addEventListener("click", showWeather)}*/

