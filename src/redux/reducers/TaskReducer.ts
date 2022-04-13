import { ITaskState, TaskActionType, TaskReducerTypes } from "../../types/Task";

const initialState: ITaskState = {
    deletableItemId: undefined,
};

const reducer = (state = initialState, action: TaskActionType): ITaskState => {
    switch (action.type) {
        case TaskReducerTypes.SET_DELETABLE_ITEM_ID: {
            return {
                ...state,
                deletableItemId: action.id,
            };
        }

        case TaskReducerTypes.REMOVE_DELETABLE_ITEM_ID: {
            return {
                ...state,
                deletableItemId: undefined,
            };
        }

        default:
            return state;
    }
};

export default reducer;
