import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";
import App from "../App";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.date))
        .catch(err => console.log(err))
    }, [])

    const handleEdite = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Todo List</h2>
        <Create />
        {
           todos.length === 0 
           ?
           <div><h2>No Record</h2> </div>
           :
           todos.map(todo => (
            <div className= 'task'>
                <div className='checkbox' onClick={ () => handleEdite(todo__id)} >
                    {todo.done ? 
                    <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                :<BsCircleFill className='icon'/>
                    }
                  <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                    </div>
                    <div> 
                        <span><BsFillTrashFill className='icon' 
                            onClick={() => handleDelete(todo__id)}/></span>
                        </div>
                    </div>
                    
            ))
        }
        </div>
    )
}

export default Home