// react
import React from 'react'
// types
import { MenuType } from '@/types/MenuType'
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
    menuList: MenuType[],
    setIsOpenDrawerMenu: (isOpenDrawerMenu: boolean) => void,
}

export type Handler = {
    setIsOpenDrawerMenu: () => void,
}

const drawerMenuWidth: string = '15rem'

export const DrawerMenu = React.forwardRef((props: Props, ref: React.ForwardedRef<Handler>):React.JSX.Element  => {

    // parent Element
    React.useImperativeHandle(ref, () => ({
        setIsOpenDrawerMenu: () => {
            toggleDrawerMenu()
        }
    }))

    // Drawer Control
    const toggleDrawerMenu = () => {
        props.setIsOpenDrawerMenu(! props.isOpenDrawerMenu)
    }

    // Create Element
    const elemMenu = () => {
        if (props.menuList === null || props.menuList === undefined || Object.keys(props.menuList).length === 0) {
            return
        }
        const sectionData_1 = props.menuList.filter((item) => item.category_type === 1)
        const sectionData_2 = props.menuList.filter((item) => item.category_type === 2)

        return (
            <List className={styles['menu-wrapper']}>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Tools</ListSubheader>
                    <Divider></Divider>
                    {sectionData_1.map((item) => (
                        <ListItem disablePadding key={item.menu_id}>
                            <ListItemButton className={styles['menu-item']} href={item.path}>
                                {item.feature_name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Others</ListSubheader>
                    <Divider></Divider>
                    {sectionData_2.map((item) => (
                        <ListItem disablePadding key={item.menu_id}>
                            <ListItemButton className={styles['menu-item']} href={item.origin + item.path}>
                                {item.app_name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
            </List>
        )
    }

    return (
        <div className={styles['container']}>
            <div className={styles['mobile-wrapper']}>
                <Drawer open={props.isOpenDrawerMenu} onClose={toggleDrawerMenu} sx={{'& .MuiDrawer-paper': { width: drawerMenuWidth }}}>
                    <Toolbar></Toolbar>
                    {elemMenu()}
                </Drawer>
            </div>
            <div className={styles['pc-wrapper']} style={{ width: drawerMenuWidth }}>
                <Toolbar></Toolbar>
                {elemMenu()}
            </div>
        </div>
    )
})
