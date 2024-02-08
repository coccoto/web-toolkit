'use client'

// react
import React from 'react'
// styles
import styles from '@/components/input-text/input-text.module.sass'
// @mui
import TextField from '@mui/material/TextField'

type Props = {
    componentId: string,
    label: string,
    placeholder: string,
    helperMessage: string,
    errorMessage: string,
    inputValue: string,
    isError: boolean,
    handleClick: (event: React.MouseEvent<HTMLInputElement>, componentId: string) => void,
    handleBlur: (event: React.FocusEvent<HTMLInputElement>, componentId: string) => void,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>, componentId: string) => void,
}

export default (props: Props): JSX.Element  => {

    const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
        props.handleClick(event, props.componentId);
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        props.handleBlur(event, props.componentId);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.handleInput(event, props.componentId)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['label']}>{props.label}</div>
            <TextField
                value={props.inputValue}
                placeholder={props.placeholder}
                error={props.isError}
                onClick={handleClick}
                onBlur={handleBlur}
                onInput={handleInput}
                helperText={props.isError ? props.errorMessage : props.helperMessage}
                fullWidth
                color={'info'}
                className={styles['text-field']}
                >
            </TextField>
        </div>
    )
}
