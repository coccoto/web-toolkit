export type ViewMenuType = {
    menu_id: number,
    app_name: string,
    feature_name: string,
    origin: string,
    path: string,
    description: string,
    image_name: string,
    category_type: number,
    sort_order: number,
}
export const initViewMenuType = (): ViewMenuType => {
    return {
        menu_id: 0,
        app_name: '',
        feature_name: '',
        origin: '',
        path: '',
        description: '',
        image_name: '',
        category_type: 0,
        sort_order: 0,
    }
}
