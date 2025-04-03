// types
import { ApiResponseType } from '@/types/ApiType'
import { LogicalNameCandidate } from '@/types/OpenApiType'
// scripts
import fetchRequest from '@/lib/api/fetchRequest'

export default async (inputLogicalName: string) => {
    const requestData = {
        logicalName: inputLogicalName
    }
    const response = await fetchRequest<ApiResponseType<LogicalNameCandidate>>('/api/convert-logical-name', {
        method: 'post',
        body: JSON.stringify(requestData)
    })
    return response.result as LogicalNameCandidate
}
