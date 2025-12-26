import type { Metadata } from 'next'
// components
import Main from '@/components/main/main.component'
// features
import ServerUrlEncode from '@/features/url-encode/server.url-encode'
// types
import { MenuType } from '@/types/menu.types'
// lib
import { fetchMenu, fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

const menu: MenuType = await fetchMenu('5')
const menuList: MenuType[] = await fetchMenuList()

export const metadata: Metadata = {
    title: menu.feature_name + ' - Web Toolkit',
    description: menu.description
}

export default async () => {

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
