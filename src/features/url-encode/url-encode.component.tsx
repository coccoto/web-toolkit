'use client'

// react
import React from 'react'
// components
import { Textarea, TextareaConfigType } from '@/components/textarea/textarea.component'
// styles
import styles from '@/features/url-encode/url-encode.module.sass'

type TextareaDataListType = {
    [key in string]: {
        textareaConfig: TextareaConfigType,
        params: { },
    }
}

export default () => {

    const [textareaDataList, setTextareaDataList] = React.useState<TextareaDataListType>({
        input: {
            textareaConfig: { 
                componentId: 'input',
                label: '変換前',
                placeholder: '',
                helperMessage: '',
                errorMessage: 'errorMessage',
                inputValue: undefined,
                isError: true,
            },
            params: {
            }
        },
        output: {
            textareaConfig: {
                componentId: 'output',
                label: '変換後',
                placeholder: '',
                helperMessage: '',
                errorMessage: 'errorMessage',
                inputValue: undefined,
                isError: false,
            },
            params: {
            }
        },
    })

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    }

    const handleClick = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
        const elemInput = event.currentTarget
        const inputValue = elemInput.value

        // クリップボードにテキストエリアの値をコピーする
        if (inputValue !== '') {
            navigator.clipboard.writeText(inputValue)
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['feature-header']}>URL エンコード｜デコード</h2>
            </div>
            <div className={styles['main-wrapper']}>
                {Object.keys(textareaDataList).map((baseType) => {
                    const textareaData = textareaDataList[baseType]
                    return (
                        <Textarea
                            key={textareaData.textareaConfig.componentId}
                            textareaConfig={textareaData.textareaConfig}
                            handleClick={handleClick}
                            handleBlur={handleBlur}
                            handleInput={handleInput}
                        ></Textarea>
                    )
                })}
            </div>
        </div>
    )
}
