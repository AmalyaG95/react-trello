import { memo } from "react";

import styles from "./index.module.scss";
import { sectionType } from "../../types/Modal";
import { selectModalData } from "../../redux/selectors";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Section from "../Section";

const Sections = () => {
    const { sections } = useTypedSelector(selectModalData);

    return (
        <div className={styles.container}>
            {sections.length !== 0 &&
                sections.map((section: sectionType) => {
                    return <Section key={section.id} section={section} />;
                })}
        </div>
    );
};

export default memo(Sections);
