const ADD_TASK = 'ADD-TASK';
const DELETE_TASK = 'DELETE-TASK';
const SORT_BY_NAME = 'SORT-BY-NAME';
const SORT_BY_PRIORITY = 'SORT-BY-PRIORITY';

let initialState = {
    tasks: [],
    id: 1
};

const reducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_TASK:
            let new_task = {
                id: state.id++,
                name: action.name,
                description: action.description,
                priority: action.priority
            };
            return {...state, tasks:[...state.tasks, new_task]};
        case DELETE_TASK:
            let arr = [...state.tasks];
            let idx = arr.findIndex((el, idx) => {return el.id === action.id});
            arr.splice(idx, 1);
            return {...state, tasks: arr};
        case SORT_BY_NAME:
            return {...state,
                tasks: [...state.tasks.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]};
        case SORT_BY_PRIORITY:
            return {...state,
                tasks: [...state.tasks.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))]};
        default:
            return state;
    }
};

export const addTask = (task) => ({type: ADD_TASK, name:task.name, description:task.description, priority:task.priority});
export const sortByName = () => ({type: SORT_BY_NAME});
export const sortByPriority = () => ({type: SORT_BY_PRIORITY});
export const deleteTask = (id) => ({type: DELETE_TASK, id});

export default reducer;