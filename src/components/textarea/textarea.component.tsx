'use client'

// react
import React from 'react'
// components
import ReadonlyChip from '@/components/readonly-chip/readonly-chip.component'
// styles
import styles from '@/components/textarea/textarea.module.sass'
// @mui
import TextareaAutosize from '@mui/material/TextareaAutosize'

export type TextareaConfigType = {
    componentId: string,
    label: string,
    placeholder: string,
    helperMessage: string,
    errorMessage: string,
    inputValue: string,
    isDisabled: boolean,
    isError: boolean,
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
            <div className={styles['label-wrapper']}>
                <label htmlFor={props.textareaConfig.componentId} className={styles['textarea-label']}>
                    {props.textareaConfig.label}
                </label>
                {props.textareaConfig.isDisabled && (
                    <ReadonlyChip handleClick={() => {}} />
                )}
            </div>
            <TextareaAutosize
                minRows={10}
                id={props.textareaConfig.componentId}
                className={styles[props.textareaConfig.isError ? 'textarea--error' : 'textarea']}
                placeholder={props.textareaConfig.placeholder}
                value={props.textareaConfig.inputValue}
                disabled={props.textareaConfig.isDisabled}
                onClick={handleClick}
                onBlur={handleBlur}
                onInput={handleInput}
            >
            </TextareaAutosize>
            <div data-testid='helper-text' className={styles[props.textareaConfig.isError ? 'helper-text--error' : 'helper-text']}>
                {props.textareaConfig.isError ? props.textareaConfig.errorMessage : props.textareaConfig.helperMessage}
            </div>
        </div>
    )
}
