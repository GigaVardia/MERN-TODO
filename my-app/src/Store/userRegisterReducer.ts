import {
    UserRegisterAction,
    UserRegisterActionTypes,
    UserRegisterStateType
} from "../types/store/UserRegisterStateTypes";

const defaultState: UserRegisterStateType = {
    name: "",
    surname: "",
    email: "",
    password: "",
    data: []
}

export const userRegisterReducer = (state = defaultState, action: UserRegisterAction): UserRegisterStateType => {
    switch (action.type) {
        case UserRegisterActionTypes.ADD_NAME:
            return {...state, name: action.payload}
        case UserRegisterActionTypes.ADD_SURNAME:
            return {...state, surname: action.payload}
        case UserRegisterActionTypes.ADD_EMAIL:
            return {...state, email: action.payload}
        case UserRegisterActionTypes.ADD_PASSWORD:
            return {...state, password: action.payload}
        default:
            return {...state}
    }
}
