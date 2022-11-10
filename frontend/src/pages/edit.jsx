import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function Edit(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getListById();
    }, []);

    const getListById = async () => {
        const response = await axios.get(`http://localhost:5000/todo/${id}`);
        setTitle(response.data.title);
        setDesc(response.data.desc);
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    const changeDesc = (event) => {
        setDesc(event.target.value);
    };

    const updateTodo = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/todo/${id}`,{
            title: title,
            desc: desc
        });
        navigate('/');
    }

    console.log(title);
    return (
        <div className="py-3 px-4">
            <label className="font-sans text-base font-medium text-white px-2">ToDo </label>
            <input className="mr-4" type="text" value={title} onChange={changeTitle} />
            <label className="font-sans text-base font-medium text-white px-2">Keterangan</label>
            <input className="mr-4" type="text" value={desc} onChange={changeDesc} />
            <button className="font-sans text-base font-medium text-white px-2 bg-blue-500" onClick={updateTodo}>Ubah</button>
        </div>
    );

}

export default Edit;
