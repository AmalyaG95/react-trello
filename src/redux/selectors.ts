import { reducerType } from "./store";

const selectGlobalData = (state: reducerType) => ({
    isOpenAddModal: state.globalState.isOpenAddModal,
    modalName: state.globalState.modalName,
    isOpenConfirmModal: state.globalState.isOpenConfirmModal,
    isOpenEditModal: state.globalState.isOpenEditModal,
});

const selectModalData = (state: reducerType) => ({
    section: state.ModalState.section,
    sections: state.ModalState.sections,
    task: state.ModalState.task,
    tasks: state.ModalState.tasks,
    editableTask: state.ModalState.editableTask,
});

const selectTaskData = (state: reducerType) => ({
    deletableItemId: state.TaskState.deletableItemId,
    // isEditable: state.TaskState.isEditable,
});

export { selectGlobalData, selectModalData, selectTaskData };
