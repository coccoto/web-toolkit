import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { DrawerMenu, Handler } from './drawer-menu.component'
import type { ViewMenuType } from '@/types/ViewMenuType'

// モックメニュー
const menuData: ViewMenuType[] = [
    {
        menu_id: 1,
        app_name: 'app_name_1',
        feature_name: 'feature_name_1',
        origin: 'origin_1',
        path: 'path_1',
        description: 'description_1',
        image_name: 'image_name_1',
        category_type: 1,
        sort_order: 1,
    },
    {
        menu_id: 2,
        app_name: 'app_name_2',
        feature_name: 'feature_name_2',
        origin: 'origin_2',
        path: 'path_2',
        description: 'description_2',
        image_name: 'image_name_2',
        category_type: 2,
        sort_order: 1,
    },
]

describe('drawer-menu.component', () => {

    it('isOpenDrawerMenu: false - 処理が適切であること', () => {
        render(
            <DrawerMenu
                isOpenDrawerMenu={false}
                menuData={menuData}
                setIsOpenDrawerMenu={vi.fn()}
            ></DrawerMenu>
        )

        // メニューが表示されること (PC)
        // PC は常に表示されているが、Mobile はメニューを開いた時だけ表示されるので注意すること
        expect(screen.getAllByText('Tools')).toHaveLength(1)
        expect(screen.getAllByText('Others')).toHaveLength(1)
        // category_type: 1
        expect(screen.getAllByText('feature_name_1')).toHaveLength(1)
        // category_type: 2
        expect(screen.getAllByText('app_name_2')).toHaveLength(1)
    })
    it('isOpenDrawerMenu: true - 処理が適切であること', () => {
        render(
            <DrawerMenu
                isOpenDrawerMenu={true}
                menuData={menuData}
                setIsOpenDrawerMenu={vi.fn()}
            ></DrawerMenu>
        )

        // メニューが表示されること (PC + Moble)
        expect(screen.getAllByText('Tools')).toHaveLength(2)
        expect(screen.getAllByText('Others')).toHaveLength(2)
        // category_type: 1
        expect(screen.getAllByText('feature_name_1')).toHaveLength(2)
        // category_type: 2
        expect(screen.getAllByText('app_name_2')).toHaveLength(2)
    })

    it('menuData: [] - 処理が適切であること', () => {
        render(
            <DrawerMenu
                isOpenDrawerMenu={true}
                menuData={[]}
                setIsOpenDrawerMenu={vi.fn()}
            ></DrawerMenu>
        )

        // メニューが表示されないこと
        expect(screen.queryByText('Tools')).not.toBeInTheDocument()
        expect(screen.queryByText('Others')).not.toBeInTheDocument()
    })
})
