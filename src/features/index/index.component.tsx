'use client'

// react
import React from 'react'
// types
import { ViewMenuType } from '@/types/ViewMenuType'
// styles
import styles from '@/features/index/index.module.sass'
// @mui
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'

type Props = {
    menuData: ViewMenuType[],
}

export default (props: Props) => {

    // Create Element
    const elemCard = () => {
        if (props.menuData === null || props.menuData === undefined || Object.keys(props.menuData).length === 0) {
            return
        }
        const section1Data = props.menuData.filter((item) => item.category_type === 1)

        return (
            <div className={styles['card-container']}>
                {section1Data.map((item) => (
                    <Card key={item.menu_id} sx={{
                            maxWidth: 300,
                            backgroundColor: '#fcfcfc',
                            border: '1px solid #efefef'
                        }}>
                        <CardActionArea href={item.path}>
                            <CardMedia component={'img'} image={'/images/' + item.image_name + '.png'}></CardMedia>
                            <CardContent className={styles['card-content']}>
                                <div>
                                    <h3 className={styles['card-header']}>{item.feature_name}</h3>
                                </div>
                                <div className={styles['card-description']}>{item.description}</div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        )

    }

    return (
        <div className={styles['container']}>
            <div>
                <h2 className={styles['feature-header']}>Tools</h2>
            </div>
            {elemCard()}
        </div>
    )
}
