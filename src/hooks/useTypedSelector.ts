import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducerType } from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<reducerType> = useSelector;
