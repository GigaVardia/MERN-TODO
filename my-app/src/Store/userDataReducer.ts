import {UserStateAction, UserStateActionsTypes, UserStateTypes} from "../types/store/UserStateTypes";

const defaultState: UserStateTypes = {
    name: "",
    surname: "",
    email: "",
    id: "",
    data: []
}

export const userDataReducer = (state = defaultState, action: UserStateAction) => {
    switch (action.type) {
        case UserStateActionsTypes.ADD_NEW_USER_DATA:
            return {...state, ...action.payload}
        case UserStateActionsTypes.ADD_NEW_TODO:
            return {...state, data: [...state.data, action.payload]}
        case UserStateActionsTypes.CHANGE_TODO:
            let newChangedData = [...state.data];
            newChangedData[action.payload.index] = {task: action.payload.task}
            return {...state, data: newChangedData}
        case UserStateActionsTypes.DELETE_TODO:
            return {...state, data: state.data.filter((item, index) => index !== action.payload.index)}
        default:
                return {...state}
    }
}



