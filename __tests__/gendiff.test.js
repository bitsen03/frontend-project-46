import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('plain', () => {
  const filepath1 = getFixturePath('plainFile1.yml');
  const filepath2 = getFixturePath('plainFile2.yml');
  const result = genDiff(filepath1, filepath2, 'plain');
  const expected = readFile('plainExpected.yml');
  expect(result).toEqual(expected);
});
test('testYml', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = genDiff(filepath1, filepath2);
  const expected = readFile('fileTest.json');
  expect(result).toEqual(expected);
});
test('json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = genDiff(filepath1, filepath2, 'json');
  const expected = readFile('jsonExpected.json');
  expect(result).toEqual(expected);
});
