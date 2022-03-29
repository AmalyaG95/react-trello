import React, { memo } from "react";
import { useDrag } from "react-dnd";

import styles from "./index.module.scss";
import { ItemTypes } from "../../utils/items";
import { taskType } from "../../types/Modal";

interface ITaskProps {
    filteredTask: taskType;
}

const Task = ({ filteredTask }: ITaskProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TASK,
        item: filteredTask,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            id={filteredTask.id}
            className={styles.task}
            ref={drag}
            style={{
                opacity: isDragging ? "0.5" : "1",
            }}
        >
            <h3>{filteredTask.title}</h3>
            <p>{filteredTask.desc}</p>
        </div>
    );
};

export default memo(Task);
