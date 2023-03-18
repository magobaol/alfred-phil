'use strict';

import { Command, Option } from 'commander';
import { TextTransformer } from "@magobaol/phil";
import { getAlfredItemFromTextFilter } from "./getAlfredItemFromTextFilter";

const program = new Command();

program
    .name('alfred-phil')
    .version('1.0.0')
    .description('Filter text in input')
    .argument('<string>', 'Text to filter')
    .addOption(
        new Option('-cc, --convert-case <string>', 'Convert case').choices([
            'space',
            'upper', 'lower', 'title', 'sentence', 'camel', 'pascal', 'snake', 'spinal'
        ])
    )

program.parse();
const options = program.opts();
let textTransformer = new TextTransformer(program.args[0]);
let results = {}

if (options.convertCase) {
    let item = '';
    switch (options.convertCase) {
        case 'space':
            item = textTransformer.toSpace().getText()
            break;
        case 'upper':
            item = textTransformer.toUpper().getText()
            break;
        case 'lower':
            item = textTransformer.toLower().getText()
            break;
        case 'title':
            item = textTransformer.toTitle().getText()
            break;
        case 'sentence':
            item = textTransformer.toSentence().getText()
            break;
        case 'camel':
            item = textTransformer.toCamel().getText()
            break;
        case 'pascal':
            item = textTransformer.toPascal().getText()
            break;
        case 'snake':
            item = textTransformer.toSnake().getText()
            break;
        case 'spinal':
            item = textTransformer.toSpinal().getText()
            break;
    }
    process.stdout.write(item)
} else {
    results = {
        items: [
            getAlfredItemFromTextFilter(textTransformer.toSpace().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toUpper().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toLower().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toTitle().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toSentence().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toCamel().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toPascal().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toSnake().getLastFilter()),
            getAlfredItemFromTextFilter(textTransformer.toSpinal().getLastFilter()),
        ]
    }
    process.stdout.write(JSON.stringify(results))
}