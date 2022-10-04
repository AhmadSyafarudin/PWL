import logo from "./../../logo.svg"
import React from 'react';

const Profile = () => {
    return (
        <div >
            <img src={logo} className="max-w-xs" alt="profile"/>
            <p>Nama</p>
            <p>Kontak</p>
            <p>Status</p>
        </div>
    )
}

export default Profile;