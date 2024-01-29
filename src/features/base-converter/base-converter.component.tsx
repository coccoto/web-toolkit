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
        inputValue: string,
        label: string,
        placeholder: string,
        isError: boolean,
        errorMessage: string,
        system: { radix: number, pattern: RegExp },
    }
}

export default () => {

    const [inputDataList, setInputDataList] = React.useState<InputDataListType>({
        binary: {
            componentId: 'binary', inputValue: '', label: '2進数', placeholder: '10100000', isError: false, errorMessage: '入力された値が正しくありません。2進数の形式で入力してください。',
            system: { radix: 2, pattern: /^[01]+$/ }
        },
        octal: {
            componentId: 'octal', inputValue: '', label: '8進数', placeholder: '240', isError: false, errorMessage: '入力された値が正しくありません。8進数の形式で入力してください。',
            system: { radix: 8, pattern: /^[0-7]+$/ }
        },
        decimal: {
            componentId: 'decimal', inputValue: '', label: '10進数', placeholder: '160', isError: false, errorMessage: '入力された値が正しくありません。10進数の形式で入力してください。',
            system: { radix: 10, pattern: /^\d+$/ }
        },
        hexadecimal: {
            componentId: 'hexadecimal', inputValue: '', label: '16進数', placeholder: 'A0', isError: false, errorMessage: '入力された値が正しくありません。16進数の形式で入力してください。',
            system: { radix: 16, pattern: /^[0-9A-Fa-f]+$/ }
        },
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, baseType: string): void => {
        const inputValue = event.target.value
        const decimalValue: number = parseInt(inputValue, inputDataList[baseType].system.radix)

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
            const isError = ! inputDataList[baseType].system.pattern.test(inputValue) || isNaN(decimalValue)
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
                        tempInputDataList[baseType].inputValue = decimalValue.toString(tempInputDataList[baseType].system.radix)
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
                            inputValue={inputData.inputValue}
                            label={inputData.label}
                            placeholder={inputData.placeholder}
                            isError={inputData.isError}
                            errorMessage={inputData.errorMessage}
                            handleInput={handleInput}
                        ></InputText>
                    )
                })}
            </div>
        </div>
    )
}
