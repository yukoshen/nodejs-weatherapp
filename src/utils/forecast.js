const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=97a5723f9b5bca28522f7531571ab97c&query=' + 
    encodeURIComponent(lat) + ',' + encodeURIComponent(long)

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to the weather service', undefined)
        } else if(body.error){
            callback(body.error.info, undefined)
        } else {
            callback(undefined, 
                // body.current.weather_descriptions[0] + '. It is currently ' 
                // + body.current.temperature + ' degrees out. It feels like ' 
                // + body.current.feelslike + ' degrees out.')
                {
                    weather_desc: body.current.weather_descriptions[0],
                    temperature: body.current.temperature,
                    feelslike: body.current.feelslike,
                    precip: body.current.precip,
                    humidity: body.current.humidity,
                    wind_speed: body.current.wind_speed
                })
            }
    })

}

module.exports = forecast