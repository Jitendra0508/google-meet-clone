import React from "react";
import style from './index.module.scss';
import { ReactComponent as Copy } from '../../images/copy.svg'
type Props ={
    heading:string
}
const Info = (props:Props) => {
    const { heading} = props
    return (
        <>
            <div className={style.info}>
                <h3 className="heading">{heading}</h3>
                <h6>Joinning info</h6>
                <p>https://meet.google.com/pbd-bgtv-org</p>
                <a href="#"><Copy/> Copy joinning info</a>
                <p className={style.celenderLink}>Google Calendar attachments show up here</p>
            </div>
        </>
    )
}
export default Info;