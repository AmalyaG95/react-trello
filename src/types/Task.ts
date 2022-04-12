import { taskType } from "./Modal";

export enum TaskReducerTypes {
    SET_DELETABLE_TASK_ID = "SET_DELETABLE_TASK_ID",
    REMOVE_DELETABLE_TASK_ID = "REMOVE_DELETABLE_TASK_ID",
    // SET_IS_EDITABLE = "SET_IS_EDITABLE",
    // REMOVE_IS_EDITABLE = "REMOVE_IS_EDITABLE",
}

export interface ITaskState {
    deletableTaskId: string | undefined;
    // isEditable: boolean;
}

interface ISetDeletableTaskIdAction {
    type: TaskReducerTypes.SET_DELETABLE_TASK_ID;
    id: string;
}

// interface ISetIsEditableAction {
//     type: TaskReducerTypes.SET_IS_EDITABLE;
// }

// interface IRemoveIsEditableAction {
//     type: TaskReducerTypes.REMOVE_IS_EDITABLE;
// }

interface IRemoveDeletableTaskIdAction {
    type: TaskReducerTypes.REMOVE_DELETABLE_TASK_ID;
}

export type TaskActionType =
    | ISetDeletableTaskIdAction
    | IRemoveDeletableTaskIdAction;
