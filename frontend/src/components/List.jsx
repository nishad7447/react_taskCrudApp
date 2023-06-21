import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
import axios from 'axios'
import { baseURL } from '../utils/constant'

export default function List({index,id,task,updateMode,setUpdateUI} ) {

    const deleteTask=()=>{
        axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
            console.log(res);
            setUpdateUI((prevState)=>!prevState)
        })
    }
  return (
    <li>
        {index+1})...
        {task}
        <div className="icon_hold">
            <BiEditAlt className='icon' onClick={()=>{updateMode(id,task)}}/>
            <BsTrash className='icon' onClick={deleteTask}/>
        </div>
    </li>
  )
}
