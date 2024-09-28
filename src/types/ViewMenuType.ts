export type ViewMenuType = {
    id: number,
    app_name: string,
    feature_name: string,
    origin: string,
    path: string,
    location_no: number,
    sort_order: number,
}
export const initViewMenuType = (): ViewMenuType => {
    return {
        id: 0,
        app_name: '',
        feature_name: '',
        origin: '',
        path: '',
        location_no: 0,
        sort_order: 0,
    }
}
