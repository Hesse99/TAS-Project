import { SET_TASKS, SET_TASK_ID } from './actions';

const initialState = {
    tasks: [],
    taskID: 1,
    status: '',
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_TASK_ID:
            return { ...state, taskID: action.payload };
        default:
            return state;
    }
}
function reducer(state = initialState, action)
{
    switch(action.type) {
        case 'setStatus':
         return {...state, status: action.payload}
        default:
         return state;
    }
}

export default taskReducer;