const defaultState = {
    name: "",
    surname: "",
    email: "",
    password: "",
    data: []
}

const ADD_NAME = "ADD_NAME";
const ADD_SURNAME = "ADD_SURNAME";
const ADD_EMAIL = "ADD_EMAIL";
const ADD_PASSWORD = "ADD_PASSWORD";

export const userRegisterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {...state, name: action.payload}
        case ADD_SURNAME:
            return {...state, surname: action.payload}
        case ADD_EMAIL:
            return {...state, email: action.payload}
        case ADD_PASSWORD:
            return {...state, password: action.payload}
        default:
            return {...state}
    }
}

export const addRegisterName = (payload) => ({type: ADD_NAME, payload})
export const addRegisterSurname = (payload) => ({type: ADD_SURNAME, payload})
export const addRegisterEmail = (payload) => ({type: ADD_EMAIL, payload})
export const addRegisterPassword = (payload) => ({type: ADD_PASSWORD, payload})
