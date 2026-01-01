import type { Metadata } from 'next'
// components
import Main from '@/components/main/main.component'
// features
import ServerConvertLogicalName from '@/features/convert-logical-name/server.convert-logical-name'
// types
import { MenuType } from '@/types/menu.types'
// lib
import { fetchMenu, fetchMenuList } from '@/lib/api/fetch-menu'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    const menu: MenuType = await fetchMenu('6')
    return {
        title: menu.feature_name + ' - Web Toolkit',
        description: menu.description
    }
}

export default async function ConvertLogicalNamePage() {
    const menu: MenuType = await fetchMenu('6')
    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={
                <ServerConvertLogicalName
                    menu={menu}
                ></ServerConvertLogicalName>
            }
            menuList={menuList}
        ></Main>
    )
}
