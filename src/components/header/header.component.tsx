// react
import React from 'react'
// styles
import styles from '@/components/header/header.module.sass'
// @mui/material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {
    handleClickMenuButton: () => void
}

export default (props: Props) => {

    const handleClickMenuButton = (): void => {
        props.handleClickMenuButton()
    }

    return (
        <AppBar elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar className={styles['container']}>
                <IconButton edge='start' color='inherit' onClick={handleClickMenuButton}>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Link href='/' underline='none' className={styles['title']}>Web Toolkit</Link>
            </Toolbar>
        </AppBar>
    )
}