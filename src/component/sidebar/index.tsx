import React, { ReactNode } from "react";
import style from './index.module.scss';
import clsx from "clsx";
type Props = {
    children: ReactNode;
    onClick?: () => void;
    className?:string
}
const Sidebar = (props: Props) => {
    const { children, onClick,className } = props
    return (
        <>
            <div className={clsx(style.Sidebar,className)}>
                <div className={style.innerContent}>
                    <button onClick={onClick}><i className="bi bi-x"></i></button>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Sidebar;