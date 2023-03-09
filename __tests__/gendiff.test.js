import genDiff from '../src/gendiffLogick.js';
import {readFileSync} from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')
    const result = genDiff(filepath1,filepath2)
    const expected =  readFile('fileTest.json');
    expect(result).toEqual(expected)
});