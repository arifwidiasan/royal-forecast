import { useState,useEffect } from "react"
import { ForecastData } from "types/forecast"
import clear from "../icons/Clear.png"
import clouds from "../icons/Clouds.png"
import rain from "../icons/Rain.png"

interface NextForecastProps{
    city: string
}

function icons(weather:string){
    switch (weather) {
        case "Rain":
            return rain
            break;
        case "Clear":
            return clear
            break;
        case "Clouds":
            return clouds
            break;
        default:
            return clear
            break;
    }
}

function NextForecast(props:NextForecastProps) {
    const [forecastData,setForecastData]=useState<ForecastData>()
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&cnt=5&units=metric&appid=e6c9c2da6dca36fbce2fba37e5b3a1be`).then(res=>{
            res.json().then(data=>{
                setForecastData(data)
                console.log(data)
            })
        })
    },[props.city])
    return(
        <div className="flex justify-center">
            <div className="bg-[#86e1e4] shadow rounded-2xl overflow-hidden p-6 m-5 w-3/6">
                <h6 className="font-medium text-lg">Cuaca Selanjutnya</h6>
                <div className="flex justify-between overflow-x-auto">
                    {forecastData?.list==undefined?(
                        <div>Tidak Ada Data</div>
                    ):
                    (
                        <>
                        {forecastData?.list.map((list,index)=>{
                        return (
                        <div className="flex flex-col items-center mt-4">
                            <h6 className="font-semibold text-lg">
                                {(index+1)*3} jam
                            </h6>
                            <img className="w-16 h-16 m-3 drop-shadow-lg" src={icons(list.weather[0].main)}/>
                            <p className="font-semibold text-lg">
                                {list.weather[0].description}
                            </p>
                            <span className="text-lg w-18 text-center">
                                {list.main.temp_min}
                                <sup>&deg;</sup>
                                <small>/</small>
                                {list.main.temp_max}
                                <sup>&deg;</sup>
                            </span>
                        </div>
                        )
                    })}
                        </>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default NextForecast