import { page } from 'web-init'
import Navbar from 'src/components/Navbar'
import Searchbar from 'src/components/Searchbar'
import CurrentWeather from 'src/components/CurrentForecast'
import NextForecast from 'src/components/NextForecast'
import { useState } from 'react'

export default page({
  url: '/',
  component: ({}) => {
    const [city,setCity]=useState("surabaya")
    return <div className='w-full bg-[#97edf0]'>
      <Navbar/>
      <header className='w-full'>
      <div>
        <h1 className='text-3xl font-bold m-5 md:flex items-center justify-center'>
          Masukkan Kota yang Ingin Dicari
        </h1>
        <Searchbar city={city} setCity={setCity}/>
      </div>
    </header>
      <CurrentWeather city={city}/>
      <NextForecast city={city}/>
    </div>
  }
})