const units = document.getElementsByName('setting-units')

const searchForm  = document.querySelector('#search-form')
const searchQuery = document.querySelector('#search-query')

const title1    = document.querySelector('#title-1')
const title2    = document.querySelector('#title-2')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = searchQuery.value
    let unit
    for(i = 0; i < units.length; i++) {
        if(units[i].checked) {
            unit = units[i].value
        }
    }

    const url = `/weather?address=${address}&units=${unit}`
    fetch(url).then(response => {
        response.json().then(data => {
            if(data.error) {
                title1.textContent = 'Error: '
                message1.textContent = data.error
                title2.textContent = ''
                message2.textContent = ''
                $("#WeatherInfo").collapse('show');
            } else {
                title1.textContent = 'Location: '
                message1.textContent = data.location
                title2.textContent = 'Forecast: '
                message2.textContent = data.forecast
                $("#WeatherInfo").collapse('show');
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