// scripts
import getLocation from '@/utils/getLocation'
// @coccoto
import { logger } from '@coccoto/node-logmanager'

export default async <T>(endpoint: string, options: RequestInit): Promise<T> => {
    const requestUrl = await getLocation() + endpoint

    try {
        const response = await fetch(requestUrl, options)
        if (! response.ok) {
            logger.error('An error occurred in fetchRequest. requestUrl: ' + requestUrl)
        }
        const data = await response.json() as T
        logger.info('fetchRequest is complete. requestUrl: ' + requestUrl)
        return data

    } catch (error) {
        logger.error('An error occurred in fetchRequest. requestUrl: ' + requestUrl)
        return {} as T
    }
}
