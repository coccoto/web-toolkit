//　react
import { useState, useEffect } from 'react'
// types
import { ApiResponseType } from '@/types/ApiResponseType'

const useFetch = (endpoint: string, options: RequestInit) => {

    const [data, setData] = useState<ApiResponseType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<unknown | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint, options)

                if (! response.ok) {
                    throw new Error(`HTTP Error. Status: ${response.status}`)
                }
                const result = await response.json()
                setData(result)
            } catch (error: unknown) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [endpoint])

    return { data, isLoading, error }
}

export default useFetch
