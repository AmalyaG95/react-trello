import { memo, useEffect } from "react";
import { useDrag } from "react-dnd";

import styles from "./index.module.scss";
import { ItemTypes } from "../../utils/items";
import { ModalReducerTypes, taskType } from "../../types/Modal";
import { useDispatch } from "react-redux";
import { globalReducerTypes } from "../../types/global";
import { getEmptyImage } from "react-dnd-html5-backend";

interface ITaskProps {
    task: taskType;
    handleOpenConfirmModal: (id: string, name: string) => void;
}

const Task = ({ task, handleOpenConfirmModal }: ITaskProps) => {
    const dispatch = useDispatch();
    const [{ isDragging }, drag, dragPreview] = useDrag(
        () => ({
            type: ItemTypes.TASK,
            item: task,
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [task]
    );

    useEffect(() => {
        dragPreview(getEmptyImage(), { captureDraggingState: true });
    }, [dragPreview]);

    const handleOpenEditModal = (_e: any, _editableTask: taskType) => {
        dispatch({
            type: globalReducerTypes.OPEN_EDIT_MODAL,
        });
        dispatch({
            type: ModalReducerTypes.SET_EDITABLE_TASK,
            editableTask: _editableTask,
        });
    };

    return (
        <>
            <div
                id={task.id}
                className={styles.task}
                ref={drag}
                style={{
                    opacity: isDragging ? "0.5" : "1",
                }}
                onClick={(e) => handleOpenEditModal(e, task)}
            >
                <span
                    className={styles.deleteBtn}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOpenConfirmModal(task.id!, "task");
                    }}
                >
                    &times;
                </span>
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.desc}</p>
                    {/* <button
                        className={styles.editBtn}
                        onClick={(e) => handleOpenEditModal(e, task)}
                    >
                        Edit task
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default memo(Task);
