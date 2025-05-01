import React, { useState } from 'react'

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const apiKey = '0f9b24e3e6e4e2ff13fd5923a788562d'
        const formdata = new FormData(e.target)
        const city = formdata.get('inputC')

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setWeatherData(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    // Helper function to convert UNIX timestamp to local time string
    const formatTime = (timestamp, timezoneOffset) => {
        const date = new Date((timestamp + timezoneOffset) * 1000)
        return date.toUTCString().slice(17, 22) + ' (local)'
    }

    return (
        <div className='flex flex-col items-center p-4'>
            <form onSubmit={handleSubmit} className='m-4'>
                <label htmlFor="inputCity" className='mr-2'>Enter City:</label>
                <input
                    type="text"
                    name='inputC'
                    id='inputCity'
                    className='border-2 p-1 mr-2'
                />
                <button type="submit" className='bg-blue-500 text-white px-3 py-1 rounded'>Get Weather</button>
            </form>

            {weatherData && (
                <div className='bg-white shadow-md rounded-lg p-4 w-80 mt-4 text-center'>
                    <h2 className='text-xl font-semibold mb-2'>
                        {weatherData.name}, {weatherData.sys.country}
                    </h2>
                    <p className='text-gray-700 text-sm mb-1'>Temperature: {weatherData.main.temp}°C</p>
                    <p className='text-gray-700 text-sm mb-1'>Feels Like: {weatherData.main.feels_like}°C</p>
                    <p className='text-gray-700 text-sm mb-1'>Humidity: {weatherData.main.humidity}%</p>
                    <p className='text-gray-700 text-sm mb-1'>Weather: {weatherData.weather[0].description}</p>
                    <p className='text-gray-700 text-sm mb-1'>Wind: {weatherData.wind.speed} m/s</p>
                    <p className='text-gray-700 text-sm mb-1'>Cloudiness: {weatherData.clouds.all}%</p>
                    <p className='text-gray-700 text-sm mb-1'>Visibility: {weatherData.visibility / 1000} km</p>
                    <p className='text-gray-700 text-sm mb-1'>Pressure: {weatherData.main.pressure} hPa</p>
                    <p className='text-gray-700 text-sm mb-1'>
                        Sunrise: {formatTime(weatherData.sys.sunrise, weatherData.timezone)}
                    </p>
                    <p className='text-gray-700 text-sm mb-1'>
                        Sunset: {formatTime(weatherData.sys.sunset, weatherData.timezone)}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Dashboard
