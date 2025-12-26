// components
import Main from '@/components/main/main.component'
// features
import ServerIndex from '@/features/index/server.index'
// types
import { MenuType } from '@/types/menu.types'
// lib
import { fetchMenuList } from '@/lib/api/fetch-menu'

export const dynamic = 'force-dynamic'

const menuList: MenuType[] = await fetchMenuList()

export default async () => {

    return (
        <Main
            children={
                <ServerIndex
                    menuList={menuList}
                ></ServerIndex>}
            menuList={menuList}
        ></Main>
    )
}
