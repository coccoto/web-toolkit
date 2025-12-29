// lib
import { prisma } from '@/lib/database/prisma'
import { loadQuery } from '@/lib/database/query-loader'
// types
import { MenuType } from '@/types/menu.types'
import { Prisma } from '../../generated/prisma/client'

export default class {

    constructor() {}

    public async fetchMenuList(): Promise<MenuType[]> {
        const sql = await loadQuery('select-menu-list.sql')
        const result = await prisma.$queryRaw<MenuType[]>(Prisma.raw(sql))
        return result
    }

    public async fetchMenu(menuId: number): Promise<MenuType> {
        const sql = await loadQuery('select-menu.sql')
        const result = await prisma.$queryRaw<MenuType[]>(
            Prisma.raw(sql.replace('?', menuId.toString()))
        )
        return result[0]
    }
}
