export type ViewMenuType = {
    id: number,
    system_name: string,
    screen_name: string,
    origin: string,
    path: string,
    section_no: number,
}
export const initViewMenuType = (): ViewMenuType => {
    return {
        id: 0,
        system_name: '',
        screen_name: '',
        origin: '',
        path: '',
        section_no: 0,
    }
}
