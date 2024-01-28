// types
import { ApiResponseType } from '@/types/ApiResponseType'
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchRequest from '@/utils/fetchRequest'

export default async () => {
    const response = await fetchRequest<ApiResponseType<ViewMenuType[]>>('http://localhost:3200/api/get/menu-list', { method: 'post' })
    return response.result as ViewMenuType[]
}
