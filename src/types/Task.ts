export enum TaskReducerTypes {
    SET_DELETABLE_ITEM_ID = "SET_DELETABLE_ITEM_ID",
    REMOVE_DELETABLE_ITEM_ID = "REMOVE_DELETABLE_ITEM_ID",
    // SET_IS_EDITABLE = "SET_IS_EDITABLE",
    // REMOVE_IS_EDITABLE = "REMOVE_IS_EDITABLE",
}

export interface ITaskState {
    deletableItemId: string | undefined;
    // isEditable: boolean;
}

interface ISetdeletableItemIdAction {
    type: TaskReducerTypes.SET_DELETABLE_ITEM_ID;
    id: string;
}

// interface ISetIsEditableAction {
//     type: TaskReducerTypes.SET_IS_EDITABLE;
// }

// interface IRemoveIsEditableAction {
//     type: TaskReducerTypes.REMOVE_IS_EDITABLE;
// }

interface IRemovedeletableItemIdAction {
    type: TaskReducerTypes.REMOVE_DELETABLE_ITEM_ID;
}

export type TaskActionType =
    | ISetdeletableItemIdAction
    | IRemovedeletableItemIdAction;
