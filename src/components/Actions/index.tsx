import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";
import { globalReducerTypes } from "../../types/global";

const Actions = () => {
    const dispatch = useDispatch();

    const openModal = useCallback((e: any) => {
        dispatch({
            type: globalReducerTypes.OPEN_ADD_MODAL,
            name: e.target.value,
        });
    }, []);

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
