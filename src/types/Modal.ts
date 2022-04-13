export enum ModalReducerTypes {
    RESET_SECTION = "RESET_SECTION",
    ADD_SECTION = "ADD_SECTION",
    CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE",
    RESET_TASK = "RESET_TASK",
    ADD_TASK = "ADD_TASK",
    CHANGE_TASK_SECTION = "CHANGE_TASK_SECTION",
    DELETE_TASK = "DELETE_TASK",
    SET_EDITABLE_TASK = "SET_EDITABLE_TASK",
    RESET_EDITABLE_TASK = "RESET_EDITABLE_TASK",
    EDIT_TASK = "EDIT_TASK",
}

export type sectionType = {
    id: string | undefined;
    name: string;
    color: string;
};

export type taskType = {
    id: string | undefined;
    sectionId: string | undefined;
    title: string;
    desc: string;
};

export interface IModalState {
    section: sectionType;
    sections: sectionType[];
    task: taskType;
    tasks: taskType[];
    editableTask: taskType;
}

interface IResetSectionAction {
    type: ModalReducerTypes.RESET_SECTION;
}

interface IAddSectionAction {
    type: ModalReducerTypes.ADD_SECTION;
    section: sectionType;
}

interface IChangeInputValueAction {
    type: ModalReducerTypes.CHANGE_INPUT_VALUE;
    name: string;
    id: string;
    value: string;
}

interface IResetTaskAction {
    type: ModalReducerTypes.RESET_TASK;
}

interface IAddTaskAction {
    type: ModalReducerTypes.ADD_TASK;
    task: taskType;
}

interface IChangeTaskSectionAction {
    type: ModalReducerTypes.CHANGE_TASK_SECTION;
    id: string;
    sectionId: string;
}

interface IDeleteTaskAction {
    type: ModalReducerTypes.DELETE_TASK;
    id: string;
    name: string;
}

interface ISetEditableTaskAction {
    type: ModalReducerTypes.SET_EDITABLE_TASK;
    editableTask: taskType;
}

interface IResetEditableTaskAction {
    type: ModalReducerTypes.RESET_EDITABLE_TASK;
}

interface IEditTaskAction {
    type: ModalReducerTypes.EDIT_TASK;
    editableTask: taskType;
}

export type ModalActionType =
    | IResetSectionAction
    | IAddSectionAction
    | IChangeInputValueAction
    | IResetTaskAction
    | IAddTaskAction
    | IChangeTaskSectionAction
    | IDeleteTaskAction
    | ISetEditableTaskAction
    | IResetEditableTaskAction
    | IEditTaskAction;
