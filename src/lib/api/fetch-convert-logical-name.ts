// types
import { ApiResponseType } from '@/types/api.types'
import { LogicalNameCandidate } from '@/types/openapi.types'
// lib
import fetchRequest from '@/lib/api/fetch-request'

export default async (inputLogicalName: string, convertType: 0 | 1) => {
    const requestData = {
        logicalName: inputLogicalName,
        convertType: convertType,
    }
    const response = await fetchRequest<ApiResponseType<LogicalNameCandidate>>(`/api/convert-logical-name`, {
        method: 'post',
        body: JSON.stringify(requestData)
    })
    return response.result as LogicalNameCandidate
}
