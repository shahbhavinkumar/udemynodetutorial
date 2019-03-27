const request = require('request')


const geocode = (address, callback) =>{

    //the mapbox provides the json data with latitude and longitude. This data can be futhur used with the darksky to fetch the details
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hhaGJoYXZpbmt1bWFyIiwiYSI6ImNqdGl3d2I5dzB0bm00NHBrZzVxN3M3M2oifQ.hRSmB2vFLZPUIq5oBlKSgw'

    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find location', undefined)
        }
        else{

            callback(undefined,{
                 latitude : response.body.features[0].center[0],
                 longitude :response.body.features[0].center[1],
                 location:response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode