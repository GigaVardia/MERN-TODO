export interface UserLoginState {
    email: string,
    password: string
}

export enum UserLoginActionTypes {
    ADD_EMAIL = "ADD_EMAIL",
    ADD_PASSWORD = "ADD_PASSWORD"
}

interface SetUserEmail {
    type: UserLoginActionTypes.ADD_EMAIL,
    payload: string
}

interface SetUserPassword {
    type: UserLoginActionTypes.ADD_PASSWORD,
    payload: string
}

export type UserLoginAction = SetUserEmail | SetUserPassword;