const searchForm = document.querySelector('form')
const search     = document.querySelector('input')

const slot1    = document.querySelector('#slot-1')
const slot2    = document.querySelector('#slot-2')
const Location = document.querySelector('#Location')
const Forecast = document.querySelector('#Forecast')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value
    const url = `/weather?address=${address}`
    fetch(url).then(response => {
        response.json().then(data => {
            if(data.error) {
                slot1.textContent = 'Error: '
                Location.textContent = data.error
                slot2.textContent = ''
                Forecast.textContent = ''
                $("#WeatherInfo").collapse('show');
            } else {
                slot1.textContent = 'Location: '
                Location.textContent = data.location
                slot2.textContent = 'Forecast: '
                Forecast.textContent = data.forecast
                $("#WeatherInfo").collapse('show');
            }
        })
    })
})
