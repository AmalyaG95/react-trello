import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectModalData } from "../../redux/selectors";
import { ModalReducerTypes } from "../../types/Modal";
import { globalReducerTypes } from "../../types/global";

import styles from "./index.module.scss";

const EditModal = () => {
    const { editableTask } = useTypedSelector(selectModalData);
    const dispatch = useDispatch();

    const handleCloseModal = (e: any) => {
        e.preventDefault();
        dispatch({ type: globalReducerTypes.CLOSE_EDIT_MODAL });
        dispatch({ type: ModalReducerTypes.RESET_EDITABLE_TASK });
    };

    const changeValue = (e: any) => {
        dispatch({
            type: ModalReducerTypes.CHANGE_INPUT_VALUE,
            name: "editableTask",
            id: e.target.id,
            value: e.target.value,
        });
    };

    const handleEditTask = (e: any) => {
        e.preventDefault();
        dispatch({
            type: ModalReducerTypes.EDIT_TASK,
            editableTask,
        });
        dispatch({ type: globalReducerTypes.CLOSE_EDIT_MODAL });
        dispatch({ type: ModalReducerTypes.RESET_EDITABLE_TASK });
    };

    const stopProp = (e: any) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={handleCloseModal}>
            <div className={styles.modalContent} onClick={stopProp}>
                <span
                    className={styles.close}
                    id="close"
                    onClick={handleCloseModal}
                >
                    &times;
                </span>

                <form className={styles.form} id="editTaskForm">
                    <h1>Edit task</h1>

                    <>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="enter the title"
                                onChange={changeValue}
                                value={editableTask.title}
                            />
                        </div>
                        <div>
                            <label htmlFor="desc">Description</label>

                            <textarea
                                id="desc"
                                cols={30}
                                rows={5}
                                placeholder="enter the description"
                                onChange={changeValue}
                                value={editableTask.desc}
                            ></textarea>
                        </div>
                    </>

                    <div className={styles.actionBtns}>
                        <button
                            className={styles.editBtn}
                            onClick={handleEditTask}
                        >
                            Save
                        </button>
                        <button id="cancelBtn" onClick={handleCloseModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
