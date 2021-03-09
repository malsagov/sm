import React from 'react' 
import s from './FormsControls.module.css'

export const Textarea = (props) => {
    return (
        <div className={`${s.wrap} ${s.error}`}>
            <textarea {...props.input} {...props}></textarea>
            <span>Some error</span>
        </div>
    )
}