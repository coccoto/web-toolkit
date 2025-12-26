// features
import ClientIndex from '@/features/index/client.index'
// styles
import styles from '@/features/index/server.index.module.sass'
// types
import { MenuType } from '@/types/menu.types'

type Props = {
    menuList: MenuType[],
}

export default async (props: Props) => {

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['header']}>Tools</h2>
                <div className={styles['description']}></div>
            </div>
            <ClientIndex
                menuList={props.menuList}
            ></ClientIndex>
        </div>
    )
}