import {createStore, combineReducers} from "redux";
import {userRegisterReducer} from "./userRegisterReducer";
import {userLoginReducer} from "./userLoginReducers";
import {mainPageReducer} from "./mainPageReducer";
import {userDataReducer} from "./userDataReducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    mainPageInfo: mainPageReducer,
    userData: userDataReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const Store = createStore(rootReducer)