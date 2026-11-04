const fs = require('node:fs');
const path = require('node:path');
const { isDeepStrictEqual } = require('node:util');
const originalLog = console.log;
console.log = () => {}; // Tələbənin console.log çıxışı JSON nəticəsini pozmasın.
let result;
try {
  const { slug, exportName, args } = JSON.parse(fs.readFileSync(0, 'utf8'));
  const fn = require(path.join(__dirname, 'tasks', slug + '.js'))[exportName];
  if (typeof fn !== 'function') throw new Error(`Export ${exportName} function olmalıdır`);
  const before = structuredClone(args);
  const value = fn(...args);
  if (value === undefined) throw new Error('Function undefined qaytardı. TODO hissəsini tamamlayın.');
  result = { value, mutated: !isDeepStrictEqual(args, before) };
} catch (err) { result = { error: err.message }; }
process.stdout.write(JSON.stringify(result));
