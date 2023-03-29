import renderTree from './stylish.js'; 
import renderTree1 from './plain.js';

const formatters = {
  stylish: renderTree,
  plain: renderTree1,
  json: JSON.stringify,
};

export default (ast, type) => {
  const format = formatters[type];
  if(!format) {
    throw new Error(`Unknown format ${type}`);
  }
  
  return format(ast);
}