import React, { useState } from 'react';
import Form from './../pages/form';

function List() {
    const [todo, setTodo] = useState([{"id":1,"title":"ToDo","desc":"Tambahkan ToDo"}]);

    const todoList = todo.map((info) => {
        return (
            <div className="w-full bg-neutral-600 px-4">
                <h1 className="font-sans text-base font-medium text-white">{info.title}</h1>
                <h1 className="font-sans text-base font-medium text-white">{info.desc}</h1>
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
