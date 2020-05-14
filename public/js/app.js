const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 =  document.querySelector('#msg-1')
const forecast =  document.querySelector('#forecast')
const humid =  document.querySelector('#humid')
const wind_s =  document.querySelector('#wind_speed')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const url = '/weather?address=' + encodeURIComponent(location)

    msg1.textContent = 'Loading...'
    forecast.textContent = ''
    humid.textContent = ''
    wind_s.textContent = ''
    fetch(url).then((response) => {
    response.json().then((data => {
        if(data.error){
            msg1.textContent = data.error
        } else {
            msg1.textContent = data.location
            forecast.textContent = data.weather_desc + ", with a " + data.precip + "% chance of rain. " +
            'It is currently ' + data.temperature + " degrees out, but it feels like " + data.feelslike + ' degrees out.'
            humid.textContent = 'Humidity: ' + data.humidity + '%'
            wind_s.textContent = 'Wind speed: ' + data.wind_speed + 'kmph'
        }
    }))
})
})