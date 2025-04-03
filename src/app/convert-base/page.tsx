// components
import Main from '@/components/main/main.component'
// features
import ServerConvertBase from '@/features/convert-base/server.convert-base'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ServerConvertBase></ServerConvertBase>}
            menuList={menuList}
        ></Main>
    )
}
