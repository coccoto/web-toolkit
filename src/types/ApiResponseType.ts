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
