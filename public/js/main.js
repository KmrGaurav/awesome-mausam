const searchForm = document.querySelector('form')
const search     = document.querySelector('input')

const Location   = document.querySelector('#Location')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $("#WeatherInfo").collapse('show');
})
