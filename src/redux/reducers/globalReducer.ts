import {
    globalActionType,
    globalReducerTypes,
    IGlobalState,
} from "../../types/global";

const initialState: IGlobalState = {
    isOpenAddModal: false,
    modalName: "",
    isOpenConfirmModal: false,
    isOpenEditModal: false,
};

const reducer = (
    state = initialState,
    action: globalActionType
): IGlobalState => {
    switch (action.type) {
        case globalReducerTypes.OPEN_ADD_MODAL: {
            return {
                ...state,
                isOpenAddModal: true,
                modalName: action.name,
            };
        }

        case globalReducerTypes.CLOSE_ADD_MODAL: {
            return {
                ...state,
                isOpenAddModal: false,
            };
        }

        case globalReducerTypes.OPEN_CONFIRM_MODAL: {
            return {
                ...state,
                isOpenConfirmModal: true,
                modalName: action.name,
            };
        }

        case globalReducerTypes.CLOSE_CONFIRM_MODAL: {
            return {
                ...state,
                isOpenConfirmModal: false,
            };
        }

        case globalReducerTypes.OPEN_EDIT_MODAL: {
            return {
                ...state,
                isOpenEditModal: true,
            };
        }

        case globalReducerTypes.CLOSE_EDIT_MODAL: {
            return {
                ...state,
                isOpenEditModal: false,
            };
        }

        default:
            return state;
    }
};

export default reducer;
