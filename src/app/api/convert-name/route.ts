// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// @coccoto
import { DBManager } from '@coccoto/node-dbmanager'
import { logger } from '@coccoto/node-logmanager'
// service
import OpenApiService from '@/services/OpenApiService'
// types
import { ApiRequestType, ApiResponseType, initApiResponseType } from '@/types/ApiType'

type RequestBody = ApiRequestType<{
    logicalName: string
}>

const dbManager = new DBManager()
const apiResponse: ApiResponseType<string> = initApiResponseType<string>()

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        await dbManager.connect()
        const requestBody = await request.json() as RequestBody

        // Service を初期化する
        const openApiService = new OpenApiService(dbManager)

        apiResponse.result = await openApiService.convertLogicalName(requestBody.logicalName)
        apiResponse.code = 200
        apiResponse.message = 'success'

        logger.info('[/api/convert-name] route is complete.')
        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        apiResponse.code = 500
        apiResponse.message = 'error'

        logger.error('An error occurred in [/api/convert-name] route. Error: ' + (error as Error).message)
        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
