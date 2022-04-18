import { memo, useCallback } from "react";

import { useDragLayer, XYCoord } from "react-dnd";

import styles from "./index.module.scss";
import { ItemTypes } from "../../utils/items";

const CustomDragLayer = () => {
    const { item, itemType, isDragging, initialOffset, currentOffset } =
        useDragLayer((monitor) => ({
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialOffset: monitor.getInitialSourceClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging(),
        }));

    const renderItem = () => {
        switch (itemType) {
            case ItemTypes.TASK:
                return (
                    <div className={styles.wrapper}>
                        <span className={styles.deleteBtn}>&times;</span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const getItemStyles = useCallback(
        (initialOffset: XYCoord | null, currentOffset: XYCoord | null) => {
            if (!initialOffset || !currentOffset) {
                return {
                    display: "none",
                };
            }

            const { x, y } = currentOffset;

            const transform = `translate(${x}px, ${y}px)`;
            return {
                transform,
                WebkitTransform: transform,
            };
        },
        []
    );

    if (!isDragging) {
        return null;
    }
    return (
        <div className={styles.container}>
            <div style={getItemStyles(initialOffset, currentOffset)}>
                {renderItem()}
            </div>
        </div>
    );
};

export default memo(CustomDragLayer);
