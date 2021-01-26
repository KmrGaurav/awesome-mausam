const units = document.getElementsByName('setting-units')

const searchForm  = document.querySelector('#search-form')
const searchQuery = document.querySelector('#search-query')

const title1         = document.querySelector('#title-1')
const message1       = document.querySelector('#message-1')
const tempTitle      = document.querySelector('#temp-title')
const temp           = document.querySelector('#temp')
const descTitle      = document.querySelector('#desc-title')
const desc           = document.querySelector('#desc')
const minTempTitle   = document.querySelector('#min-temp-title')
const minTemp        = document.querySelector('#min-temp')
const maxTempTitle   = document.querySelector('#max-temp-title')
const maxTemp        = document.querySelector('#max-temp')
const pressureTitle  = document.querySelector('#pressure-title')
const pressure       = document.querySelector('#pressure')
const humidityTitle  = document.querySelector('#humidity-title')
const humidity       = document.querySelector('#humidity')
const windSpeedTitle = document.querySelector('#wind-speed-title')
const windSpeed      = document.querySelector('#wind-speed')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = searchQuery.value
    let unit
    for(i = 0; i < units.length; i++) {
        if(units[i].checked) {
            unit = units[i].value
        }
    }

    title1.textContent         = 'Loading...'
    message1.textContent       = ''
    tempTitle.textContent      = ''
    temp.textContent           = ''
    descTitle.textContent      = '' 
    desc.textContent           = '' 
    minTempTitle.textContent   = ''
    minTemp.textContent        = '' 
    maxTempTitle.textContent   = '' 
    maxTemp.textContent        = ''  
    pressureTitle.textContent  = '' 
    pressure.textContent       = '' 
    humidityTitle.textContent  = '' 
    humidity.textContent       = ''
    windSpeedTitle.textContent = '' 
    windSpeed.textContent      = ''

    const url = `/weather?address=${address}&units=${unit}`
    fetch(url).then(response => {
        response.json().then(data => {
            if(data.error) {
                title1.textContent   = 'Error: '
                message1.textContent = data.error
                // $("#WeatherInfo").collapse('show');
            } else {
                title1.textContent        = 'Location: '
                message1.textContent      = data.location
                tempTitle.textContent     = 'Temperature: '
                temp.innerHTML            = data.forecast.temperature + giveTempUnit(unit)
                descTitle.textContent     = 'Description: '
                desc.textContent          = data.forecast.description 
                minTempTitle.textContent  = 'Minimum Temperature: '
                minTemp.innerHTML         = data.forecast.minimumTemp + giveTempUnit(unit)
                maxTempTitle.textContent  = "Maximum Temperature: "
                maxTemp.innerHTML         = data.forecast.maximumTemp + giveTempUnit(unit)
                pressureTitle.textContent = "Pressure: "
                pressure.textContent      = data.forecast.pressure + givePressureUnit(unit)
                humidityTitle.textContent = "humidity: "
                humidity.textContent      = data.forecast.humidity
                windSpeedTitle.textContent = "Wind Speed: "
                windSpeed.textContent      = data.forecast.windSpeed + giveWindSpeedUnit(unit)
                // $("#WeatherInfo").collapse('show');
            }
        })
    })
})

const disappearInfo = () => {
    $("#WeatherInfo").collapse('hide');
}

const toggleSettings = () => {
    $("#Setting").collapse('toggle');
}

const giveTempUnit = (unit) => {
    if(unit === 'standard') {
        return ' K'
    } else if(unit === 'metric') {
        return ' <span>&#176;</span>C'
    } else if(unit === 'imperial') {
        return ' <span>&#176;</span>F'
    }
}

const givePressureUnit = (unit) => {
    if(unit === 'standard') {
        return ' atm'
    } else if(unit === 'metric') {
        return ' Pa'
    } else if(unit === 'imperial') {
        return ' psi'
    }
}
const giveWindSpeedUnit = (unit) => {
    if(unit === 'standard') {
        return ' m/s'
    } else if(unit === 'metric') {
        return ' m/s'
    } else if(unit === 'imperial') {
        return ' knots'
    }
}
