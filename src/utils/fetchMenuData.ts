// types
import { ApiResponseType } from '@/types/ApiResponseType'
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchRequest from '@/utils/fetchRequest'

export default async () => {
    const response = await fetchRequest<ApiResponseType<ViewMenuType[]>>('/api/get/menu-list', { method: 'post', cache: 'no-store' })
    return response.result as ViewMenuType[]
}
