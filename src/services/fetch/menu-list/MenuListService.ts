// @coccoto
import type { DBManager } from '@coccoto/node-dbmanager'
// types
import { ViewMenuType } from '@/types/ViewMenuType'

const querySelectAll = () => {
    return `
        SELECT
            main.id
            , mst.app_name
            , mst.feature_name
            , mst.origin
            , mst.path
            , main.location_no
            , main.sort_order
        FROM webtoolkit.mst_menu AS main
        INNER JOIN global_mst.mst_menu AS mst
            ON main.global_menu_id = mst.id
        ORDER BY main.location_no, main.sort_order
    `
}

export default class {

    private dbManager: DBManager

    constructor(dbManager: DBManager) {
        this.dbManager = dbManager
    }

    public async getViewMenu(): Promise<ViewMenuType[]> {
        const result = await this.dbManager.select(querySelectAll())
        const viewMenuModel: ViewMenuType[] = result as ViewMenuType[]
        return viewMenuModel
    }
}
