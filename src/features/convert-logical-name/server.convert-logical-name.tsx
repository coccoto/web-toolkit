// features
import ClientConvertLogicalName from '@/features/convert-logical-name/client.convert-logical-name'
// lib
import { fetchMenu } from '@/lib/api/fetchMenu'
// types
import { MenuType } from '@/types/MenuType'
// styles
import styles from '@/features/convert-logical-name/server.convert-logical-name.module.sass'

export default async () => {

    const menu: MenuType = await fetchMenu('6')

    return (
        <div>
            <div>
                <h2 className={styles['header']}>{menu.feature_name}</h2>
                <div>{menu.description}</div>
            </div>
            <ClientConvertLogicalName></ClientConvertLogicalName>
        </div>
    )
}