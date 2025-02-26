// react
import React from 'react'
// @mui
import { Button, ButtonProps } from '@mui/material' // 追加
// styles
import styles from '@/components/icon-button/icon-button.module.sass'

type Props = {
    color: ButtonProps['color'],
    buttonName: string,
    iconNode: React.ReactNode,
    handleClickButton: () => void,
}

export default (props: Props) => {

    const handleClickButton = (): void => {
        props.handleClickButton()
    }

    return (
        <Button
            variant='contained'
            className={styles['button']}
            color={props.color}
            startIcon={props.iconNode}
            onClick={handleClickButton}
        >{props.buttonName}</Button>
    )
}

