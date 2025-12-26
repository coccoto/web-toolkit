// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import ClientConvertLogicalName from '../client.convert-logical-name'
// lib
import fetchConvertLogicalName from '@/lib/api/fetch-convert-logical-name'

vi.mock('@/lib/api/fetch-convert-logical-name', () => ({
    default: vi.fn().mockResolvedValue({
        logicalName: ['結果 1', '結果 2', '結果 3', '結果 4', '結果 5']
    })
}))
  
describe('client.convert-logical-name', () => {

    it('テーブル名を変換ボタンが適切に動作すること', async () => {
        render(<ClientConvertLogicalName></ClientConvertLogicalName>)
        
        const input = screen.getByLabelText('論理名称')
        await userEvent.type(input, '社員テーブル')
    
        const button = screen.getByRole('button', { name: 'テーブル名を変換' })
        await userEvent.click(button)
    
        // 適切な引数を fetch に渡していること
        await waitFor(() => {
            expect(fetchConvertLogicalName).toHaveBeenCalledWith('社員テーブル', 0)
        })
        // 命名候補に出力結果が表示されていること
        expect(screen.getByLabelText('候補 1')).toHaveValue('結果 1')
        expect(screen.getByLabelText('候補 2')).toHaveValue('結果 2')
        expect(screen.getByLabelText('候補 3')).toHaveValue('結果 3')
        expect(screen.getByLabelText('候補 4')).toHaveValue('結果 4')
        expect(screen.getByLabelText('候補 5')).toHaveValue('結果 5')
    })

    it('カラム名を変換ボタンが適切に動作すること', async () => {
        render(<ClientConvertLogicalName></ClientConvertLogicalName>)
        
        const input = screen.getByLabelText('論理名称')
        await userEvent.type(input, '社員コード')
    
        const button = screen.getByRole('button', { name: 'カラム名を変換' })
        await userEvent.click(button)
    
        // 適切な引数を fetch に渡していること
        await waitFor(() => {
            expect(fetchConvertLogicalName).toHaveBeenCalledWith('社員コード', 1)
        })
        // 命名候補に出力結果が表示されていること
        expect(screen.getByLabelText('候補 1')).toHaveValue('結果 1')
        expect(screen.getByLabelText('候補 2')).toHaveValue('結果 2')
        expect(screen.getByLabelText('候補 3')).toHaveValue('結果 3')
        expect(screen.getByLabelText('候補 4')).toHaveValue('結果 4')
        expect(screen.getByLabelText('候補 5')).toHaveValue('結果 5')
    })
})

