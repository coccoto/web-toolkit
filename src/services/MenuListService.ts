// lib
import { dbManager } from '@/lib/dbManager'
// types
import { ViewMenuType } from '@/types/ViewMenuType'

export default class {

    constructor() {}

    public async fetchMenuList(): Promise<ViewMenuType[]> {
        const sql = await dbManager.readFile(process.cwd() + '/src/sql/selectMenuList.sql')
        const result = await dbManager.select(sql)
        const viewMenuModel: ViewMenuType[] = result as ViewMenuType[]
        return viewMenuModel
    }
}
