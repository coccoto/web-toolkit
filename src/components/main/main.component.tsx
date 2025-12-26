'use client'

// react
import React from 'react'
// components
import AppBar from '@/components/app-bar/app-bar.component'
import Footer from '@/components/footer/footer.component'
import { DrawerMenu, Handler } from '@/components/drawer-menu/drawer-menu.component'
// types
import { MenuType } from '@/types/menu.types'
// styles
import styles from '@/components/main/main.module.sass'
// @mui
import Toolbar from '@mui/material/Toolbar'

type Props = {
    children: React.ReactNode,
    menuList: MenuType[],
}

export default (props: Props) => {

    // DrawerMenu
    const refDrawerMenu = React.useRef<Handler>(null)
    const [isOpenDrawerMenu, setIsOpenDrawerMenu] = React.useState(false)

    // Header MenuButton
    const handleClickMenuButton = () => {
        if (refDrawerMenu.current === null) {
            throw new Error()
        }
        refDrawerMenu.current.setIsOpenDrawerMenu()
    }

    return (
        <div className={styles['container']}>
            <AppBar handleClickMenuButton={handleClickMenuButton}></AppBar>
            <div className={styles['main-wrapper']}>
                <DrawerMenu
                    isOpenDrawerMenu={isOpenDrawerMenu}
                    menuList={props.menuList}
                    setIsOpenDrawerMenu={setIsOpenDrawerMenu}
                    ref={refDrawerMenu}
                ></DrawerMenu>
                <div className={styles['content-wrapper']}>
                    <Toolbar></Toolbar>
                    <div className={styles['application-wrapper']}>{props.children}</div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}
