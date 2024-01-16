import type DBManager from "@/core/DBManager"
import { ViewMenuType } from '@/types/ViewMenuType'

export default class {

    private dbManager: DBManager

    constructor(dbManager: DBManager) {
        this.dbManager = dbManager
    }

    public async getViewMenu(): Promise<ViewMenuType[]> {
        const result = await this.dbManager.select('SELECT * FROM view_menu')
        const viewMenuModel: ViewMenuType[] = result as ViewMenuType[];
        return viewMenuModel
    }
}

