// styles
import styles from '@/components/header/header.module.sass'
// @mui/material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
    return (
        <AppBar position='static' elevation={0}>
            <Toolbar className={styles['container']}>
                <IconButton edge='start' color='inherit'>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Link href='/' underline='none' className={styles['title']}>Web Toolkit</Link>
            </Toolbar>
        </AppBar>
    )
}