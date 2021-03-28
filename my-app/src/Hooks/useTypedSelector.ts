import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../Store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;