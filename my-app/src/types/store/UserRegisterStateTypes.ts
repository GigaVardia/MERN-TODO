export interface UserRegisterStateType {
    name: string,
    surname: string,
    email: string,
    password: string,
    data: any[]
}

export enum UserRegisterActionTypes {
    ADD_NAME = "ADD_NAME",
    ADD_SURNAME = "ADD_SURNAME",
    ADD_EMAIL = "ADD_EMAIL",
    ADD_PASSWORD = "ADD_PASSWORD"
}

interface SetRegisterName {
    type: UserRegisterActionTypes.ADD_NAME,
    payload: string
}

interface SetRegisterEmail {
    type: UserRegisterActionTypes.ADD_EMAIL,
    payload: string
}

interface SetRegisterSurname {
    type: UserRegisterActionTypes.ADD_SURNAME,
    payload: string
}

interface SetRegisterPassword {
    type: UserRegisterActionTypes.ADD_PASSWORD,
    payload: string
}

export type UserRegisterAction = SetRegisterEmail | SetRegisterName | SetRegisterPassword | SetRegisterSurname