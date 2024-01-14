// react
import React from 'react'
// components
import InputText from '@/components/input-text/input-text.component'
// styles
import styles from '@/features/base-converter/base-converter.module.sass'

export default () => {
    return (
        <div className={styles['container']}>
            <div>
                <h2>進数変換</h2>
            </div>
            <div className={styles['wrapper-main']}>
                <InputText
                    label='2進数'
                    placeholder='10100000'
                    defaultValue=''
                ></InputText>
                <InputText
                    label='8進数'
                    placeholder='240'
                    defaultValue=''
                ></InputText>
                <InputText
                    label='10進数'
                    placeholder='160'
                    defaultValue=''
                ></InputText>
                <InputText
                    label='16進数'
                    placeholder='A0'
                    defaultValue=''
                ></InputText>
            </div>
        </div>
    )
}