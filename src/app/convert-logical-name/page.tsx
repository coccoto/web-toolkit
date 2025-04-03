// components
import Main from '@/components/main/main.component'
// features
import ServerConvertLogicalName from '@/features/convert-logical-name/server.convert-logical-name'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ServerConvertLogicalName></ServerConvertLogicalName>}
            menuList={menuList}
        ></Main>
    )
}
