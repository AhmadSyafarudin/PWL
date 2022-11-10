import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from './../pages/form';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function List() {
    const [todo, setTodo] = useState([]);
 
    useEffect(() => {
        getList();
    }, []);
 
    const getList = async () => {
        const response = await axios.get('http://localhost:5000/todo');
        setTodo(response.data);
    }


    const deleteList = async (id) => {
        await axios.delete(`http://localhost:5000/todo/${id}`);
        getList();
    }

    const disableList = (id) => {
        document.getElementById('div' + id).classList.add('bg-neutral-800');
        document.getElementById('button' + id).classList.remove('bg-green-400');
        document.getElementById('button' + id).classList.add('bg-neutral-600');
        document.getElementById('title' + id).classList.remove('text-white');
        document.getElementById('title' + id).classList.add('text-gray-400');
        document.getElementById('desc' + id).classList.remove('text-white');
        document.getElementById('desc' + id).classList.add('text-gray-400');
        document.getElementById('icon' + id).classList.remove('text-white');
        document.getElementById('icon' + id).classList.add('text-gray-400');
    }

    const todoList = todo.map((info) => {
        return (
            <div className="flex px-4 my-2">
                <BsFillArrowRightSquareFill className="text-white text-6xl my-1 w-8 mx-2" id={'icon' + info.id}/>
                <div className="flex justify-between w-full bg-neutral-600 px-4" id={'div' + info.id}>
                    <div className="w-full mr-2 mt-2">
                        <h1 className="font-sans text-lg font-bold text-white" id={'title' + info.id}>{info.title}</h1>
                        <hr />
                        <h1 className="font-sans text-base text-white" id={'desc' + info.id}>{info.desc}</h1>
                    </div>
                    <button  className="font-sans text-base font-medium text-white px-2 my-2 bg-green-400 w-50 mr-4" id={'button' + info.id} onClick={()=> disableList(info.id)}>Selesai</button>
                    <button className="font-sans text-base font-medium text-white px-2 my-2 bg-yellow-400 w-50 mr-4 text-center"><Link to={`/edit/${info.id}`}>Edit</Link></button>
                    <button onClick={ () => deleteList(info.id) } className="font-sans text-base font-medium text-white px-2 my-2 bg-red-400 w-50">Delete</button>
                </div>
            </div>
        );
    });

    return (
        <div>
            <Form func={getList}/>
            {todoList}
        </div>
    );
}

export default List;
