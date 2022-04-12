import { memo, useEffect } from "react";
import { useDrag } from "react-dnd";

import styles from "./index.module.scss";
import { ItemTypes } from "../../utils/items";
import { ModalReducerTypes, taskType } from "../../types/Modal";
import { useDispatch } from "react-redux";
import { globalReducerTypes } from "../../types/global";
import { TaskReducerTypes } from "../../types/Task";
import { getEmptyImage } from "react-dnd-html5-backend";

interface ITaskProps {
    task: taskType;
}

const Task = ({ task }: ITaskProps) => {
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

    const handleOpenConfirmModal = () => {
        dispatch({ type: globalReducerTypes.OPEN_CONFIRM_MODAL });
        dispatch({
            type: TaskReducerTypes.SET_DELETABLE_TASK_ID,
            id: task.id,
        });
    };

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
                onDoubleClick={(e) => handleOpenEditModal(e, task)}
            >
                <span
                    className={styles.deleteBtn}
                    onClick={handleOpenConfirmModal}
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
