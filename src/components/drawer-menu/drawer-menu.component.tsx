// react
import React from 'react'
// styles
import styles from '@/components/drawer-menu/drawer-menu.module.sass'
// @mui/material
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListSubheader from '@mui/material/ListSubheader'

type Props = {
    isOpenDrawerMenu: boolean,
    setIsOpenDrawerMenu: (isOpenDrawerMenu: boolean) => void,
}
export type Handler = {
    setIsOpenDrawerMenu: () => void,
}

export const drawerMenuWidth: string = '15rem'

export const DrawerMenu = React.forwardRef((props: Props, ref): JSX.Element  => {

    React.useImperativeHandle(ref, () => ({
        setIsOpenDrawerMenu: () => {
            toggleDrawerMenu()
        }
    }))

    const toggleDrawerMenu = () => {
        props.setIsOpenDrawerMenu(! props.isOpenDrawerMenu)
    }

    const elemMenu = () => {

        const sample1 = [
            {
                system_name: 'system_name',
                screen_name: 'screen_name',
                origin: 'origin',
                path: 'path',
            },
            {
                system_name: 'system_name',
                screen_name: 'screen_name',
                origin: 'origin',
                path: 'path',
            }
        ]

        const sample2 = [
            {
                system_name: 'system_name',
                screen_name: 'screen_name',
                origin: 'origin',
                path: 'path',
            },
            {
                system_name: 'system_name',
                screen_name: 'screen_name',
                origin: 'origin',
                path: 'path',
            }
        ]

        return (
            <List className={styles['container-menu']}>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Tools</ListSubheader>
                    <Divider></Divider>
                    {sample1.map((item) => (
                        <ListItem disablePadding key={item.path}>
                            <ListItemButton className={styles['menu-item']} href={item.path}>
                                {item.screen_name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
                <div>
                    <ListSubheader color={'inherit'} className={styles['menu-header']}>Others</ListSubheader>
                    <Divider></Divider>
                    {sample2.map((item) => (
                        <ListItem disablePadding key={item.origin}>
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