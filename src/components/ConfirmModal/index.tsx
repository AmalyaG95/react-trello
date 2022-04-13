import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectTaskData } from "../../redux/selectors";
import { ModalReducerTypes } from "../../types/Modal";
import { globalReducerTypes } from "../../types/global";

import styles from "./index.module.scss";

interface IConfirmModalProps {
    name: string;
}

const ConfirmModal = ({ name }: IConfirmModalProps) => {
    const { deletableItemId } = useTypedSelector(selectTaskData);
    const dispatch = useDispatch();

    const handleCloseModal = (e: any) => {
        e.preventDefault();
        dispatch({ type: globalReducerTypes.CLOSE_CONFIRM_MODAL });
    };

    const handleDeleteTask = (e: any, name: string) => {
        e.preventDefault();
        dispatch({
            type: ModalReducerTypes.DELETE_TASK,
            id: deletableItemId,
            name,
        });
        dispatch({ type: globalReducerTypes.CLOSE_CONFIRM_MODAL });
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

                <form className={styles.form} id="addTaskForm">
                    <h1>Do You want to delete the {name}</h1>

                    <div className={styles.actionBtns}>
                        <button
                            className={styles.deleteBtn}
                            onClick={(e) =>
                                handleDeleteTask(
                                    e,
                                    name === "section" ? "section" : "task"
                                )
                            }
                        >
                            Delete
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

export default ConfirmModal;
