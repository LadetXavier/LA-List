import React from 'react'
import taskList from "./taskList.json";
import Task from './Task';
import {taskObject} from './TypeDeclaration';
//asset
import arrow from "../../../assets/images/Arrow-icon.png";

const Character = ({name}:{name:string}) => {
  
  let dailies: taskObject[] = taskList.Dailies;
  let taskListing = dailies.map((element,i) => (
      <Task taskDetail={{"name": element.name, "icon":element.icon}} key={i}/>
    ));  
  return (
    <section className='character'>
        <div className="character__header">
          <div className="character__arrow-container">
            <img className="character__arrow" src={arrow}/>
          </div>
          <div className="character__name-container">
            {name}
          </div>
        </div>
        <div className="character__checks">{taskListing}</div>
        <div className="character__quest"></div>
    </section>
  )
}

export default Character
