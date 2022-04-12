import { memo } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import styles from "./index.module.scss";
import { globalReducerTypes } from "../../types/global";
import { ModalReducerTypes } from "../../types/Modal";
import { selectModalData } from "../../redux/selectors";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IModalProps {
    name: string;
}

const AddModal = ({ name }: IModalProps) => {
    const dispatch = useDispatch();
    const { section, sections, task, tasks } =
        useTypedSelector(selectModalData);

    const closeModal = (e: any) => {
        e.preventDefault();
        dispatch({ type: globalReducerTypes.CLOSE_ADD_MODAL });
    };

    const changeValue = (e: any) => {
        dispatch({
            type: ModalReducerTypes.CHANGE_INPUT_VALUE,
            name: name === "Add Section" ? "section" : "task",
            id: e.target.id,
            value: e.target.value,
        });
    };

    const add = (e: any) => {
        e.preventDefault();

        if (name === "Add Section") {
            if (section.name === "" || section.color === "#000000") {
                return;
            }
            dispatch({
                type: ModalReducerTypes.ADD_SECTION,
                section: {
                    id: uuidv4(),
                    name: section.name,
                    color: section.color,
                },
            });

            localStorage.setItem("sections", JSON.stringify(sections));
            dispatch({ type: ModalReducerTypes.RESET_SECTION });
        } else if (name === "Add Task") {
            if (task.title === "" || task.desc === "") return;

            dispatch({
                type: ModalReducerTypes.ADD_TASK,
                task: {
                    id: uuidv4(),
                    sectionId: sections[0].id,
                    title: task.title,
                    desc: task.desc,
                },
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            dispatch({ type: ModalReducerTypes.RESET_TASK });
        }
        dispatch({ type: globalReducerTypes.CLOSE_ADD_MODAL });
    };

    const handleClick = (e: any) => {
        closeModal(e);
    };

    const stopProp = (e: any) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.modalContent} onClick={stopProp}>
                <span className={styles.close} id="close" onClick={closeModal}>
                    &times;
                </span>

                <form className={styles.form} id="addTaskForm">
                    <h1>
                        {name === "Add Section"
                            ? "Add Section"
                            : name === "Add Task" && sections.length === 0
                            ? "Please, add a section at first."
                            : "Add Task"}
                    </h1>
                    {(name === "Add Section" ||
                        (name === "Add Task" && sections.length > 0)) && (
                        <>
                            <div>
                                <label
                                    htmlFor={`${
                                        name === "Add Section"
                                            ? "name"
                                            : "title"
                                    }`}
                                >
                                    {name === "Add Section" ? "Name" : "Title"}
                                </label>
                                <input
                                    type="text"
                                    id={`${
                                        name === "Add Section"
                                            ? "name"
                                            : "title"
                                    }`}
                                    placeholder={`enter the ${
                                        name === "Add Section"
                                            ? "name"
                                            : "title"
                                    }`}
                                    onChange={changeValue}
                                    value={`${
                                        name === "Add Section"
                                            ? section.name
                                            : task.title
                                    }`}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor={`${
                                        name === "Add Section"
                                            ? "color"
                                            : "desc"
                                    }`}
                                >
                                    {name === "Add Section"
                                        ? "Color"
                                        : "Description"}
                                </label>
                                {name === "Add Section" ? (
                                    <input
                                        className={styles.sectionColor}
                                        type="color"
                                        name=""
                                        id={`${
                                            name === "Add Section"
                                                ? "color"
                                                : "desc"
                                        }`}
                                        onChange={changeValue}
                                        value={section.color}
                                    />
                                ) : (
                                    <textarea
                                        name=""
                                        id="desc"
                                        cols={30}
                                        rows={5}
                                        placeholder="enter the description"
                                        onChange={changeValue}
                                        value={task.desc}
                                    ></textarea>
                                )}
                            </div>
                        </>
                    )}

                    <div className={styles.actionBtns}>
                        {name === "Add Section" ||
                        (name === "Add Task" && sections.length > 0) ? (
                            <button className={styles.addBtn} onClick={add}>
                                Add
                            </button>
                        ) : (
                            <button
                                className={styles.okBtn}
                                id="addTaskBtn"
                                onClick={closeModal}
                            >
                                OK
                            </button>
                        )}
                        {(name === "Add Section" ||
                            (name === "Add Task" && sections.length > 0)) && (
                            <button id="cancelBtn" onClick={closeModal}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(AddModal);
