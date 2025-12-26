// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import { Textarea, TextareaConfigType } from './textarea.component'
import styles from '@/components/textarea/textarea.module.sass'

const props = {
    textareaConfig: {
        componentId: 'componentId_1',
        label: 'label_1',
        placeholder: 'placeholder_1',
        helperMessage: 'helperMessage_1',
        errorMessage: 'errorMessage_1',
        inputValue: 'inputValue_1',
        isDisabled: false,
        isError: false,
    } as TextareaConfigType,
    handleClick: vi.fn(),
    handleBlur: vi.fn(),
    handleInput: vi.fn(),
}

describe('textarea.component', () => {

    it('isError: false の時の処理が適切であること', () => {
        render(<Textarea {...props}></Textarea>)

        // エラーメッセージが表示されないこと
        expect(screen.queryByText('errorMessage_1')).not.toBeInTheDocument()
        // 適切なクラスが付与されていること
        expect(screen.getByLabelText('label_1')).toHaveClass(styles['textarea'])
        expect(screen.getByTestId('helper-text')).toHaveClass(styles['helper-text'])
    })
    it('isError: true の時の処理が適切であること', () => {
        const errorProps = {
            ...props,
            textareaConfig: {
                ...props.textareaConfig,
                isError: true,
            },
        }
        render(<Textarea {...errorProps}></Textarea>)

        // エラーメッセージが表示されること
        expect(screen.getByText('errorMessage_1')).toBeInTheDocument()
        // 適切なクラスが付与されていること
        expect(screen.getByLabelText('label_1')).toHaveClass(styles['textarea--error'])
        expect(screen.getByTestId('helper-text')).toHaveClass(styles['helper-text--error'])
    })

    it('isDisabled: false の時の処理が適切であること', () => {
        render(<Textarea {...props}></Textarea>)

        // 読み取り専用チップが表示されないこと
        expect(screen.queryByTestId('readonly-chip.component')).not.toBeInTheDocument()
    })
    it('isDisabled: true の時の処理が適切であること', () => {
        const disabledProps = {
            ...props,
            textareaConfig: {
                ...props.textareaConfig,
                isDisabled: true,
            },
        }
        render(<Textarea {...disabledProps}></Textarea>)

        // 読み取り専用チップが表示されること
        expect(screen.getByTestId('readonly-chip.component')).toBeInTheDocument()
    })
})
