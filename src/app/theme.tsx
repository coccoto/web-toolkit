'use client'
// @mui
import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const customTheme = createTheme({
    palette: {
        primary: {
            main: grey[100],
        },
    },
    typography: {
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
    },
})

const Theme = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={customTheme}>
                <CssBaseline></CssBaseline>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}
export default Theme
