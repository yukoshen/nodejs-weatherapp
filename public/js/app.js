console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const error =  document.querySelector('#error')
const forecast =  document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const url = 'http://localhost:3000/weather?address=' + encodeURIComponent(location)

    error.textContent = 'Loading...'
    forecast.textContent = ''
    fetch(url).then((response) => {
    response.json().then((data => {
        if(data.error){
            error.textContent = data.error
        } else {
            error.textContent = data.location
            forecast.textContent = data.forecast
        }
    }))
})
})