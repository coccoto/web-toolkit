'use client'

// react
import React from 'react'
// styles
import styles from '@/components/input-text/input-text.module.sass'
// @mui/material
import TextField from '@mui/material/TextField'

type Props = {
    componentName: string,
    label: string,
    placeholder: string,
    onInput: (output: Output) => void,
}

export type Output = {
    componentName: string,
    inputValue: string,
}

export const InputText = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element  => {

    const [inputValue, setInputValue] = React.useState('')

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value
        setInputValue(value)
        const output: Output = {
            componentName: props.componentName,
            inputValue: value,
        }
        props.onInput(output)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['label']}>{props.label}</div>
            <TextField 
                inputRef={ref}
                value={inputValue}
                fullWidth
                placeholder={props.placeholder}
                onInput={handleInput}
                >
            </TextField>
        </div>
    )
})