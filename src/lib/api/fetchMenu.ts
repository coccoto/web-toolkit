// types
import { ApiResponseType } from '@/types/ApiType'
import { MenuType, initMenuType } from '@/types/MenuType'
// lib
import fetchRequest from '@/lib/api/fetchRequest'

export const fetchMenuList = async () => {
    const response = await fetchRequest<ApiResponseType<MenuType[]>>(`/api/menu-list`, {
        method: 'get'
    })
    return response.result || []
}

export const fetchMenu = async (menuId: string) => {
    const response = await fetchRequest<ApiResponseType<MenuType>>(`/api/menu-list/${menuId}`, {
        method: 'get'
    })
    return response.result || initMenuType()
}
