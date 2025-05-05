import React, { use } from "react";
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.prototype('http://localhost:3001/add', {task: task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='create_form'>
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}