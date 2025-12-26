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

const menu: MenuType = await fetchMenu('1')
const menuList: MenuType[] = await fetchMenuList()

export const metadata: Metadata = {
    title: menu.feature_name + ' - Web Toolkit',
    description: menu.description
}

export default async () => {

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
