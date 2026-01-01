import type { Metadata } from 'next'
// components
import Main from '@/components/main/main.component'
// features
import ServerUrlEncode from '@/features/url-encode/server.url-encode'
// types
import { MenuType } from '@/types/menu.types'
// lib
import { fetchMenu, fetchMenuList } from '@/lib/api/fetch-menu'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    const menu: MenuType = await fetchMenu('5')
    return {
        title: menu.feature_name + ' - Web Toolkit',
        description: menu.description
    }
}

export default async function UrlEncodePage() {
    const menu: MenuType = await fetchMenu('5')
    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={
                <ServerUrlEncode
                    menu={menu}
                ></ServerUrlEncode>
            }
            menuList={menuList}
        ></Main>
    )
}
