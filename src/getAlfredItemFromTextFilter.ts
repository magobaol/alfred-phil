import { AppliedFilter } from "@magobaol/phil";

export const getAlfredItemFromTextFilter = (appliedFilter: AppliedFilter) => {
    let subtitle = ''
    let uid = ''

    switch (appliedFilter.filter) {
        case 'toSpace':
            subtitle = 'Normally spaced'
            uid = 'spaced'
            break
        case 'toUpper':
            subtitle = 'UPPER CASE'
            uid = 'uppercase'
            break
        case 'toLower':
            subtitle = 'lower case'
            uid = 'lowercase'
            break
        case 'toTitle':
            subtitle = 'Title Case'
            uid = 'titlecase'
            break
        case 'toSentence':
            subtitle = 'Sentence case'
            uid = 'sentencecase'
            break
        case 'toCamel':
            subtitle = 'camelCase'
            uid = 'camelcase'
            break
        case 'toPascal':
            subtitle = 'PascalCase'
            uid = 'pascalcase'
            break
        case 'toSnake':
            subtitle = 'snake_case'
            uid = 'snakecase'
            break
        case 'toSpinal':
            subtitle = 'spinal-case'
            uid = 'spinalcase'
            break
    }
    return {
        title: appliedFilter.after,
        arg: appliedFilter.after,
        uid: uid,
        subtitle: subtitle
    }
}