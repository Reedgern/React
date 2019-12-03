import React from 'react';
import s from './Task.module.css';

const Task = (props) => {
    // let deleteTask = () => {
    //     props.deleteTask(props.id);
    // }

    return (
        <div className={s.item}>
            <div>Name:{props.name}</div>
            <div>Description:{props.description}</div>
            <div>Priority:{props.priority}</div>
            {/*<button onClick={deleteTask}>Delete me!</button>*/}
        </div>
    )
};

export default Task;
