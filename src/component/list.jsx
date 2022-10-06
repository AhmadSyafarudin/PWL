import React, { useState } from 'react';
import Form from './../pages/form';
import { BsFillArrowRightSquareFill } from "react-icons/bs";

function List() {
    const [todo, setTodo] = useState([{"id":1,"title":"ToDo","desc":"Tambahkan Catatan ToDo"}]);
    
    const disableList = (id) => {
        document.getElementById('div' + id).classList.add('bg-neutral-800');
        document.getElementById('button' + id).classList.remove('bg-red-400');
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
                    <button  className="font-sans text-base font-medium text-white px-2 my-2 bg-red-400" id={'button' + info.id} onClick={()=> disableList(info.id)}>Selesai</button>
                </div>
            </div>
        );
    });

    
    const addRows = (data) => {
        const total = todo.length;
        data.id = total + 1;
        const updated = [...todo];
        updated.push(data);
        setTodo(updated);
    };

    return (
        <div>
            <Form func={addRows} />
            {todoList};
        </div>
    );
}

export default List;
