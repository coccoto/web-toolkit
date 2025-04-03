// components
import Main from '@/components/main/main.component'
// features
import ServerIndex from '@/features/index/server.index'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ServerIndex menuList={menuList}></ServerIndex>}
            menuList={menuList}
        ></Main>
    )
}
