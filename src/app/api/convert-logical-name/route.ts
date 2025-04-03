// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// lib
import { dbManager } from '@/lib/dbManager'
import { logger } from '@/lib/logger'
// service
import OpenApiService from '@/services/OpenApiService'
// types
import { ApiRequestType, ApiResponseType, initApiResponseType } from '@/types/ApiType'
import { LogicalNameCandidate } from '@/types/OpenApiType'

type RequestBody = ApiRequestType<{
    logicalName: string
    convertType: 0 | 1
}>

const apiResponse: ApiResponseType<LogicalNameCandidate> = initApiResponseType<LogicalNameCandidate>()

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        await dbManager.connect()
        const requestBody = await request.json() as RequestBody

        // Service を初期化する
        const openApiService = new OpenApiService()
        const result = await openApiService.convertLogicalName(requestBody.logicalName, requestBody.convertType)

        // 返り値をセットする
        apiResponse.result = result
        apiResponse.code = 200
        apiResponse.message = 'success'

        logger.info('[/api/convert-logical-name] route is complete.')
        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        apiResponse.code = 500
        apiResponse.message = 'error'

        logger.error('An error occurred in [/api/convert-logical-name] route. Error: ' + (error as Error).message)
        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
