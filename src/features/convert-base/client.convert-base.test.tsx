// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import ConvertBase from './client.convert-base'

const user = userEvent.setup()

const getInputs = () => ({
    binaryInput: screen.getByLabelText('2 進数'),
    octalInput: screen.getByLabelText('8 進数'),
    decimalInput: screen.getByLabelText('10 進数'),
    hexInput: screen.getByLabelText('16 進数'),
})

describe('convert-base.component', () => {

    it('2 進数に値を入力した時、他の進数に適切な値が入力されること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()

        await user.clear(binaryInput)
        await user.type(binaryInput, '1010')

        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(1010)
        expect(octalInput).toHaveValue(12)
        expect(decimalInput).toHaveValue(10)
        expect(hexInput).toHaveValue('A')

        await user.clear(binaryInput)
        await user.type(binaryInput, '11111111')

        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(11111111)
        expect(octalInput).toHaveValue(377)
        expect(decimalInput).toHaveValue(255)
        expect(hexInput).toHaveValue('FF')
    })

    it('8 進数に値を入力した時、他の進数に適切な値が入力されること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()
    
        await user.clear(octalInput)
        await user.type(octalInput, '12')
    
        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(1010)
        expect(octalInput).toHaveValue(12)
        expect(decimalInput).toHaveValue(10)
        expect(hexInput).toHaveValue('A')

        await user.clear(octalInput)
        await user.type(octalInput, '377')

        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(11111111)
        expect(octalInput).toHaveValue(377)
        expect(decimalInput).toHaveValue(255)
        expect(hexInput).toHaveValue('FF')
    })

    it('10 進数に値を入力した時、他の進数に適切な値が入力されること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()
    
        await user.clear(decimalInput)
        await user.type(decimalInput, '10')
    
        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(1010)
        expect(octalInput).toHaveValue(12)
        expect(decimalInput).toHaveValue(10)
        expect(hexInput).toHaveValue('A')

        await user.clear(decimalInput)
        await user.type(decimalInput, '255')

        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(11111111)
        expect(octalInput).toHaveValue(377)
        expect(decimalInput).toHaveValue(255)
        expect(hexInput).toHaveValue('FF')
    })

    it('16 進数に値を入力した時、他の進数に適切な値が入力されること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()
    
        await user.clear(hexInput)
        await user.type(hexInput, 'A')
    
        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(1010)
        expect(octalInput).toHaveValue(12)
        expect(decimalInput).toHaveValue(10)
        expect(hexInput).toHaveValue('A')

        await user.clear(hexInput)
        await user.type(hexInput, 'FF')

        // 他の進数に適切な値が入力されていること
        expect(binaryInput).toHaveValue(11111111)
        expect(octalInput).toHaveValue(377)
        expect(decimalInput).toHaveValue(255)
        expect(hexInput).toHaveValue('FF')
    })

    it('不整値を入力した時、警告メッセージが表示されること。正しい値を入力後、警告メッセージが表示されなくなること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()
    
        await user.type(binaryInput, '2')

        // 警告メッセージが表示されていること
        expect(screen.getByText('入力された値が正しくありません。2進数の形式で入力してください。')).toBeInTheDocument()
        // 他の項目に警告メッセージが表示されていないこと
        expect(screen.queryByText('入力された値が正しくありません。8進数の形式で入力してください。')).not.toBeInTheDocument()
        expect(screen.queryByText('入力された値が正しくありません。10進数の形式で入力してください。')).not.toBeInTheDocument()
        expect(screen.queryByText('入力された値が正しくありません。16進数の形式で入力してください。')).not.toBeInTheDocument()

        await user.clear(binaryInput)
        await user.type(binaryInput, '1010')

        await waitFor(() => {
            // 表示されていた警告メッセージが非表示になること
            expect(screen.queryByText('入力された値が正しくありません。2進数の形式で入力してください。')).not.toBeInTheDocument()
        })
    })

    it('空文字を入力した時、他の全ての項目が空になること', async () => {
        render(<ConvertBase></ConvertBase>)

        const { binaryInput, octalInput, decimalInput, hexInput } = getInputs()

        await user.type(binaryInput, '1010')
        await user.clear(binaryInput)

        // 項目が空になること
        expect(binaryInput).toHaveValue(null)
        expect(octalInput).toHaveValue(null)
        expect(decimalInput).toHaveValue(null)
        expect(hexInput).toHaveValue('')
    })
})

