import type { Metadata } from 'next'
// components
import Main from '@/components/main/main.component'
// features
import ServerConvertBase from '@/features/convert-base/server.convert-base'
// types
import { MenuType } from '@/types/menu.types'
// lib
import { fetchMenu, fetchMenuList } from '@/lib/api/fetch-menu'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    const menu: MenuType = await fetchMenu('1')
    return {
        title: menu.feature_name + ' - Web Toolkit',
        description: menu.description
    }
}

export default async function ConvertBasePage() {
    const menu: MenuType = await fetchMenu('1')
    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={
                <ServerConvertBase
                    menu={menu}
                ></ServerConvertBase>
            }
            menuList={menuList}
        ></Main>
    )
}
