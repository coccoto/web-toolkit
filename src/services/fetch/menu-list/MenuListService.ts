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
        const query = await this.dbManager.readFile(process.cwd() + '/src/services/fetch/menu-list/queries/selectMenuList.sql')
        const result = await this.dbManager.select(query)
        const viewMenuModel: ViewMenuType[] = result as ViewMenuType[]
        return viewMenuModel
    }
}
