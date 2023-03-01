import { readFileSync } from 'fs'
const filepath1 = readFileSync(/cli/__fixtures__/file1.json, 'utf-8')
const filepath2 = readFileSync(/cli/__fixtures__/file2.json, 'utf-8')
console.log(filepath1)