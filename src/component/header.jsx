import { FaList, FaLightbulb } from 'react-icons/fa';
import React from 'react';
import Clock from './clock';

const Header = () => {
    return(
        <header className="bg-green-600 px-4 py-1 h-8 flex justify-between">
            <div className="flex">
                <FaList className="text-white text-lg my-1 w-8"/> 
                <p className="font-sans text-base font-medium text-white">AplikasiApa</p>
            </div>
            <div className="flex">
                <FaLightbulb className="text-white text-lg my-1 w-8"/> 
                <p className="font-sans text-base font-medium text-white mx-2">Apa yang Harus Saya Kerjakan Hari Ini?</p>
                <Clock />
            </div>
        </header>
    )
}

export default Header;