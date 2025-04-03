// types
import { ApiResponseType } from '@/types/ApiType'
import { LogicalNameCandidate } from '@/types/OpenApiType'
// scripts
import fetchRequest from '@/lib/api/fetchRequest'

export default async (inputLogicalName: string, convertType: 0 | 1) => {
    const requestData = {
        logicalName: inputLogicalName,
        convertType: convertType,
    }
    const response = await fetchRequest<ApiResponseType<LogicalNameCandidate>>('/api/convert-logical-name', {
        method: 'post',
        body: JSON.stringify(requestData)
    })
    return response.result as LogicalNameCandidate
}
