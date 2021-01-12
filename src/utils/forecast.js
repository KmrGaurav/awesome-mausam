const request = require('request')

const forecast = ({latitude, longitude, units} = {}, callback) => {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`

    request({ url, json: true}, (error, {body}={}) => {
        if(error) {
            callback('Unable to connect to weather server', undefined)
        } else if(body.cod === 404) {
            callback('Unable to find location', undefined)
        } else if(body.cod === 400) {
            callback('Nothing provided to find', undefined)
        } else if(body.cod === 401) {
            callback('Invalid API key', undefined)
        } else {
            callback(undefined, {
                description: body.weather[0].description,
                temperature: body.main.temp,
                minimumTemp: body.main.temp_min,
                maximumTemp: body.main.temp_max,
                pressure   : body.main.pressure,
                humidity   : body.main.humidity,
                windSpeed  : body.wind.speed
            })
        }
    })
}

module.exports = forecast