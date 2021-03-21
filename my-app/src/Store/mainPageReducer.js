const defaultState = {
    isUserLogged: false,
    loginFailed: false,
    signUpClicked: false
}

const SET_USER_LOGIN_ACTIVE = "SET_USER_LOGIN_ACTIVE";
const SET_USER_LOGIN_INACTIVE = "SET_USER_LOGIN_INACTIVE";

const SET_LOGIN_FAILED_TRUE = "SET_LOGIN_FAILED_TRUE";
const SET_LOGIN_FAILED_FALSE = "SET_LOGIN_FAILED_FALSE";

const SET_SIGN_UP_CLICKED_TRUE = "SET_SIGNED_UP_CLICKED_TRUE";
const SET_SIGN_UP_CLICKED_FALSE = "SET_SIGNED_UP_CLICKED_FALSE";

export const mainPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN_ACTIVE:
            return {...state, isUserLogged: true}
        case SET_USER_LOGIN_INACTIVE:
            return {...state, isUserLogged: false}
        case SET_LOGIN_FAILED_TRUE:
            return {...state, loginFailed: true}
        case SET_LOGIN_FAILED_FALSE:
            return {...state, loginFailed: false}
        case SET_SIGN_UP_CLICKED_TRUE:
            return {...state, signUpClicked: true}
        case SET_SIGN_UP_CLICKED_FALSE:
            return {...state, signUpClicked: false}
        default:
            return state
    }
}

export const setUserLoginActive = () => ({type: SET_USER_LOGIN_ACTIVE});
export const setUserLoginInActive = () => ({type: SET_USER_LOGIN_INACTIVE});

export const setLoginFailedTrue = () => ({type: SET_LOGIN_FAILED_TRUE});
export const setLoginFailedFalse = () => ({type: SET_LOGIN_FAILED_FALSE});

export const setSignUpClickedTrue = () => ({type: SET_SIGN_UP_CLICKED_TRUE});
export const setSignUpClickedFalse = () => ({type: SET_SIGN_UP_CLICKED_FALSE});