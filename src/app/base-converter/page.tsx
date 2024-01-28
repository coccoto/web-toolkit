// components
import Main from '@/components/main/main.component'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchMenuData from '@/utils/fetchMenuData'
// features
import BaseConverter from '@/features/base-converter/base-converter.component'

export default async function Page() {
  const menuData: ViewMenuType[] = await fetchMenuData()

  return (
      <Main
          children={<BaseConverter></BaseConverter>}
          menuData={menuData}
      ></Main>
  )
}
