// @coccoto
import { DBManager } from '@coccoto/node-dbmanager'
// types
import { ViewMenuType } from '@/types/ViewMenuType'

export default class {

    private dbManager: DBManager

    constructor(dbManager: DBManager) {
        this.dbManager = dbManager
    }

    public async fetchMenuList(): Promise<ViewMenuType[]> {
        const sql = await this.dbManager.readFile(process.cwd() + '/src/sql/selectMenuList.sql')
        const result = await this.dbManager.select(sql)
        const viewMenuModel: ViewMenuType[] = result as ViewMenuType[]
        return viewMenuModel
    }
}
