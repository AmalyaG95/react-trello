import { createStore, applyMiddleware, combineReducers, Store, AnyAction, Middleware } from "redux";
import logger from "redux-logger";
import globalReducer from "./reducers/globalReducer";
import ModalReducer from "./reducers/ModalReducer";
import TaskReducer from "./reducers/TaskReducer";

const reducer = combineReducers({
    globalState: globalReducer,
    ModalState: ModalReducer,
    TaskState: TaskReducer,
});

export type reducerType = ReturnType<typeof reducer>;

export const store= createStore(reducer, applyMiddleware(logger as Middleware));
