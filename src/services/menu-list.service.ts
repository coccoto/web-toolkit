// lib
import { prisma } from '@/lib/prisma'
import { loadSql } from '@/lib/database/sql-loader'
// types
import { MenuType } from '@/types/menu.types'
import { Prisma } from '../../generated/prisma/client'

export default class {

    constructor() {}

    public async fetchMenuList(): Promise<MenuType[]> {
        const sql = await loadSql('select-menu-list.sql')
        const result = await prisma.$queryRaw<MenuType[]>(Prisma.raw(sql))
        return result
    }

    public async fetchMenu(menuId: number): Promise<MenuType> {
        const sql = await loadSql('select-menu.sql')
        const result = await prisma.$queryRaw<MenuType[]>(
            Prisma.raw(sql.replace('?', menuId.toString()))
        )
        return result[0]
    }
}
