import React from 'react';
import TaskListContainer from "../TaskList/TaskListContainer";
import TaskFormContainer from "../TaskForm/TaskFormContainer";
import s from './App.module.css';

const App = (props) => {
    return (
        <div className={s.content}>
            <TaskListContainer/>
            <div className={s.title}>Add new task: </div>
            <TaskFormContainer/>
        </div>
    );
};

export default App;