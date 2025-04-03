// openai
import OpenAI from "openai";

export function createNameSuggestionPrompt(logicalName: string): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
    return [
        {
            role: 'system',
            content:
`Please suggest candidate physical names from the logical database name.

Conversion Rules:
- Support both table names and column names.
- Provide 5 candidates.
- Use snake_case format.
- Use English notation.
- Return the result as raw JSON (without any markdown formatting or explanations).

Output Format:
{
    "logicalName": ["", "", "", "", ""]
}`,
        },
        {
            role: 'user',
            content: logicalName,
        },
    ]
}
