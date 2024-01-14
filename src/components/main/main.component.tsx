'use client'

// react
import React from 'react'
// theme
import ThemeObject from '@/app/theme'
// components
import Header from '@/components/header/header.component'
import Footer from '@/components/footer/footer.component'
import { DrawerMenu, Handler, drawerMenuWidth } from '@/components/drawer-menu/drawer-menu.component'
// styles
import styles from '@/components/main/main.module.sass'
// @mui/material
import Toolbar from '@mui/material/Toolbar'

export default ({ children }: { children: React.ReactNode }) => {

    const refDrawerMenu = React.useRef<Handler>(null)
    const [isOpenDrawerMenu, setIsOpenDrawerMenu] = React.useState(false)

    const handleClickMenuButton = () => {
        if (refDrawerMenu.current === null) {
            throw new Error()
        }
        refDrawerMenu.current.setIsOpenDrawerMenu()
    }

    return (
        <ThemeObject>
            <Header
                handleClickMenuButton={handleClickMenuButton}
            ></Header>
            <DrawerMenu
                isOpenDrawerMenu={isOpenDrawerMenu}
                setIsOpenDrawerMenu={setIsOpenDrawerMenu}
                ref={refDrawerMenu}></DrawerMenu>
            <div style={{ marginLeft: isOpenDrawerMenu ? drawerMenuWidth : 0 }}>
                <Toolbar></Toolbar>
                <div className={styles['wrapper-application']}>{children}</div>
                <Footer></Footer>
            </div>
        </ThemeObject>
    )
}
