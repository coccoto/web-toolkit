'use client'

// react
import React from 'react'
// styles
import styles from '@/components/input-text/input-text.module.sass'
// @mui
import TextField from '@mui/material/TextField'

type Props = {
    componentId: string,
    inputValue: string,
    label: string,
    placeholder: string,
    isError: boolean,
    errorMessage: string,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>, componentId: string) => void,
}

export default (props: Props): JSX.Element  => {

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
                onInput={handleInput}
                helperText={props.isError ? props.errorMessage : ' '}
                fullWidth
                color={'info'}
                className={styles['text-field']}
                >
            </TextField>
        </div>
    )
}
