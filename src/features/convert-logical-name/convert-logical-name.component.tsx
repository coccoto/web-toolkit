'use client'

// react
import React from 'react'
// components
import { InputField, InputConfigType } from '@/components/input-field/input-field.component'
import IconButton from '@/components/icon-button/icon-button.component'
// scripts
import fetchConvertLogicalName from '@/lib/api/fetchConvertLogicalName'
// types
import { LogicalNameCandidate } from '@/types/OpenApiType'
// @mui
import SouthIcon from '@mui/icons-material/South'
// styles
import styles from '@/features/convert-logical-name/convert-logical-name.module.sass'

type InputDataListType = {
    inputConfig: InputConfigType,
}

export default () => {

    const [inputSourceData, setInputSourceData] = React.useState<InputDataListType>({
        inputConfig: {
            componentId: 'logicalName',
            type: 'text',
            label: '論理名',
            placeholder: 'ユーザーコード',
            helperMessage: '',
            errorMessage: '',
            inputValue: '',
            isDisabled: false,
            isError: false,
        }
    })
    
    const [inputOutputDataList, setInputOutputDataList] = React.useState<InputDataListType[]>(
        Array.from({ length: 5 }, (_, index) => ({
            inputConfig: {
                componentId: `physicalName-${index + 1}`,
                type: 'text',
                label: `候補 ${index + 1}`,
                placeholder: '',
                helperMessage: '',
                errorMessage: '',
                inputValue: '',
                isDisabled: true,
                isError: false,
            }
        }))
    )

    const handleClickInputField = (event: React.MouseEvent<HTMLInputElement>): void => {
    }

    const handleBlurInputField = (event: React.FocusEvent<HTMLInputElement>): void => {

    }

    const handleInputInputField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value

        setInputSourceData(prev => ({
            ...prev,
            inputConfig: {
                ...prev.inputConfig,
                inputValue: inputValue,
            }
        }))
    }

    const handleClickIconButton = async () => {
        const result: LogicalNameCandidate = await fetchConvertLogicalName(inputSourceData.inputConfig.inputValue)

        const newInputOutputDataList = inputOutputDataList.map((inputData, index) => ({
            ...inputData,
            inputConfig: {
                ...inputData.inputConfig,
                inputValue: result.logicalName[index],
            }
        }))
        setInputOutputDataList(newInputOutputDataList)
    }

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['section-header']}>データベース物理名命名ツール</h2>
            </div>
            <div className={styles['main-container']}>
                <div className={styles['main-wrapper']}>
                    <InputField
                        key={inputSourceData.inputConfig.componentId}
                        inputConfig={inputSourceData.inputConfig}
                        handleClick={handleClickInputField}
                        handleBlur={handleBlurInputField}
                        handleInput={handleInputInputField}
                    ></InputField>
                    <div className={styles['button-wrapper']}>
                        <IconButton
                            color={'info'}
                            buttonName={'テーブル名を変換'}
                            iconNode={<SouthIcon></SouthIcon>}
                            handleClickButton={handleClickIconButton}
                        ></IconButton>
                        <IconButton
                            color={'info'}
                            buttonName={'カラム名を変換'}
                            iconNode={<SouthIcon></SouthIcon>}
                            handleClickButton={handleClickIconButton}
                        ></IconButton>
                    </div>
                </div>
                <div className={styles['main-wrapper']}>
                    <h3 className={styles['sub-section-header']}>命名候補</h3>
                    {inputOutputDataList.map((inputData, index) => (
                        <InputField
                            key={inputData.inputConfig.componentId}
                            inputConfig={inputData.inputConfig}
                            handleClick={() => {}}
                            handleBlur={() => {}}
                            handleInput={() => {}}
                        ></InputField>
                    ))}
                </div>
            </div>
        </div>
    )
}
