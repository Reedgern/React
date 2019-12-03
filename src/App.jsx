import React from 'react';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Projects from "./components/ProjectsContent/Projects";
import Tasks from "./components/TasksContent/Tasks";

const App = (props) => {
    return (
        <div>
            <Header/>
            <Route exact path={'/projects'} render={() => <Projects/>}/>
            <Route path={'/projects/:projectId'} render={() => <Tasks/>}/>
        </div>
    );
};

export default App;