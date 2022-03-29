export enum globalActionTypes {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
}

export interface IGlobalState {
    isOpenModal: boolean;
    modalName: string;
}

interface IOpenModalAction {
    type: globalActionTypes.OPEN_MODAL;
    name: string;
}

interface ICloseModalAction {
    type: globalActionTypes.CLOSE_MODAL;
}

export type globalActionType = IOpenModalAction | ICloseModalAction;
