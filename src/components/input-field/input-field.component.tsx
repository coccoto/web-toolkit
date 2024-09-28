'use client'

// react
import React from 'react'
// styles
import styles from '@/components/input-field/input-field.module.sass'
// @mui
import TextField from '@mui/material/TextField'

export type InputConfigType = {
    componentId: string,
    type: 'text' | 'number',
    label: string,
    placeholder: string,
    helperMessage: string,
    errorMessage: string,
    inputValue: string,
    isError: boolean,
}

type Props = {
    inputConfig: InputConfigType,
    handleClick: (event: React.MouseEvent<HTMLInputElement>, componentId: string) => void,
    handleBlur: (event: React.FocusEvent<HTMLInputElement>, componentId: string) => void,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>, componentId: string) => void,
}

export const InputField = (props: Props): JSX.Element  => {

    const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
        props.handleClick(event, props.inputConfig.componentId);
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        props.handleBlur(event, props.inputConfig.componentId);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.handleInput(event, props.inputConfig.componentId)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['input-label']}>{props.inputConfig.label}</div>
            <TextField
                fullWidth
                className={styles['input-field']}
                type={props.inputConfig.type}
                placeholder={props.inputConfig.placeholder}
                helperText={props.inputConfig.isError ? props.inputConfig.errorMessage : props.inputConfig.helperMessage}
                value={props.inputConfig.inputValue}
                error={props.inputConfig.isError}
                onClick={handleClick}
                onBlur={handleBlur}
                onInput={handleInput}
                >
            </TextField>
        </div>
    )
}
