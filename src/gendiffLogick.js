import { readFileSync } from 'fs'
import _  from 'lodash'
import path from 'path';
import parser from './parsers.js';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
     
      if (!_.isObject(currentValue)) {
        return `${currentValue}`;
      }
  
      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => ` ${currentIndent}${key}: ${iter(val, depth + 1)}`);
  
      return [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
    };
  
    return iter(value, 1);
  };
  
 
export default function genDiff (filepath1,filepath2)  {


const dataParse1 = parser(filepath1)
const dataParse2 = parser(filepath2)


    const keys1 = Object.keys(dataParse1);
    const keys2 = Object.keys(dataParse2);
    const keys = _.union(keys1, keys2); 
    const sortKeys = _.sortBy(keys)
  
    const result = {};
    for (const key of sortKeys) {
      if (!Object.hasOwn(dataParse1, key)) {
        result[`+ ${key}`] = dataParse2[key];
      } else if (!Object.hasOwn(dataParse2, key)) {
        result[`- ${key}`] = dataParse1[key];
      } else if (dataParse1[key] !== dataParse2[key]) {
        result[`- ${key}`] = dataParse1[key];
        result[`+ ${key}`] = dataParse2[key];
      } else {
        result[`  ${key}`] = dataParse1[key];
      }
    }

 return stringify(result)
  }

  