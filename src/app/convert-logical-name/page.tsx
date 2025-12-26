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

const menu: MenuType = await fetchMenu('6')
const menuList: MenuType[] = await fetchMenuList()

export const metadata: Metadata = {
    title: menu.feature_name + ' - Web Toolkit',
    description: menu.description
}

export default async () => {

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
