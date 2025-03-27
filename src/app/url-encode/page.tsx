// components
import Main from '@/components/main/main.component'
// features
import UrlEncode from '@/features/url-encode/url-encode.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/api/fetchMenuData'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<UrlEncode></UrlEncode>}
            menuData={menuData}
        ></Main>
    )
}
