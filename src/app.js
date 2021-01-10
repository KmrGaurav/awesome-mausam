const path = require('path')

const express = require('express')

const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')

// ------------------------- Just for command line -------------------------
if(process.env.JUST_COMMAND_LINE) {
    const args = process.argv
    const address = args[2]

    if(args.length < 3) {
        return console.log('Please provide an address.')
    } else if(args.length > 3) {
        return console.log('Please put qoutes around address with space(s).')
    }

    return geocode(address, (gError, { latitude, longitude, location } = {}) => {
        if(gError) {
            return console.log(gError)
        }
        
        forecast(latitude, longitude, (fError, forecastData) => {
            if(fError) {
                return console.log(fError)
            }
            
            console.log(location)
            console.log(forecastData)
        })
    })
}
// ------------------------- Just for command line -------------------------

// ------------------------- Website stuff starts here -------------------------
const app = express()

app.set('view engine', 'hbs')
const viewPath = path.join(__dirname, '../templates/views')
app.set('views', viewPath)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {

    })
})

app.get('/about', (req, res) => {
    res.render('about', {

    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Setting server at port ${port}.`)
})
