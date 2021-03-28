import {MainPageAction, MainPageActionTypes, MainPageStateTypes} from "../types/store/MainPageStateTypes";

const defaultState: MainPageStateTypes = {
    isUserLogged: false,
    loginFailed: false,
    signUpClicked: false
}

export const mainPageReducer = (state = defaultState, action: MainPageAction): MainPageStateTypes => {
    switch (action.type) {
        case MainPageActionTypes.SET_USER_LOGIN:
            return {...state, isUserLogged: action.payload}
        case MainPageActionTypes.SET_LOGIN_FAILED:
            return {...state, loginFailed: action.payload}
        case MainPageActionTypes.SET_SIGN_UP_CLICKED:
            return {...state, signUpClicked: action.payload}
        default:
            return state
    }
}
