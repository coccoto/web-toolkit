// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import BaseConverter from './base-converter.component'

describe('base-converter.component', () => {

    it('2 進数に値を入力した時、他の進数に適切な値が入力されること', async () => {
        render(<BaseConverter />)
    
        const user = userEvent.setup()

        const binaryInput = screen.getByLabelText('2 進数')
        const octalInput = screen.getByLabelText('8 進数')
        const decimalInput = screen.getByLabelText('10 進数')
        const hexInput = screen.getByLabelText('16 進数')

        // 項目に値を入力する
        await user.clear(binaryInput)
        await user.type(binaryInput, '1010')

        // 他の進数に適切な値が入力されていること
        expect(octalInput).toHaveValue(12)
        expect(decimalInput).toHaveValue(10)
        expect(hexInput).toHaveValue('A')
    })
})
