const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=97a5723f9b5bca28522f7531571ab97c&query=cebu'

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to the weather service')
//     } else if(response.body.error){
//         console.log(response.body.error.info)
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' 
//         + response.body.current.temperature + ' degrees out. It feels like ' 
//         + response.body.current.feelslike + ' degrees out.')
//     }
    
// })

// const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Cebu.json?access_token=pk.eyJ1Ijoia2pzaWFkb3IiLCJhIjoiY2thNHFuYWs2MDV4ZzNsb2U0d2RjdDRwbSJ9.93kVJRS2OUc0wms49bdPyA&limit=1'

// request({url: mapboxUrl, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to the weather service')
//     } else if(response.body.features.length === 0){
//         console.log('No matching results')
//     } else {
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//         console.log('Latitude: ' + lat + ', Longtitide: ' + long)
//     }
    
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2pzaWFkb3IiLCJhIjoiY2thNHFuYWs2MDV4ZzNsb2U0d2RjdDRwbSJ9.93kVJRS2OUc0wms49bdPyA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0){
            callback('No matching results. Try again', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode