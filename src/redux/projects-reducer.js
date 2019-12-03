import {addProject, getProjects} from '../api/api';

const SET_PROJECTS = 'SET-PROJECTS';
const TOGGLE_LOADING_PROJECTS = 'TOGGLE-LOADING-PROJECTS';

const initial_state = {
    projects: [],
    isLoading: true
};

const projectsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.projects
            };
        case TOGGLE_LOADING_PROJECTS:
            return {
                ...state,
                isLoading: action.toggle
            };
        default:
            return state;
    }
};

export const setProjectsAC = (projects) => ({type: SET_PROJECTS, projects});
export const toggleLoadingProjectsAC = (toggle) => ({type: TOGGLE_LOADING_PROJECTS, toggle});

export const addProjectTC = (name) => (dispatch) => {
    dispatch(toggleLoadingProjectsAC(true));
    addProject(name)
        .then(response => {
            if (response == null) {
                dispatch(getProjectsTC());
            }
        });
};

export const getProjectsTC = () => (dispatch) => {
    dispatch(toggleLoadingProjectsAC(true));
    getProjects()
        .then(response => {
            dispatch(setProjectsAC(response));
            dispatch(toggleLoadingProjectsAC(false));
        });
};

export default projectsReducer;