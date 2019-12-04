import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div>ToDo List</div>
            <NavLink to={'/projects'}>To projects</NavLink>
        </div>
    );
};

export default Header;