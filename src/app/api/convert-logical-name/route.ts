// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// lib
import { logger } from '@/lib/utils/logger'
// service
import OpenApiService from '@/services/openapi.service'
// types
import { ApiRequestType, ApiResponseType, initApiResponseType } from '@/types/api.types'
import { LogicalNameCandidate, initLogicalNameCandidate } from '@/types/openapi.types'

type RequestBody = ApiRequestType<{
    logicalName: string
    convertType: 0 | 1
}>

const apiResponse: ApiResponseType<LogicalNameCandidate> = initApiResponseType(initLogicalNameCandidate())

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
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
    }
}
