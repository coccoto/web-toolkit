// LogicalNameCandidate
export type LogicalNameCandidate = {
    logicalName: string[]
}
export const initLogicalNameCandidate = (): LogicalNameCandidate => {
    return {
        logicalName: [],
    }
}
