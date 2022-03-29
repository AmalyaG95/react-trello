import { reducerType } from "./store";

const selectGlobalData = (state: reducerType) => ({
    isOpenModal: state.globalState.isOpenModal,
    modalName: state.globalState.modalName,
});

const selectModalData = (state: reducerType) => ({
    section: state.ModalState.section,
    sections: state.ModalState.sections,
    task: state.ModalState.task,
    tasks: state.ModalState.tasks,
});

export { selectGlobalData, selectModalData };
