// components
import Main from '@/components/main/main.component'
// features
import ConvertBase from '@/features/convert-base/convert-base.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/api/fetchMenuData'

export const dynamic = 'force-dynamic'

export default async () => {

    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<ConvertBase></ConvertBase>}
            menuData={menuData}
        ></Main>
    )
}
