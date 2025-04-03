// components
import Main from '@/components/main/main.component'
// features
import ServerUrlEncode from '@/features/url-encode/server.url-encode'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ServerUrlEncode></ServerUrlEncode>}
            menuList={menuList}
        ></Main>
    )
}
