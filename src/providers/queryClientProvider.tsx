'use client'

// react
import React from 'react'
// react query
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryClientProvider client={queryClient}>
            {children}
        </ReactQueryClientProvider>
    )
}
export default QueryClientProvider
