// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// lib
import { logger } from '@/lib/utils/logger'
// service
import MenuListService from '@/services/menu-list.service'
// types
import { ApiRequestType, ApiResponseType, initApiResponseType } from '@/types/api.types'
import { MenuType } from '@/types/menu.types'

type Params = {
    params: Promise<{
    }>
}
const apiResponse: ApiResponseType<MenuType[]> = initApiResponseType([])

export async function GET(request: NextRequest, { params }: Params): Promise<NextResponse> {
    try {
        // Service を初期化する
        const menuListService = new MenuListService()

        // 返り値をセットする
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
    }
}
