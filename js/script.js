//Variáveis e seleções de eventos
const apiKey = "b52d97cb4426046b180f1f02776d30be"
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png"

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

//Funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElemen.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", ``)
}


//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

        const city = cityInput.value

        console.log(city)

})