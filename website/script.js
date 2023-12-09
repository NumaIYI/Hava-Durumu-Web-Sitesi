const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'ce856ab58e85fc0e15d9a9413aee5ce3'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{
    let city = document.querySelector('.ccity')
    city.innerHTML = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const setFirst = () => {
    firstgetResult('istanbul')
    firstgetResult('izmir')
    firstgetResult('ankara')
    firstgetResult('bursa')
    firstgetResult('adana')
    firstgetResult('diyarbakir')
    firstgetResult('trabzon')
    firstgetResult('batman')
}

const firstgetResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(result => {
            // Her bir şehir bölümüne ait unique ID ile ilgili öğeleri seç
            let city = document.querySelector(`#${cityName} .location`);
            city.innerHTML = `${result.name}, ${result.sys.country}`;

            let temp = document.querySelector(`#${cityName} .temperature`);
            temp.innerHTML = `${Math.round(result.main.temp)}°C`;

            let desc = document.querySelector(`#${cityName} .description`);
            desc.innerHTML = result.weather[0].description;

            let minmax = document.querySelector(`#${cityName} .tempminmax`);
            minmax.innerHTML = `${Math.round(result.main.temp_min)}°C /
                                ${Math.round(result.main.temp_max)}°C`;
        })
        .catch(error => console.log('Hava durumu bilgisi alınamadı', error));
}

document.addEventListener('DOMContentLoaded',setFirst)

