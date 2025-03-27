// ApiRequestType
export type ApiRequestType<T = {}> = T
export const initApiRequestType = <T = {}>(): ApiRequestType<T> => {
    return {} as ApiRequestType<T>
}

// ApiResponseType
export type ApiResponseType<T = {}> = {
    message: string,
    code: number,
    result: T,
}
export const initApiResponseType = <T = {}>(): ApiResponseType<T> => {
    return {
        message: '',
        code: 0,
        result: {} as T,
    }
}
