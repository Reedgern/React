import React from 'react';
import s from './TaskInput.module.css';

const TaskInput = (props) => {
    return (
      <div>
          <input className={s.TaskInput} type='text' name={props.name} id={props.name} onChange={props.onChange} value={props.value}/>
      </div>
    );
};

export default TaskInput;