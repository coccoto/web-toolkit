'use client'

// react
import React from 'react'
// theme
import Theme from '@/app/theme'
// components
import Header from '@/components/header/header.component'
import Footer from '@/components/footer/footer.component'
import Toolbar from '@mui/material/Toolbar'
import { DrawerMenu, Handler, drawerMenuWidth } from '@/components/drawer-menu/drawer-menu.component'
// styles
import styles from '@/components/main/main.module.sass'

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
        <Theme>
            <Header handleClickMenuButton={handleClickMenuButton}></Header>
            <div className={styles['wrapper-main']}>
                <DrawerMenu
                    isOpenDrawerMenu={isOpenDrawerMenu}
                    setIsOpenDrawerMenu={setIsOpenDrawerMenu}
                    ref={refDrawerMenu}
                ></DrawerMenu>
                <div className={styles['wrapper-content']}>
                    <Toolbar></Toolbar>
                    <div className={styles['wrapper-application']}>{children}</div>
                    <Footer></Footer>
                </div>
            </div>
        </Theme>
    )
}
