const path = require('path')

const express = require('express')
const hbs     = require('hbs')

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

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Awesome Mausam',
        home: true
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        about: true
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
        return res.send({error: "Plese provide a message"})
    
    geocode(req.query.address, (gError, { latitude, longitude, location } = {}) => {
        if(gError) {
            return res.send({error: gError})
        }
        
        const units = req.query.units
        forecast({latitude, longitude, units}, (fError, forecastData) => {
            if(fError) {
                return res.send({error: fError})
            }
            
            res.send({
                query: req.query.address,
                location,
                forecast: forecastData
            })
        })
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Setting server at port ${port}.`)
})
