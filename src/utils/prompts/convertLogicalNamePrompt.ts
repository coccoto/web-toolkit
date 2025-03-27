// openai
import OpenAI from "openai";

export function createNameSuggestionPrompt(logicalName: string): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
    return [
        {
            role: 'system',
            content:
`Please suggest candidate physical names from the logical database name.

Conversion Rules:
- Apply to both table names and column names.
- Provide 5 candidates.
- Use snake_case format.
- Use English notation.
- Output should be in JSON format.

Output Format:
{
"<logical_name>": ["", "", "", "", ""]
}`,
        },
        {
            role: 'user',
            content: logicalName,
        },
    ]
}
