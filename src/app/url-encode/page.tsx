// components
import Main from '@/components/main/main.component'
// features
import UrlEncode from '@/features/url-encode/url-encode'
// types
import { MenuType } from '@/types/MenuType'
// lib
import { fetchMenuList } from '@/lib/api/fetchMenu'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuList: MenuType[] = await fetchMenuList()

    return (
        <Main
            children={<UrlEncode></UrlEncode>}
            menuList={menuList}
        ></Main>
    )
}
