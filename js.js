// Converting fahrenheit to celsius
// fahrenheit = 450
// celsius = (fahrenheit - 32) * 5 / 9
// console.log(fahrenheit + ' °F = ' + celsius.toFixed(2) + ' °C');

apiKey = 'dcfb20b1418c65a124c79fabd0c38ee1'

input = () => {
  cityInput = document.getElementById('cityInput')
  cityName = document.getElementById('cityName')

  url = `http://api.openweathermap.org/data/2.5/find?q=${cityInput.value}&appid=${apiKey}&units=metric`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      temper = document.getElementById('temper')
      cityName.innerText = data.list[0].name

      title = document.getElementById('title')
      title.innerText = 'Weather of ' + data.list[0].name

      temper.innerText = data.list[0].main.temp + ' °C'
      cloud = document.getElementById('cloud')
      cloud.innerText = data.list[0].weather[0].main

      iconId = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`

      icon = document.getElementById('icon')
      icon.setAttribute('src', iconId)

      favicon = document.getElementById('favicon')
      favicon.setAttribute('href', iconId)

      document.getElementById('weather').style.display = 'flex'
    })
  cityInput.value = ''
  cityInput.focus()
}