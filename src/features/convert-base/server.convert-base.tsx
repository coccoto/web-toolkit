// features
import ClientConvertBase from '@/features/convert-base/client.convert-base'
// lib
import { fetchMenu } from '@/lib/api/fetchMenu'
// types
import { MenuType } from '@/types/MenuType'
// styles
import styles from '@/features/convert-base/server.convert-base.module.sass'

export default async () => {

    const menu: MenuType = await fetchMenu('1')

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['header']}>{menu.feature_name}</h2>
                <div className={styles['description']}>{menu.description}</div>
            </div>
            <ClientConvertBase></ClientConvertBase>
        </div>
    )
}