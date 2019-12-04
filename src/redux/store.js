import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import tasksReducer from "./tasks-reducer";
import projectsReducer from "./projects-reducer";

let reducers = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;