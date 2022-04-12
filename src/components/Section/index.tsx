import React, { memo } from "react";

import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectModalData } from "../../redux/selectors";
import { ModalReducerTypes, sectionType, taskType } from "../../types/Modal";
import { ItemTypes } from "../../utils/items";
import Task from "../Task";

interface ISectionProps {
    section: sectionType;
}

const Section = ({ section }: ISectionProps) => {
    const dispatch = useDispatch();
    const { tasks } = useTypedSelector(selectModalData);
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (draggedTask: taskType) => {
            if (section.id === draggedTask.sectionId) return;
            dispatch({
                type: ModalReducerTypes.CHANGE_TASK_SECTION,
                id: draggedTask.id,
                sectionId: section.id,
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <div key={section.id} className={styles.section} ref={drop}>
            <h2 className={styles.name}>{section.name.toUpperCase()}</h2>
            <div
                className={styles.body}
                style={{
                    background: section.color,
                    paddingBottom: isOver ? "80px" : "0px",
                }}
            >
                {tasks
                    .filter((task: taskType) => {
                        return section.id === task.sectionId;
                    })
                    .map((filteredTask: taskType) => (
                        <Task key={filteredTask.id} task={filteredTask} />
                    ))}
            </div>
        </div>
    );
};

export default memo(Section);
