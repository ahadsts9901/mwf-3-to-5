async function getWeather(event) {

    event.preventDefault();

    // cityname input

    let cityName = document.getElementById("userInput").value

    // api key

    let API_KEY = '26ae9a0b27a97215beaa4b5df9aa15fb'

    // promise

    try {

        // api integration

        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

        // console.log(response.data);

        document.getElementById("temperature").innerText = response.data.main.temp + " °C"
        document.getElementById("cityName").innerText = response.data.name
        document.getElementById("countryCode").innerText = response.data.sys.country
        

    } catch (error) {

        // error handling

        console.log(error);
    }

    event.target.reset()

}