// react
import React from 'react'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// styles
import styles from '@/components/drawer-menu/drawer-menu.module.sass'
// @mui
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListSubheader from '@mui/material/ListSubheader'

type Props = {
    isOpenDrawerMenu: boolean,
    menuData: ViewMenuType[],
    setIsOpenDrawerMenu: (isOpenDrawerMenu: boolean) => void,
}

export type Handler = {
    setIsOpenDrawerMenu: () => void,
}

const drawerMenuWidth: string = '15rem'

export const DrawerMenu = React.forwardRef((props: Props, ref: React.ForwardedRef<Handler>): JSX.Element  => {

    React.useImperativeHandle(ref, () => ({
        setIsOpenDrawerMenu: () => {
            toggleDrawerMenu()
        }
    }))

    const toggleDrawerMenu = () => {
        props.setIsOpenDrawerMenu(! props.isOpenDrawerMenu)
    }

    const elemMenu = () => {
        const menuData = props.menuData

        if (menuData === null || menuData === undefined) {
            return
        }
        const section1Data = menuData.filter((item) => item.section_no === 1);
        const section2Data = menuData.filter((item) => item.section_no === 2);

        return (
            <List className={styles['container-menu']}>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Tools</ListSubheader>
                    <Divider></Divider>
                    {section1Data.map((item) => (
                        <ListItem disablePadding key={item.id}>
                            <ListItemButton className={styles['menu-item']} href={item.path}>
                                {item.screen_name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Others</ListSubheader>
                    <Divider></Divider>
                    {section2Data.map((item) => (
                        <ListItem disablePadding key={item.id}>
                            <ListItemButton className={styles['menu-item']} href={item.origin}>
                                {item.system_name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
            </List>
        )
    }

    return (
        <div className={styles['container']}>
            <div className={styles['wrapper-mobile']}>
                <Drawer open={props.isOpenDrawerMenu} onClose={toggleDrawerMenu} sx={{'& .MuiDrawer-paper': { width: drawerMenuWidth }}}>
                    <Toolbar></Toolbar>
                    {elemMenu()}
                </Drawer>
            </div>
            <div className={styles['wrapper-pc']} style={{ width: drawerMenuWidth }}>
                <Toolbar></Toolbar>
                {elemMenu()}
            </div>
        </div>
    )
})