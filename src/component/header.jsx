import { FaWhatsapp, FaUserCircle } from 'react-icons/fa';
import React from 'react';

const Header = () =>{
    return(
        <header className="bg-green-600 px-4 py-1 h-8 flex justify-between">
            <div className="flex">
                <FaWhatsapp className="text-white text-lg my-1 w-8"/> 
                <p className="font-sans text-base font-medium text-white">AplikasiApa</p>
            </div>
            <div className="flex">
                <FaUserCircle className="text-white text-lg my-1 w-8"/> 
                <p className="font-sans text-base font-medium text-white">Nama Saya</p>
            </div>
        </header>
    )
}

export default Header;