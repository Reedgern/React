import React from 'react';
import {NavLink} from "react-router-dom";

const Project = (props) => {
    return (
        <div>
            <div><NavLink to={`/projects/${props.id}`}>{props.name}</NavLink></div>
        </div>
    )
};

export default Project;