import {UserLoginAction, UserLoginActionTypes, UserLoginState} from "../types/store/UserLoginStateTypes";

const defaultState: UserLoginState = {
    email: "",
    password: ""
}

export const userLoginReducer = (state = defaultState, action: UserLoginAction): UserLoginState => {
    switch (action.type) {
        case UserLoginActionTypes.ADD_EMAIL:
            return {...state, email: action.payload}
        case UserLoginActionTypes.ADD_PASSWORD:
            return {...state, password: action.payload}
        default:
            return {...state}
    }
}
