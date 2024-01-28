// types
import { ApiResponseType } from '@/types/ApiResponseType'
import { ViewMenuType } from '@/types/ViewMenuType'
// scripts
import fetchApi from '@/assets/scripts/fetchApi'

export default async () => {
    const response = await fetchApi<ApiResponseType<ViewMenuType[]>>('http://localhost:3200/api/get/menu-list', { method: 'post' })
    return response.result as ViewMenuType[]
}
