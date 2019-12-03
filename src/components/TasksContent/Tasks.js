import React from 'react';
import {initializeTasksTC} from '../../redux/tasks-reducer';
import TaskListContainer from "./TaskList/TaskList";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TaskFormContainer from "./TaskForm/TaskForm";

class Tasks extends React.Component {
    componentDidMount() {
        let projectId = this.props.match.params.projectId;
        this.props.initializeTasksTC(parseInt(projectId, 10));
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <TaskListContainer/>
                <TaskFormContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isLoading: state.tasks.isLoading
    };
};

let mapDispatchToProps = {
    initializeTasksTC
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tasks));