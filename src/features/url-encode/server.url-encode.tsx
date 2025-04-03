// features
import ClientUrlEncode from '@/features/url-encode/client.url-encode'
// lib
import { fetchMenu } from '@/lib/api/fetchMenu'
// types
import { MenuType } from '@/types/MenuType'
// styles
import styles from '@/features/url-encode/server.url-encode.module.sass'

export default async () => {

    const menu: MenuType = await fetchMenu('5')

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['header']}>{menu.feature_name}</h2>
                <div className={styles['description']}>{menu.description}</div>
            </div>
            <ClientUrlEncode></ClientUrlEncode>
        </div>
    )
}