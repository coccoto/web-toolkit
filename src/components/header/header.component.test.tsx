import { render, screen, fireEvent  } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Header from './header.component'

describe('header.component', () => {

    it('case 1 - メニューアイコンをクリックした時に handleClickMenuButton が発火されること', () => {
        const mockFn = vi.fn()
        render(<Header handleClickMenuButton={mockFn}></Header>)

        const button = screen.getByRole('button', { name: 'menu-button' })
        fireEvent.click(button)

        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})
