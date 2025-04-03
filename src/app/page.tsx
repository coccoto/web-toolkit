// components
import Main from '@/components/main/main.component'
// features
import Index from '@/features/index'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<Index menuList={menuList}></Index>}
            menuList={menuList}
        ></Main>
    )
}
