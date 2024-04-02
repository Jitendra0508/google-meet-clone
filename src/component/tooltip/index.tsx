
import React from "react";

type Props = {
    title?: string
}
const Tooltip = (props: Props) => {
    const { title } = props;
    return (
        <>
            <div className="tooltip">
                <p>{title}</p>
            </div>
        </>
    )
}

export default Tooltip;
