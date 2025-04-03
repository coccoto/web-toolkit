// components
import Main from '@/components/main/main.component'
// features
import ConvertBase from '@/features/convert-base/convert-base'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<ConvertBase></ConvertBase>}
            menuList={menuList}
        ></Main>
    )
}
