// features
import ClientConvertBase from '@/features/convert-base/client.convert-base'
// types
import { MenuType } from '@/types/MenuType'
// styles
import styles from '@/features/convert-base/server.convert-base.module.sass'

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
            <ClientConvertBase></ClientConvertBase>
        </div>
    )
}