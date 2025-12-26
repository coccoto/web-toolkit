// test
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import ClientUrlEncode from './client.url-encode'

const user = userEvent.setup()

const getInputs = () => ({
    input: screen.getByLabelText('変換するデータを入力'),
    output: screen.getByLabelText('変換後のデータ'),
})

describe('client.url-encode', () => {

    it('エンコードが適切に動作すること', async () => {
        render(<ClientUrlEncode></ClientUrlEncode>)

        const { input, output } = getInputs()

        await user.clear(input)
        await user.type(input, 'https://example.com')

        // 入力した値がエンコードされて出力されていること
        expect(output).toHaveValue('https%3A%2F%2Fexample.com')
    })

    it('デコードが適切に動作すること', async () => {
        render(<ClientUrlEncode></ClientUrlEncode>)

        const { input, output } = getInputs()
        const decodeButton = screen.getByRole('button', { name: 'デコード' })

        await user.click(decodeButton) // デコードモードに切り替える
        await user.clear(input)
        await user.type(input, 'https%3A%2F%2Fexample.com')

        // 入力した値がデコードされて出力されていること
        expect(output).toHaveValue('https://example.com')
    })

    it('エンコードモードとデコードモードを切り替えできること', async () => {
        render(<ClientUrlEncode></ClientUrlEncode>)

        const { input, output } = getInputs()
        const encordButton = screen.getByRole('button', { name: 'エンコード' })
        const decodeButton = screen.getByRole('button', { name: 'デコード' })

        await user.clear(input)
        await user.type(input, 'https://example.com')

        // 入力した値がエンコードされて出力されていること
        expect(output).toHaveValue('https%3A%2F%2Fexample.com')

        await user.click(decodeButton) // デコードモードに切り替える

        // 入力した値がデコードされて出力されていること (入力値は未エンコードのため、デコードしても出力値は同値になる)
        expect(output).toHaveValue('https://example.com')

        await user.click(encordButton) // エンコードモードに切り替える

       // 入力した値がエンコードされて出力されていること
        expect(output).toHaveValue('https%3A%2F%2Fexample.com')
    })

    it('選択済みのトグルボタンをクリックしても、選択されたままであること', async () => {
        render(<ClientUrlEncode></ClientUrlEncode>)

        const encodeButton = screen.getByRole('button', { name: 'エンコード' })

        // 初期状態はトグルボタンが選択済みであること
        expect(encodeButton).toHaveAttribute('aria-pressed', 'true')
    
        await user.click(encodeButton)

        // トグルボタンが選択されたままであること
        expect(encodeButton).toHaveAttribute('aria-pressed', 'true')
    })

})
