// @coccoto
import { logger } from '@coccoto/node-logmanager'

export default async () => {
    if (process.env['ENVIRONMENT'] === 'development') {
        return 'http://localhost:18010'

    } else if (process.env['ENVIRONMENT'] === 'production') {
        return 'https://web-toolkit.coccoto.com'

    } else {
        logger.error('An error occurred in getLocation.')
        return null
    }
}