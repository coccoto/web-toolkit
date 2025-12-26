// features
import ClientUrlEncode from '@/features/url-encode/client.url-encode'
// lib
import { fetchMenu } from '@/lib/api/fetchMenu'
// types
import { MenuType } from '@/types/menu.types'
// styles
import styles from '@/features/url-encode/server.url-encode.module.sass'

type Props = {
    menu: MenuType
}

export default async (props: Props) => {

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['header']}>{props.menu.feature_name}</h2>
                <div className={styles['description']}>{props.menu.description}</div>
            </div>
            <ClientUrlEncode></ClientUrlEncode>
        </div>
    )
}