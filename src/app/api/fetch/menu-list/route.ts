// next
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// @coccoto
import { DBManager } from '@coccoto/node-dbmanager'
import { logger } from '@coccoto/node-logmanager'
// service
import MenuListService from '@/services/fetch/menu-list/MenuListService'
// types
import { ApiResponseType, initApiResponseType } from '@/types/ApiResponseType'
import { ViewMenuType } from '@/types/ViewMenuType'

const dbManager = new DBManager()
const apiResponse: ApiResponseType<ViewMenuType[]> = initApiResponseType<ViewMenuType[]>()

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        await dbManager.connect()
        const menuListService = new MenuListService(dbManager)

        apiResponse.result = await menuListService.fetchMenuList()
        apiResponse.code = 200
        apiResponse.message = 'success'

        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        apiResponse.code = 500
        apiResponse.message = 'error'

        logger.error('An exception occurred. Error: ' + (error as Error).message)
        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
