export type ApiResponseType = {
    message: string,
    code: number,
    result: {}
}
export const initApiResponseType = (): ApiResponseType => {
    return {
        message: '',
        code: 0,
        result: {},
    }
}
