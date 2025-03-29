'use client'

// react
import React from 'react'
// @mui
import Chip from '@mui/material/Chip/Chip'
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
// styles
import styles from '@/components/readonly-chip/readonly-chip.module.sass'

type Props = {
    handleClick: (event: React.MouseEvent<HTMLInputElement>) => void,
}

export default (props: Props):React.JSX.Element  => {

    const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
        props.handleClick(event)
    }

    return (
        <div data-testid="readonly-chip.component" className={styles['container']}>
            <Chip
                className={styles['chip']}
                color='warning'
                size='small'
                label={'読み取り専用'}
                icon={<EditOffOutlinedIcon fontSize='small'></EditOffOutlinedIcon>}
                onClick={handleClick}
                clickable={false}
            ></Chip>
        </div>
    )
}
