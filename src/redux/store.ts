import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import globalReducer from "./reducers/globalReducer";
import ModalReducer from "./reducers/ModalReducer";

const reducer = combineReducers({
    globalState: globalReducer,
    ModalState: ModalReducer,
});

export type reducerType = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(logger));
