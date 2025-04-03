// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// lib
import { dbManager } from '@/lib/dbManager'
import { logger } from '@/lib/logger'
// service
import MenuListService from '@/services/MenuListService'
// types
import { ApiRequestType, ApiResponseType, initApiResponseType } from '@/types/ApiType'
import { ViewMenuType } from '@/types/ViewMenuType'

type RequestBody = ApiRequestType<{}>

const apiResponse: ApiResponseType<ViewMenuType[]> = initApiResponseType<ViewMenuType[]>()

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        await dbManager.connect()
        // const requestBody = await request.json() as RequestBody

        // Service を初期化する
        const menuListService = new MenuListService()

        apiResponse.result = await menuListService.fetchMenuList()
        apiResponse.code = 200
        apiResponse.message = 'success'

        logger.info('[/api/menu-list] route is complete.')
        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        apiResponse.code = 500
        apiResponse.message = 'error'

        logger.error('An error occurred in [/api/menu-list] route. Error: ' + (error as Error).message)
        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
