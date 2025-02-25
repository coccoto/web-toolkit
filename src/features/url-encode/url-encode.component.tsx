'use client'

// react
import React from 'react'
// components
import { InputField, InputConfigType } from '@/components/input-field/input-field.component'
// styles
import styles from '@/features/base-converter/base-converter.module.sass'

type InputDataListType = {
    [key in string]: {
        inputConfig: InputConfigType,
        params: { },
    }
}

export default () => {

    const [inputDataList, setInputDataList] = React.useState<InputDataListType>({
        input: {
            inputConfig: { 
                componentId: 'input',
                type: 'text',
                label: '変換前',
                placeholder: '',
                helperMessage: '',
                errorMessage: '',
                inputValue: '',
                isError: false,
            },
            params: {
            }
        },
        output: {
            inputConfig: {
                componentId: 'output',
                type: 'text',
                label: '変換後',
                placeholder: '',
                helperMessage: '',
                errorMessage: '',
                inputValue: '',
                isError: false,
            },
            params: {
            }
        },
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, componentId: string): void => {
    }

    const handleClick = (event: React.MouseEvent<HTMLInputElement>, componentId: string): void => {
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>, componentId: string): void => {
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['feature-header']}>URL エンコード｜デコード</h2>
            </div>
            <div className={styles['main-wrapper']}>
                {Object.keys(inputDataList).map((baseType) => {
                    const inputData = inputDataList[baseType]
                    return (
                        <InputField
                            key={inputData.inputConfig.componentId}
                            inputConfig={inputData.inputConfig}
                            handleClick={handleClick}
                            handleBlur={handleBlur}
                            handleInput={handleInput}
                        ></InputField>
                    )
                })}
            </div>
        </div>
    )
}
