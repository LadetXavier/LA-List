import React from 'react'

import {taskObject} from './TypeDeclaration';

const Task = ({taskDetail}:{taskDetail:taskObject}) => {
    
    let iconOrName = (taskDetail:taskObject) => {
        if(taskDetail.icon === "none") {
            return(taskDetail.name)
        }
        else {
             return(
               <img className='task__icon' src= {require(`../../../assets/images/${taskDetail.icon}.png`  )}/>
               );
        }
    }

  return (
    <div className='task-container'>
        <label className="task__label" id={taskDetail.name}>{iconOrName(taskDetail)}</label>
        <input className="task__checkbox" type="checkbox" id={taskDetail.name}/>

    </div>
  )
}


export default Task
