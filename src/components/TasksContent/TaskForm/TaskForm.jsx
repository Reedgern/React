import React from 'react';
import {addTaskTC} from '../../../redux/tasks-reducer';
import {connect} from "react-redux";
import withFormController from "../../../HOCs/withFormController";
import TaskInput from "./TaskInput/TaskInput";
import s from './TaskForm.module.css';

const TaskForm = (props) => {
    return (
        <div>
            Task name:<TaskInput name='#1' onChange={props.onChange} value={props.values['#1']}/>
            Task description:<TaskInput name='#2' onChange={props.onChange} value={props.values['#2']}/>
            Task priority:<TaskInput name='#3' onChange={props.onChange} value={props.values['#3']}/>
        </div>
    );
};

let initialState = {
    '#1': '',
    '#2': '',
    '#3': ''
};

let WrappedForm = withFormController(TaskForm);

class TaskFormContainer extends React.Component {
    state = initialState;

    addTask = () => {
        this.props.addTaskTC(this.props.projectId, this.state['#1'], this.state['#2'], this.state['#3']);
        this.setState(initialState);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div className={s.TaskFormContainer}>
                <div><b>Add new task</b></div>
                <WrappedForm state={this.state} onChange={this.handleChange}/>
                <button onClick={this.addTask}>Add task!</button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        projectId: state.tasks.projectId
    }
};

let mapDispatchToProps = {
    addTaskTC
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);