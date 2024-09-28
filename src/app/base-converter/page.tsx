// components
import Main from '@/components/main/main.component'
// features
import BaseConverter from '@/features/base-converter/base-converter.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/fetchMenuData'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<BaseConverter></BaseConverter>}
            menuData={menuData}
        ></Main>
    )
}
