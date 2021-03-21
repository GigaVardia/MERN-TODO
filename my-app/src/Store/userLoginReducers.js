const defaultState = {
    email: "",
    password: ""
}

const ADD_EMAIL = "ADD_EMAIL";
const ADD_PASSWORD = "ADD_PASSWORD";

export const userLoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_EMAIL:
            return {...state, email: action.payload}
        case ADD_PASSWORD:
            return {...state, password: action.payload}
        default:
            return {...state}
    }
}

export const addLoginEmail = payload => ({type: ADD_EMAIL, payload});
export const addLoginPassword = payload => ({type: ADD_PASSWORD, payload});

