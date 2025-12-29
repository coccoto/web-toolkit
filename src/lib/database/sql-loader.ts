import { readFile } from 'fs/promises'
import { join } from 'path'

export async function loadSql(filename: string): Promise<string> {
    const filePath = join(process.cwd(), 'src/lib/database/queries', filename)
    const sql = await readFile(filePath, 'utf-8')
    return sql.trim()
}
