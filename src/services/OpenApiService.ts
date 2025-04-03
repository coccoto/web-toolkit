// openai
import OpenAI from 'openai'
// utils
import { createNameSuggestionPrompt } from '@/utils/prompts/convertLogicalNamePrompt'
// types
import { LogicalNameCandidate } from '@/types/OpenApiType'

export default class {

    private model: string
    private openai: OpenAI

    constructor() {
        this.model = 'gpt-4o-mini-2024-07-18'
        this.openai = new OpenAI({ apiKey: process.env['OPEN_AI_API_KEY'] })
    }

    public async convertLogicalName(logicalName: string, convertType: 0 | 1): Promise<LogicalNameCandidate> {
        const response = await this.fetchOpenAi(createNameSuggestionPrompt(logicalName, convertType))

        try {
            return JSON.parse(response) as LogicalNameCandidate

        } catch (error: any) {
            throw new Error(`JSON parse error: ${error.message}. response = ${response}`)
        }
    }

    private async fetchOpenAi(messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]): Promise<string> {
        try {
            const response: OpenAI.Chat.Completions.ChatCompletion = await this.openai.chat.completions.create({
                model: this.model,
                messages,
            })

            if (! response.choices || response.choices.length === 0) {
                throw new Error(`OpenAI API Error: choices is empty. response = ${JSON.stringify(response)}`)
            }
            const message = response.choices[0].message
            if (! message || ! message.content) {
                throw new Error(`OpenAI API Error: Response message is empty or invalid. response = ${JSON.stringify(response)}`)
            }
            return message.content
    
        } catch (error: any) {
            throw new Error(`OpenAI API Error: ${error.message}`)
        }
    }
}
