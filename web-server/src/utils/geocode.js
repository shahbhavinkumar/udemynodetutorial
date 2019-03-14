const request = require('request')
debugger
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=dekalb`+`&key=AIzaSyDfoXlNvBKQZuAsPRDALFvzqM7hnGoHt9Y`;


const geocode = (address, callback) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`+`&key=AIzaSyDfoXlNvBKQZuAsPRDALFvzqM7hnGoHt9Y`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.message||body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode