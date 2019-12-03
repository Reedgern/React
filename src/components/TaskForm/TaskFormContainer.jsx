import React from 'react';
import TaskForm from "./TaskForm";
import {addTask} from '../../redux/reducer';
import {connect} from "react-redux";
import withFormController from "../../HOCs/withFormController";

let initialState = {
    '#1': '',
    '#2': '',
    '#3': ''
};

let WrappedForm = withFormController(TaskForm);

class TaskFormContainer extends React.Component {
    state = initialState;

    addTask = () => {
        let new_task = {
            name: this.state['#1'],
            description: this.state['#2'],
            priority: this.state['#3']
        }
        this.props.addTask(new_task);
        this.setState(initialState);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <WrappedForm state={this.state} onChange={this.handleChange}/>
                <button onClick={this.addTask}>Add me!</button>
            </div>
        );
    }
}

let mapDispatchToProps = {
    addTask
};

export default connect(null, mapDispatchToProps)(TaskFormContainer);