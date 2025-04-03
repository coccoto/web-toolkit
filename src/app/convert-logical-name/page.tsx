// components
import Main from '@/components/main/main.component'
// features
import ConvertLogicalName from '@/features/convert-logical-name/convert-logical-name'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ConvertLogicalName></ConvertLogicalName>}
            menuList={menuList}
        ></Main>
    )
}
