// components
import Main from '@/components/main/main.component'
// features
import Index from '@/features/index/index.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/fetchMenuData'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<Index menuData={menuData}></Index>}
            menuData={menuData}
        ></Main>
    )
}
