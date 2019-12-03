import {addTask, getTasks} from '../api/api';

const NAME_SORT = 'NAME-SORT';
const PRIORITY_SORT = 'PRIORITY-SORT';
const TASKS_INITIALIZED_SUCCESS = 'TASKS-INITIALIZED-SUCCESS';
const SET_TASKS = 'SET-TASKS';

const TOGGLE_LOADING_TASKS = 'TOGGLE-LOADING-TASKS';

const initialState = {
    tasks: [],
    isInitialized: false,
    projectId: null
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        case NAME_SORT: {
            return {
                ...state,
                tasks: [...state.tasks.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
            };
        }
        case PRIORITY_SORT: {
            return {
                ...state,
                tasks: [...state.tasks.sort((a, b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))]
            };
        }
        case TASKS_INITIALIZED_SUCCESS:
            return {
                ...state,
                projectId: action.projectId
            };
        case TOGGLE_LOADING_TASKS:
            return {
                ...state,
                isInitialized: action.toggle
            };
        default:
            return state;
    }
};

export const nameSortAC = () => ({type: NAME_SORT});
export const prioritySortAC = () => ({type: PRIORITY_SORT});
export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks});
export const initializedSuccessAC = (projectId) => ({type: TASKS_INITIALIZED_SUCCESS, projectId});
export const toggleLoadingTasksAC = (toggle) => ({type: TOGGLE_LOADING_TASKS, toggle});

export const addTaskTC = (projectId, name, description, priority) => (dispatch) => {
    dispatch(toggleLoadingTasksAC(false));
    priority = parseInt(priority, 10);
    addTask(projectId, name, description, priority)
        .then(response => {
            if (response === null) {
                dispatch(getTasksTC(projectId));
            }
        });
};

export const getTasksTC = (projectId) => (dispatch) => {
    dispatch(toggleLoadingTasksAC(false));
    return getTasks(projectId)
        .then(response => {
            dispatch(setTasksAC(response));
            dispatch(toggleLoadingTasksAC(true));
        });
};

export const initializeTasksTC = (projectId) => (dispatch) => {
    dispatch(getTasksTC(projectId))
        .then(() => {
            dispatch(initializedSuccessAC(projectId));
        })
};

export default tasksReducer;