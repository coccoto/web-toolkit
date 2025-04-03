'use client'

// react
import React from 'react'
// types
import { MenuType } from '@/types/MenuType'
// styles
import styles from '@/features/index/client.index.module.sass'
// @mui
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'

type Props = {
    menuList: MenuType[],
}

export default (props: Props) => {

    const createElemCard = () => {
        if (! props.menuList || ! props.menuList) {
            return
        }
        const sectionData_1 = props.menuList.filter((item) => item.category_type === 1)

        return (
            <div className={styles['card-wrapper']}>
                {sectionData_1.map((item) => (
                    <Card key={item.menu_id} sx={{
                        maxWidth: 300,
                        backgroundColor: '#fcfcfc',
                        border: '1px solid #efefef'
                    }}>
                        <CardActionArea href={item.path}>
                            <CardMedia
                                component={'img'}
                                image={'/images/' + item.image_name + '.png'}
                            ></CardMedia>
                            <CardContent className={styles['card-content']}>
                                <div>
                                    <h3 className={styles['header']}>{item.feature_name}</h3>
                                </div>
                                <div className={styles['description']}>{item.description}</div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <div className={styles['container']}>
            {createElemCard()}
        </div>
    )
}
