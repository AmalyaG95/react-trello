import {
    globalActionType,
    globalActionTypes,
    IGlobalState,
} from "../../types/global";

const initialState: IGlobalState = {
    isOpenModal: false,
    modalName: "",
};

const reducer = (
    state = initialState,
    action: globalActionType
): IGlobalState => {
    switch (action.type) {
        case globalActionTypes.OPEN_MODAL: {
            return {
                ...state,
                isOpenModal: true,
                modalName: action.name,
            };
        }

        case globalActionTypes.CLOSE_MODAL: {
            return {
                ...state,
                isOpenModal: false,
            };
        }

        default:
            return state;
    }
};

export default reducer;
