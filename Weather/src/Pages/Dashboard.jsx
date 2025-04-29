import React from 'react'

const Dashboard = () => {

    const fetchWeather = async() => {
        const apiKey = '0f9b24e3e6e4e2ff13fd5923a788562d'
        const [city, setCity] = ('daran')
        
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

            if(response.ok){
                const data = await response.json()
            }
        }
        catch(err){
            console.log(err);
            
        }

    }



  return (
    <>
    <div className='flex justify-center bg-gray-300'>
        <h1 className='text-white font-bold' >Weather</h1>
        <label htmlFor="weatherInp"></label>
        <input className='' type="text"  id="weatherInp" />
    </div>
    </>
  )
}

export default Dashboard