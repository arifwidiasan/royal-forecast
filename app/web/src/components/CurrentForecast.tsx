function CurrentWeather() {
    return(
        <div className="flex justify-center">
        <div className="bg-[#86e1e4] shadow rounded-2xl p-5 m-5 flex-col w-3/6">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h6 className="font-semibold text-lg">Cuaca Saat ini</h6>
            </div>
            <div className="flex flex-wrap md:justify-start">
                <div className="flex flex-col m-6 w-96 md:m-6">
                    <h4 className="font-semibold text-xl mb-8">Surabaya</h4>
                    <div style={{ display: 'flex' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <span className="font-extralight text-8xl ml-6 leading-none">
                        30
                        <sup className="leading-[0]">&deg;</sup>
                        </span>
                    </div>
                    <h6 className="text-lg text-left">Sangat Cerah</h6>
                </div>
                <div className="flex flex-col m-8 ml-8">
                    <p className="text-xl">
                        Terasa Seperti 30
                        <sup>&deg;</sup>
                    </p>
                    <div className="flex mb-8 w-8">
                        <div className="flex items-center font-medium text-xl mt-3 mr-10">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                            <p>
                                34<sup>&deg;</sup>
                            </p>
                        </div>
                        <div className="flex items-center font-medium text-xl mt-3 mr-10">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                            <p>
                                29<sup>&deg;</sup>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start mb-3">
                        <div className="flex items-center text-base w-32">
                            <svg className="w-6 h-6 mr-4 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                            Humidity
                        </div>
                        <span className="font-medium text-base">
                            70%
                        </span>
                    </div>
                    <div className="flex items-center justify-start mb-3">
                        <div className="flex items-center text-base w-32">
                        <svg className="w-6 h-6 mr-4 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            Wind
                        </div>
                        <span className="font-medium text-base">
                            10Kph
                        </span>
                    </div>
                    <div className="flex items-center justify-start mb-3">
                        <div className="flex items-center text-base w-32">
                        <svg className="w-6 h-6 mr-4 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                            Pressure
                        </div>
                        <span className="font-medium text-base">
                            1011hPa
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CurrentWeather