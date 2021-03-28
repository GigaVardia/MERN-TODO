export interface MainPageStateTypes {
    isUserLogged: boolean,
    loginFailed: boolean,
    signUpClicked: boolean
}

export enum MainPageActionTypes {
    SET_USER_LOGIN = "SET_USER_LOGIN",
    SET_LOGIN_FAILED = "SET_LOGIN_FAILED",
    SET_SIGN_UP_CLICKED = "SET_SIGN_UP_CLICKED",
}

interface SetUserLoginAction {
    type: MainPageActionTypes.SET_USER_LOGIN,
    payload: boolean
}

interface SetLoginFailedAction {
    type: MainPageActionTypes.SET_LOGIN_FAILED,
    payload: boolean
}

interface SetSignUpClickedAction {
    type: MainPageActionTypes.SET_SIGN_UP_CLICKED,
    payload: boolean
}

export type MainPageAction = SetUserLoginAction | SetLoginFailedAction | SetSignUpClickedAction;

