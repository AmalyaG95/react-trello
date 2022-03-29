import { memo } from "react";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";
import { globalActionTypes } from "../../types/global";

const Actions = () => {
    const dispatch = useDispatch();

    const openModal = (e: any) => {
        dispatch({ type: globalActionTypes.OPEN_MODAL, name: e.target.value });
    };

    return (
        <div>
            <button
                className={styles.addSectionModalBtn}
                onClick={openModal}
                value="Add Section"
            >
                Add Section
            </button>
            <button
                className={styles.addTaskModalBtn}
                onClick={openModal}
                value="Add Task"
            >
                Add Task
            </button>
        </div>
    );
};

export default memo(Actions);
