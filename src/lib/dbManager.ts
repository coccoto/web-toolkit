// lib
import { logger } from '@/lib/logger'
// @coccoto
import { DBManager } from '@coccoto/node-dbmanager'

const requiredEnv = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE'] as const

for (const key of requiredEnv) {
    if (! process.env[key]) {
        throw new Error('The .env file is not configured.')
    }
}

export const dbManager = new DBManager({
    dbConnectionConfig: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_DATABASE as string,
    },
    logger: logger,
})
