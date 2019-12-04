import React from 'react';
import {addProjectTC} from '../../../redux/projects-reducer';
import {connect} from "react-redux";
import s from './ProjectForm.module.css';

class ProjectForm extends React.Component {
    state = {
        value: ''
    };

    handleChange = (e) => {this.setState({value: e.target.value})};

    addProject = () => {
        this.props.addProject(this.state.value);
        this.setState({value: ''});
    };

    render() {
        return (
            <div className={s.ProjectForm}>
                <span><b>Add new project</b></span>
                <input type='text' onChange={this.handleChange} value={this.state.value}/>
                <button onClick={this.addProject}>Add me now!</button>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addProject: (name) => {
            dispatch(addProjectTC(name));
        }
    };
};

export default connect(null, mapDispatchToProps)(ProjectForm);