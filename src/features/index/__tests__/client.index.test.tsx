// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import ClientIndex from './client.index'
import type { MenuType } from '@/types/MenuType'

const menuList: MenuType[] = [
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

describe('client.index', () => {

    it('category_type: 1 のアイテムが表示されること', () => {
        render(<ClientIndex menuList={menuList}></ClientIndex>)
    
        // アイテムが表示されること
        expect(screen.getByText('feature_name_1')).toBeInTheDocument()
        expect(screen.getByText('description_1')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', '/images/image_name_1.png')
        expect(screen.getByRole('link')).toHaveAttribute('href', 'path_1')
    })
    
    it('category_type: 2 のアイテムが表示されないこと', () => {
        render(<ClientIndex menuList={menuList}></ClientIndex>)

        // アイテムが表示されないこと
        expect(screen.queryByText('feature_name_2')).not.toBeInTheDocument()
        expect(screen.queryByText('description_2')).not.toBeInTheDocument()
    })
})
