import React from 'react';
import TaskList from "./TaskList";
import {connect} from "react-redux";
import {deleteTask, sortByName, sortByPriority} from '../../redux/reducer';

let mapStateToProps = (state) => ({
        tasks: state.tasks
    }
);

let mapDispatchToProps = {
    deleteTask,
    sortByName,
    sortByPriority
};

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;