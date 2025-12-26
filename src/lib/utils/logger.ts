// @coccoto
import { initLogger, getLogger } from '@coccoto/node-logmanager'

const requiredEnv = ['LOG_DIR', 'NEXT_PUBLIC_ENVIRONMENT'] as const

for (const key of requiredEnv) {
    if (! process.env[key]) {
        throw new Error('The .env file is not configured.')
    }
}

initLogger({
    environment: process.env.ENVIRONMENT as 'development' | 'production',
    logDir: process.env.LOG_DIR as string,
})
export const logger = getLogger()
