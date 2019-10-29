import React from 'react';
import Task from "../Task/Task";
import s from './TaskList.module.css';

const TaskList = (props) => {
    let list = props.tasks.map(f => <Task {...f} deleteTask={props.deleteTask}/>)

    return (
        <div className={s.tasksContainer}>
            {list}
            <button onClick={props.sortByName}>Sort by name</button>
            <button onClick={props.sortByPriority}>Sort by priority</button>
        </div>
    );
};

export default TaskList;