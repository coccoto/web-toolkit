// lib
import { dbManager } from '@/lib/dbManager'
// types
import { MenuType } from '@/types/MenuType'

export default class {

    constructor() {}

    public async fetchMenuList(): Promise<MenuType[]> {
        const sql = await dbManager.readFile(process.cwd() + '/src/sql/selectMenuList.sql')
        const result = await dbManager.select<MenuType>(sql)
        const menuList: MenuType[] = result as MenuType[]
        return menuList
    }

    public async fetchMenu(menuId: number): Promise<MenuType> {
        const params = [
            menuId
        ]
        const sql = await dbManager.readFile(process.cwd() + '/src/sql/selectMenu.sql')
        const result = await dbManager.select<MenuType>(sql, params)

        const menu: MenuType = result[0] as MenuType
        return menu
    }
}
