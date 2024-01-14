'use client'

// react
import React from 'react'
// @mui/material
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'

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
            props.setIsOpenDrawerMenu(! props.isOpenDrawerMenu)
        }
    }))

    return (
        <Drawer open={props.isOpenDrawerMenu} variant='persistent' anchor='left' sx={{ width: drawerMenuWidth, ['& .MuiDrawer-paper']: { width: drawerMenuWidth }}}>
            <Toolbar></Toolbar>
            <List>
                <ListItem>TEST</ListItem>
            </List>
            <Divider></Divider>
            <List>
                <ListItem>TEST</ListItem>
            </List>
        </Drawer>
    )
})