'use client'

// react
import React from 'react'
// components
import ReadonlyChip from '@/components/readonly-chip/readonly-chip.component'
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
    isDisabled: boolean,
    isError: boolean,
}

type Props = {
    inputConfig: InputConfigType,
    handleClick: (event: React.MouseEvent<HTMLInputElement>) => void,
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputField = (props: Props):React.JSX.Element  => {

    const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
        props.handleClick(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        props.handleBlur(event)
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.handleInput(event)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['label-wrapper']}>
                <label htmlFor={props.inputConfig.componentId} className={styles['input-label']}>
                    {props.inputConfig.label}
                </label>
                {props.inputConfig.isDisabled && (
                    <ReadonlyChip handleClick={() => {}}></ReadonlyChip>
                )}
            </div>
            <TextField
                fullWidth
                id={props.inputConfig.componentId}
                className={styles['input-field']}
                type={props.inputConfig.type}
                placeholder={props.inputConfig.placeholder}
                helperText={props.inputConfig.isError ? props.inputConfig.errorMessage : props.inputConfig.helperMessage}
                value={props.inputConfig.inputValue}
                disabled={props.inputConfig.isDisabled}
                error={props.inputConfig.isError}
                onClick={handleClick}
                onBlur={handleBlur}
                onInput={handleInput}
                >
            </TextField>
        </div>
    )
}
