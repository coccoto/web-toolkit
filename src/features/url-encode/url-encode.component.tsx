'use client'

// react
import React from 'react'
// components
import { Textarea, TextareaConfigType } from '@/components/textarea/textarea.component'
// @mui
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
// styles
import styles from '@/features/url-encode/url-encode.module.sass'

type TextareaDataListType = {
    [key in string]: {
        textareaConfig: TextareaConfigType,
        params: { },
    }
}

export default () => {

    const [checkedToggle, setCheckedToggle] = React.useState('encord')

    const [textareaDataList, setTextareaDataList] = React.useState<TextareaDataListType>({
        input: {
            textareaConfig: { 
                componentId: 'input',
                label: '変換するデータを入力',
                placeholder: '',
                helperMessage: '',
                errorMessage: '',
                inputValue: undefined,
                isError: true,
            },
            params: {
            }
        },
        output: {
            textareaConfig: {
                componentId: 'output',
                label: '変換後のデータ',
                placeholder: '',
                helperMessage: '',
                errorMessage: '',
                inputValue: undefined,
                isError: false,
            },
            params: {
            }
        },
    })

    /**
     * トグルボタン
     * @event
     */
    const handleChangeToggleButton = (event: React.MouseEvent<HTMLElement>, value: string) => {
        setCheckedToggle(value)
    }

    /**
     * テキストエリア
     * @event
     */
    const handleInputTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const elemTextarea = event.currentTarget
        let result: string = ''

        if (checkedToggle === 'encord') {
            result = encodeURIComponent(elemTextarea.value)
        } else {
            result = decodeURIComponent(elemTextarea.value)
        }

        setTextareaDataList(prevTextareaDataList => ({
            ...prevTextareaDataList,
            output: {
                ...prevTextareaDataList.output,
                textareaConfig: {
                    ...prevTextareaDataList.output.textareaConfig,
                    inputValue: result,
                }
            }
        }))
    }

    const handleClickTextarea = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
        const elemInput = event.currentTarget
        const inputValue = elemInput.value

        // クリップボードにテキストエリアの値をコピーする
        if (inputValue !== '') {
            navigator.clipboard.writeText(inputValue)
        }
    }

    const handleBlurTextarea = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['feature-header']}>URL エンコード・デコード</h2>
            </div>
            <div className={styles['main-wrapper']}>
                <ToggleButtonGroup
                    color={'info'}
                    value={checkedToggle}
                    exclusive
                    onChange={handleChangeToggleButton}
                >
                    <ToggleButton value='encord'>エンコード</ToggleButton>
                    <ToggleButton value="decord">デコード</ToggleButton>
                </ToggleButtonGroup>

                {Object.keys(textareaDataList).map((baseType) => {
                    const textareaData = textareaDataList[baseType]
                    return (
                        <Textarea
                            key={textareaData.textareaConfig.componentId}
                            textareaConfig={textareaData.textareaConfig}
                            handleClick={handleClickTextarea}
                            handleBlur={handleBlurTextarea}
                            handleInput={handleInputTextarea}
                        ></Textarea>
                    )
                })}
            </div>
        </div>
    )
}
