// openai
import OpenAI from "openai"

/**
 * @param convertType - 0: table 1: column
 */
export function createNameSuggestionPrompt(logicalName: string, convertType: 0 | 1): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
    return [
        {
            role: 'system',
            content:
`Please suggest candidate physical names from the logical database name.

Conversion Rules:
- The name should be for a ${getNameKind(convertType)} name.
- Provide 5 candidates.
- Use snake_case format.
- Use English notation.
- Return the result as raw JSON only.

Output Format:
{
    "logicalName": ["", "", "", "", ""]
}`.trim(),
        },
        {
            role: 'user',
            content: logicalName,
        },
    ]
}

function getNameKind(convertType: 0 | 1) {
    if (convertType === 0) {
        return 'table'
    } else {
        return 'column'
    }
}