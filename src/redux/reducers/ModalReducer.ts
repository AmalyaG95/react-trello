import {
    IModalState,
    ModalActionType,
    ModalReducerTypes,
    taskType,
} from "../../types/Modal";

const initialState: IModalState = {
    section: {
        id: undefined,
        name: "",
        color: "#ffffff",
    },
    sections:
        localStorage.getItem("sections") !== null
            ? JSON.parse(localStorage.getItem("sections") || "")
            : [],
    task: {
        id: undefined,
        sectionId: undefined,
        title: "",
        desc: "",
    },
    tasks:
        localStorage.getItem("tasks") != null
            ? JSON.parse(localStorage.getItem("tasks") || "")
            : [],
    editableTask: {
        id: undefined,
        sectionId: undefined,
        title: "",
        desc: "",
    },
};

const reducer = (
    state = initialState,
    action: ModalActionType
): IModalState => {
    switch (action.type) {
        case ModalReducerTypes.RESET_SECTION: {
            return {
                ...state,
                section: {
                    id: undefined,
                    name: "",
                    color: "#ffffff",
                },
            };
        }

        case ModalReducerTypes.ADD_SECTION: {
            const sectionsCopy = state.sections;

            sectionsCopy?.push(action.section);
            return {
                ...state,
                section: action.section,
                sections: sectionsCopy,
            };
        }

        case ModalReducerTypes.CHANGE_INPUT_VALUE: {
            const { name, id, value } = action;

            if (name === "section") {
                return {
                    ...state,
                    section: {
                        ...state.section,
                        [id]: value,
                    },
                };
            } else if (name === "task") {
                return {
                    ...state,
                    task: {
                        ...state.task,
                        [id]: value,
                    },
                };
            } else {
                return {
                    ...state,
                    editableTask: {
                        ...state.editableTask,
                        [id]: value,
                    },
                };
            }
        }

        case ModalReducerTypes.RESET_TASK: {
            return {
                ...state,
                task: {
                    id: undefined,
                    sectionId: undefined,
                    title: "",
                    desc: "",
                },
            };
        }

        case ModalReducerTypes.ADD_TASK: {
            const tasksCopy = state.tasks;

            tasksCopy?.push(action.task);
            return {
                ...state,
                task: action.task,
                tasks: tasksCopy,
            };
        }

        case ModalReducerTypes.CHANGE_TASK_SECTION: {
            const tasksCopy = state.tasks;

            const index = tasksCopy.findIndex(
                (task: taskType) => task.id === action.id
            );
            tasksCopy[index].sectionId = action.sectionId;

            return {
                ...state,
                tasks: tasksCopy,
            };
        }

        case ModalReducerTypes.DELETE_ITEM: {
            if (action.name === "task") {
                const tasksCopy = state.tasks;
                const newTasks = tasksCopy.filter(
                    (task) => task.id !== action.id
                );
                localStorage.setItem("tasks", JSON.stringify(newTasks));

                return {
                    ...state,
                    tasks: newTasks,
                };
            } else {
                const sectionsCopy = state.sections;
                const newSections = sectionsCopy.filter(
                    (section) => section.id !== action.id
                );
                localStorage.setItem("sections", JSON.stringify(newSections));

                return {
                    ...state,
                    sections: newSections,
                };
            }
        }

        case ModalReducerTypes.SET_EDITABLE_TASK: {
            return {
                ...state,
                editableTask: action.editableTask,
            };
        }

        case ModalReducerTypes.RESET_EDITABLE_TASK: {
            return {
                ...state,
                editableTask: {
                    id: undefined,
                    sectionId: undefined,
                    title: "",
                    desc: "",
                },
            };
        }

        case ModalReducerTypes.EDIT_TASK: {
            const newTasks = state.tasks.map((task) => {
                if (action.editableTask.id === task.id)
                    return action.editableTask;
                return task;
            });
            localStorage.setItem("tasks", JSON.stringify(newTasks));

            return {
                ...state,
                tasks: newTasks,
            };
        }

        default:
            return state;
    }
};

export default reducer;
