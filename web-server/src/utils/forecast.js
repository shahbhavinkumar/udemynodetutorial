const request = require('request')


const fetchWeather = (latitude, longitude, callback) => {

    const weatherURL = 'https://api.darksky.net/forecast/f2a45641750db63af018e9a7dd186804/' + latitude + ',' + longitude;

    request({ url: weatherURL, json: true }, (error, response) => {

        const responseObject ={
            error: response.body.error,
            temperature: response.body.currently.temperature
        }
        
        if (error) {
            callback('unable to connect to weather service', undefined)
        }

        else if (responseObject.error) {
            callback('unable to find the location', undefined)
        }

        else {
            callback(response.body.daily.data[0].summary + ' It is currently ' + responseObject.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = fetchWeather