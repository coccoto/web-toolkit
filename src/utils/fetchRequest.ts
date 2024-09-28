// scripts
import getLocation from '@/utils/getLocation'

export default async <T>(endpoint: string, options: RequestInit): Promise<T> => {
    const requestUrl = await getLocation() + endpoint
    
    try {
        const response = await fetch(requestUrl, options)
        if (! response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`)
        }
        const data = await response.json() as T
        return data

    } catch (error) {
        console.error('fetch failed')
        return {} as T
    }
}
