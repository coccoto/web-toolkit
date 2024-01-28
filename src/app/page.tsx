// components
import Main from '@/components/main/main.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/fetchMenuData'

export default async function Page() {
    const menuData: ViewMenuType[] = await fetchMenuData()

    return (
        <Main
            children={<div></div>}
            menuData={menuData}
        ></Main>
    )
}
