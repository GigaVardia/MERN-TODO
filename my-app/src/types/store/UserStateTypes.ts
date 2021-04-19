export interface UserStateTypes {
    name: string,
    surname: string,
    email: string,
    id?: string,
    data: any[]
}

export enum UserStateActionsTypes {
    ADD_NEW_USER_DATA = "ADD_NEW_USER_DATA",
    ADD_NEW_TODO = "ADD_NEW_TODO",
    CHANGE_TODO = "CHANGE_TODO",
    DELETE_TODO = "DELETE_TODO",
    DELETE_ALL = "DELETE_ALL",
    INITIALIZE = "INITIALIZE"
}

interface AddNewUserDataAction {
    type: UserStateActionsTypes.ADD_NEW_USER_DATA,
    payload: object
}

interface InitializeAction {
    type: UserStateActionsTypes.INITIALIZE
}

interface ClearTasks {
    type: UserStateActionsTypes.DELETE_ALL
}

interface AddNewTodoAction {
    type: UserStateActionsTypes.ADD_NEW_TODO,
    payload: {
        task: string
    }
}

interface ChangeTodoAction {
    type: UserStateActionsTypes.CHANGE_TODO,
    payload: {
        index: number,
        task: string
    }
}

interface DeleteTodoAction {
    type: UserStateActionsTypes.DELETE_TODO,
    payload: {
        index: number
    }
}

export type UserStateAction = InitializeAction | ClearTasks | AddNewTodoAction | AddNewUserDataAction | ChangeTodoAction | DeleteTodoAction