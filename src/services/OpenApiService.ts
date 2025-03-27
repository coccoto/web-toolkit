// @coccoto
import { DBManager } from '@coccoto/node-dbmanager'
// openai
import OpenAI from 'openai'
// utils
import { createNameSuggestionPrompt } from '@/utils/prompts/convertLogicalNamePrompt'

export default class {

    private dbManager: DBManager
    private model: string
    private openai: OpenAI

    constructor(dbManager: DBManager) {
        this.dbManager = dbManager
        this.model = 'gpt-4o-mini-2024-07-18'
        this.openai = new OpenAI({ apiKey: process.env['API_KEY'] })
    }

    public async convertLogicalName(logicalName: string): Promise<string> {
        return await this.fetchOpenAi(createNameSuggestionPrompt(logicalName))
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
