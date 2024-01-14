'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"

const customTheme = createTheme({});

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
