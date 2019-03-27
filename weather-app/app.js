const geocode = require('./utils/geocode')
const fetchWeather = require('./utils/forecast')

if(!process.argv[2]){
    console.log("Please provide address")
}

geocode(process.argv[2], (error, data) => {

    if (error) {
        return console.log(error);
    }

    fetchWeather(data.longitude, data.latitude, (data1, error) => {
        if (error) {
            return console.log(error);
        }

        console.log(data.location)
        console.log(data1)
    })
})


