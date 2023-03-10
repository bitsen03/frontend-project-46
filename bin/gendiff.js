import  gendiff  from '../src/gendiffLogick.js'
import { Command } from 'commander';

const program = new Command();

program  
    .version('1.0.0')
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.') 
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1,filepath2) => {
        console.log(gendiff(filepath1,filepath2))
    })
.parse(process.argv)
