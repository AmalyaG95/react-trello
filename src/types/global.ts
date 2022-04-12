export enum globalReducerTypes {
    OPEN_ADD_MODAL = "OPEN_ADD_MODAL",
    CLOSE_ADD_MODAL = "CLOSE_ADD_MODAL",
    OPEN_CONFIRM_MODAL = "OPEN_CONFIRM_MODAL",
    CLOSE_CONFIRM_MODAL = "CLOSE_CONFIRM_MODAL",
    OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL",
    CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL",
}

export interface IGlobalState {
    isOpenAddModal: boolean;
    modalName: string;
    isOpenConfirmModal: boolean;
    isOpenEditModal: boolean;
}

interface IOpenAddModalAction {
    type: globalReducerTypes.OPEN_ADD_MODAL;
    name: string;
}

interface ICloseAddModalAction {
    type: globalReducerTypes.CLOSE_ADD_MODAL;
}

interface IOpenConfirmModalAction {
    type: globalReducerTypes.OPEN_CONFIRM_MODAL;
}

interface ICloseConfirmModalAction {
    type: globalReducerTypes.CLOSE_CONFIRM_MODAL;
}

interface IOpenEditModalAction {
    type: globalReducerTypes.OPEN_EDIT_MODAL;
}

interface ICloseEditModalAction {
    type: globalReducerTypes.CLOSE_EDIT_MODAL;
}

export type globalActionType =
    | IOpenAddModalAction
    | ICloseAddModalAction
    | IOpenConfirmModalAction
    | ICloseConfirmModalAction
    | IOpenEditModalAction
    | ICloseEditModalAction;
