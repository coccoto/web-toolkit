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
import { MenuType } from '@/types/MenuType'

type PathParams = {
    params: {
        'menu-id': string
    }
}
const apiResponse: ApiResponseType<MenuType> = initApiResponseType<MenuType>()

export async function GET(request: NextRequest, { params }: PathParams): Promise<NextResponse> {
    try {
        await dbManager.connect()
        params = await params

        // Service を初期化する
        const menuListService = new MenuListService()

        // 返り値をセットする
        apiResponse.result = await menuListService.fetchMenu(Number(params['menu-id']))
        apiResponse.code = 200
        apiResponse.message = 'success'

        logger.info('[/api/menu-list/[menu-id]] route is complete.')
        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        apiResponse.code = 500
        apiResponse.message = 'error'

        logger.error('An error occurred in [/api/menu-list/[menu-id]] route. Error: ' + (error as Error).message)
        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
