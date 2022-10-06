import React, { useState } from 'react';

function Form(props) {
const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');

const changeTitle = (event) => {
	setTitle(event.target.value);
};

const changeDesc = (event) => {
	setDesc(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	    title,
	    desc,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setTitle('');
	setDesc('');
};

return (
	<div className="py-3 px-4">
	    <label className="font-sans text-base font-medium text-white px-2">ToDo </label>
	    <input className="mr-4" type="text" value={title} onChange={changeTitle} />
	    <label className="font-sans text-base font-medium text-white px-2">Keterangan</label>
	    <input className="mr-4" type="text" value={desc} onChange={changeDesc} />
	    <button  className="font-sans text-base font-medium text-white px-2 bg-blue-500" onClick={transferValue}>Tambah</button>
	</div>
);
}

export default Form;
