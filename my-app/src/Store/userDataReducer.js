const defaultState = {
    name: "",
    surname: "",
    email: "",
    id: "",
    data: []
}

const ADD_NEW_USER_DATA = "ADD_NEW_USER_DATA";
const ADD_NEW_TODO = "ADD_NEW_TODO";
const CHANGE_TODO = "CHANGE_TODO";
const DELETE_TODO = "DELETE_TODO";

export const userDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_USER_DATA:
            return {...state, ...action.payload}
        case ADD_NEW_TODO:
            return {...state, data: [...state.data, action.payload]}
        case CHANGE_TODO:
            let newChangedData = [...state.data];
            newChangedData[action.payload.index] = {task: action.payload.task}
            return {...state, data: newChangedData}
        case DELETE_TODO:
            return {...state, data: state.data.filter((item, index) => index !== action.payload.index)}
        default:
                return {...state}
    }
}

export const addNewUserData = payload => ({type: ADD_NEW_USER_DATA, payload})
export const addNewTodo = payload => ({type: ADD_NEW_TODO, payload})
export const changeTodo = payload => ({type: CHANGE_TODO, payload})
export const deleteTodo = payload => ({type: DELETE_TODO, payload})



