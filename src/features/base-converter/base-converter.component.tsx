'use client'

// react
import React from 'react'
// components
import InputText from '@/components/input-text/input-text.component'
// styles
import styles from '@/features/base-converter/base-converter.module.sass'

type InputDataListType = {
    [key in string]: {
        componentId: string,
        label: string,
        placeholder: string,
        errorMessage: string,
        inputValue: string,
        isError: boolean,
        params: { radix: number, pattern: RegExp },
    }
}

export default () => {

    const [inputDataList, setInputDataList] = React.useState<InputDataListType>({
        binary: {
            componentId: 'binary', label: '2進数', placeholder: '10100000', errorMessage: '入力された値が正しくありません。2進数の形式で入力してください。',
            inputValue: '', isError: false, params: { radix: 2, pattern: /^[01]+$/ }
        },
        octal: {
            componentId: 'octal', label: '8進数', placeholder: '240', errorMessage: '入力された値が正しくありません。8進数の形式で入力してください。',
            inputValue: '', isError: false, params: { radix: 8, pattern: /^[0-7]+$/ }
        },
        decimal: {
            componentId: 'decimal', label: '10進数', placeholder: '160', errorMessage: '入力された値が正しくありません。10進数の形式で入力してください。',
            inputValue: '', isError: false, params: { radix: 10, pattern: /^\d+$/ }
        },
        hexadecimal: {
            componentId: 'hexadecimal', label: '16進数', placeholder: 'A0', errorMessage: '入力された値が正しくありません。16進数の形式で入力してください。',
            inputValue: '', isError: false, params: { radix: 16, pattern: /^[0-9A-Fa-f]+$/ }
        },
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, baseType: string): void => {
        const inputValue = event.target.value
        const decimalValue: number = parseInt(inputValue, inputDataList[baseType].params.radix)

        if (inputValue === '') {
            setInputDataList((prevInputDataList) => {
                const tempInputDataList = { ...prevInputDataList }
                Object.keys(tempInputDataList).forEach((baseType) => {
                    tempInputDataList[baseType].inputValue = ''
                    tempInputDataList[baseType].isError = false
                })
                return tempInputDataList
            })
        } else {
            const isError = ! inputDataList[baseType].params.pattern.test(inputValue) || isNaN(decimalValue)
            if(isError) {
                setInputDataList((prevInputDataList) => ({
                    ...prevInputDataList,
                    [baseType]: {
                        ...prevInputDataList[baseType],
                        inputValue: inputValue,
                        isError: true,
                    }
                }))
            } else {
                setInputDataList((prevInputDataList) => {
                    const tempInputDataList = { ...prevInputDataList }
                    Object.keys(tempInputDataList).forEach((baseType) => {
                        const baseValue = decimalValue.toString(tempInputDataList[baseType].params.radix)
                        tempInputDataList[baseType].inputValue = baseType === 'hexadecimal' ? baseValue.toUpperCase() : baseValue
                        tempInputDataList[baseType].isError = false
                    })
                    return tempInputDataList
                })
            }
        }
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2>進数変換</h2>
            </div>
            <div className={styles['wrapper-main']}>
                {Object.keys(inputDataList).map((baseType) => {
                    const inputData = inputDataList[baseType]
                    return (
                        <InputText
                            key={inputData.componentId}
                            componentId={inputData.componentId}
                            label={inputData.label}
                            placeholder={inputData.placeholder}
                            errorMessage={inputData.errorMessage}
                            inputValue={inputData.inputValue}
                            isError={inputData.isError}
                            handleInput={handleInput}
                        ></InputText>
                    )
                })}
            </div>
        </div>
    )
}
