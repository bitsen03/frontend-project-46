
// import genDiff from  '../src/index.js'; 
    const { Command } = require('commander');
	const program = new Command();
	
	program  
        .version('1.0.0')
	    .name('gendiff')
        .description('Compares two configuration files and shows a difference.') 
        .option('-f, --format <type>', 'output format')
        .argument('<filepath1> <filepath2>')
    .parse(process.argv)
	
	

 