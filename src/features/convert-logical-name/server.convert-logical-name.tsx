// features
import ClientConvertLogicalName from '@/features/convert-logical-name/client.convert-logical-name'
// types
import { MenuType } from '@/types/menu.types'
// styles
import styles from '@/features/convert-logical-name/server.convert-logical-name.module.sass'

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
            <ClientConvertLogicalName></ClientConvertLogicalName>
        </div>
    )
}