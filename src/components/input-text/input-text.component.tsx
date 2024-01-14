// styles
import styles from '@/components/input-text/input-text.module.sass'
// @mui/material
import TextField from '@mui/material/TextField'

type Props = {
    label: string,
    placeholder: string,
    defaultValue: string
}

export default function inputText(props: Props) {
    return (
        <div className={styles['container']}>
            <div className={styles['label']}>{props.label}</div>
            <TextField 
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                fullWidth>
            </TextField>
        </div>
    )
}