// test
import { describe, it, expect, vi } from 'vitest'
import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import { InputField, InputConfigType } from '../input-field.component'

const props = {
    inputConfig: {
        componentId: 'componentId_1',
        type: 'text',
        label: 'label_1',
        placeholder: 'placeholder_1',
        helperMessage: 'helperMessage_1',
        errorMessage: 'errorMessage_1',
        inputValue: 'inputValue_1',
        isDisabled: false,
        isError: false,
    } as InputConfigType,
    handleClick: vi.fn(),
    handleBlur: vi.fn(),
    handleInput: vi.fn(),
}

describe('input-field.component', () => {

    it('isError: false の時の処理が適切であること', () => {
        render(<InputField {...props}></InputField>)

        // エラーメッセージが表示されないこと
        expect(screen.queryByText('errorMessage_1')).not.toBeInTheDocument()
    })
    it('isError: true の時の処理が適切であること', () => {
        const errorProps = {
            ...props,
            inputConfig: {
                ...props.inputConfig,
                isError: true,
            },
        }
        render(<InputField {...errorProps}></InputField>)

        // エラーメッセージが表示されること
        expect(screen.getByText('errorMessage_1')).toBeInTheDocument()
    })

    it('isDisabled: false の時の処理が適切であること', () => {
        render(<InputField {...props}></InputField>)

        // 読み取り専用チップが表示されないこと
        expect(screen.queryByTestId('readonly-chip.component')).not.toBeInTheDocument()
    })
    it('isDisabled: true の時の処理が適切であること', () => {
        const disabledProps = {
            ...props,
            inputConfig: {
                ...props.inputConfig,
                isDisabled: true,
            },
        }
        render(<InputField {...disabledProps}></InputField>)

        // 読み取り専用チップが表示されること
        expect(screen.getByTestId('readonly-chip.component')).toBeInTheDocument()
    })
})
