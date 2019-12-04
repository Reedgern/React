import React from 'react';
import Project from "./Project/Project";
import {connect} from "react-redux";
import s from './ProjectsList.module.css';

const ProjectsList = (props) => {
    let projectsElements = props.projects.map(p => <Project {...p} key={p.id}/>);
    return (
        <div className={s.ProjectsContainer}>
            <div><b>My projects</b></div>
            {projectsElements}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    };
};

export default connect(mapStateToProps, null)(ProjectsList);

