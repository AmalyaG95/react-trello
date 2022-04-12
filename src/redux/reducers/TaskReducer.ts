import { ITaskState, TaskActionType, TaskReducerTypes } from "../../types/Task";

const initialState: ITaskState = {
    deletableTaskId: undefined,
};

const reducer = (state = initialState, action: TaskActionType): ITaskState => {
    switch (action.type) {
        case TaskReducerTypes.SET_DELETABLE_TASK_ID: {
            return {
                ...state,
                deletableTaskId: action.id,
            };
        }

        case TaskReducerTypes.REMOVE_DELETABLE_TASK_ID: {
            return {
                ...state,
                deletableTaskId: undefined,
            };
        }

        default:
            return state;
    }
};

export default reducer;
