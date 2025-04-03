// components
import Main from '@/components/main/main.component'
// features
import ConvertLogicalName from '@/features/convert-logical-name/convert-logical-name.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/lib/api/fetchMenuData'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<ConvertLogicalName></ConvertLogicalName>}
            menuData={menuData}
        ></Main>
    )
}
