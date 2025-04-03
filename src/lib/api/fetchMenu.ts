// types
import { ApiResponseType } from '@/types/ApiType'
import { MenuType } from '@/types/MenuType'
// lib
import fetchRequest from '@/lib/api/fetchRequest'

export const fetchMenuList = async () => {
    const response = await fetchRequest<ApiResponseType<MenuType[]>>(`/api/menu-list`, {
        method: 'get'
    })
    return response.result as MenuType[]
}

export const fetchMenu = async (menuId: string) => {
    const response = await fetchRequest<ApiResponseType<MenuType>>(`/api/menu-list/${menuId}`, {
        method: 'get'
    })
    return response.result as MenuType
}
