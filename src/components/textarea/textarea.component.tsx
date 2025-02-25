'use client'

// react
import React from 'react'
// styles
import styles from '@/components/textarea/textarea.module.sass'
// @mui
import TextareaAutosize from '@mui/material/TextareaAutosize';

export type TextareaConfigType = {
    componentId: string,
    label: string,
    placeholder: string,
    /*helperMessage: string,*/
    errorMessage: string,
    inputValue: string,
    /*isError: boolean,*/
}

type Props = {
    textareaConfig: TextareaConfigType,
    handleClick: (event: React.MouseEvent<HTMLTextAreaElement>) => void,
    handleBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void,
    handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const Textarea = (props: Props):React.JSX.Element  => {

    const handleClick = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
        props.handleClick(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
        props.handleBlur(event)
    }

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        props.handleInput(event)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['textarea-label']}>{props.textareaConfig.label}</div>
            <TextareaAutosize
                minRows={10}
                id={props.textareaConfig.componentId}
                className={styles['textarea']}
                placeholder={props.textareaConfig.placeholder}
                /*helperText={props.textareaConfig.isError ? props.textareaConfig.errorMessage : props.textareaConfig.helperMessage}*/
                value={props.textareaConfig.inputValue}
                /*error={props.textareaConfig.isError}*/
                onClick={handleClick}
                onBlur={handleBlur}
                onInput={handleInput}
                >
            </TextareaAutosize>
        </div>
    )
}
