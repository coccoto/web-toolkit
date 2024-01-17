import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import DBManager from '@/core/DBManager'
import LoggerManager from '@/core/LoggerManager'
import MenuService from '@/app/api/get/menu/MenuService'
import { ApiResponseType, initApiResponseType } from '@/types/ApiResponseType'

export async function POST(request: NextRequest): Promise<NextResponse> {
    const dbManager = new DBManager()
    const apiResponse: ApiResponseType = initApiResponseType()

    try {
        await dbManager.connect()

        const menuService = new MenuService(dbManager)

        apiResponse.result = await menuService.getViewMenu()
        apiResponse.code = 200
        apiResponse.message = 'success'

        return NextResponse.json({ ...apiResponse })

    } catch (error: unknown) {
        LoggerManager.error('An exception occurred. Error: ' + (error as Error).message);

        apiResponse.result = {}
        apiResponse.code = 500
        apiResponse.message = 'error'

        return NextResponse.json({ ...apiResponse })

    } finally {
        dbManager.disconnect()
    }
}
