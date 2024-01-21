'use client'
// react
import React from 'react'
// components
import { InputText, Output } from '@/components/input-text/input-text.component'
// styles
import styles from '@/features/base-converter/base-converter.module.sass'

type BaseConverterFormType = {
    binary: string,
    octal: string,
    decimal: string,
    hexadecimal: string,
}
const initBaseConverterFormType = (): BaseConverterFormType => {
    return {
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: '',
    }
}

export default () => {

    const refBaseConverterForm = {
        binary: React.useRef<HTMLInputElement>(null),
        octal: React.useRef<HTMLInputElement>(null),
        decimal: React.useRef<HTMLInputElement>(null),
        hexadecimal: React.useRef<HTMLInputElement>(null),
    }

    const baseConvert = (output: Output): void => {
        const decimalValue: number = parseInt(output.inputValue, Number(output.componentName))

        let baseConverterForm: BaseConverterFormType = initBaseConverterFormType()

        if (! isNaN(decimalValue)) {
            baseConverterForm = {
                binary: decimalValue.toString(2),
                octal: decimalValue.toString(8),
                decimal: decimalValue.toString(10),
                hexadecimal: decimalValue.toString(16).toUpperCase(),
            }
         }

        if (refBaseConverterForm.binary.current === null || refBaseConverterForm.octal.current === null || refBaseConverterForm.decimal.current === null || refBaseConverterForm.hexadecimal.current === null) {
            throw new Error()
        }
        refBaseConverterForm.binary.current.value = baseConverterForm.binary
        refBaseConverterForm.octal.current.value = baseConverterForm.octal
        refBaseConverterForm.decimal.current.value = baseConverterForm.decimal
        refBaseConverterForm.hexadecimal.current.value = baseConverterForm.hexadecimal
        return
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2>進数変換</h2>
            </div>
            <div className={styles['wrapper-main']}>
                <InputText
                    componentName='2'
                    label='2進数'
                    placeholder='10100000'
                    onInput={baseConvert}
                    ref={refBaseConverterForm.binary}
                ></InputText>
                <InputText
                    componentName='8'
                    label='8進数'
                    placeholder='240'
                    onInput={baseConvert}
                    ref={refBaseConverterForm.octal}
                ></InputText>
                <InputText
                    componentName='10'
                    label='10進数'
                    placeholder='160'
                    onInput={baseConvert}
                    ref={refBaseConverterForm.decimal}
                ></InputText>
                <InputText
                    componentName='16'
                    label='16進数'
                    placeholder='A0'
                    onInput={baseConvert}
                    ref={refBaseConverterForm.hexadecimal}
                ></InputText>
            </div>
        </div>
    )
}