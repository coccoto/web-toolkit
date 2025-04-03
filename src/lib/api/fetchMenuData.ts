// types
import { ApiResponseType } from '@/types/ApiType'
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchRequest from '@/lib/api/fetchRequest'

export default async () => {
    const response = await fetchRequest<ApiResponseType<ViewMenuType[]>>('/api/menu-list', { method: 'post' })
    return response.result as ViewMenuType[]
}
