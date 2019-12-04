import React from 'react';
import {connect} from "react-redux";
import {nameSortAC, prioritySortAC} from '../../../redux/tasks-reducer';
import Task from "./Task/Task";
import s from './TaskList.module.css';

const TaskList = (props) => {
    let list = props.tasks.map(t => <Task {...t} key={t.id}/>);
    if (list.length === 0) {
        return (
            <div>There are no tasks yet</div>
        );
    }
    return (
        <div className={s.tasksContainer}>
            {list}
            <button onClick={props.nameSortAC}>Sort by name</button>
            <button onClick={props.prioritySortAC}>Sort by priority</button>
        </div>
    );
};

let mapStateToProps = (state) => ({
        tasks: state.tasks.tasks
    }
);

let mapDispatchToProps = {
    nameSortAC,
    prioritySortAC
};

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;