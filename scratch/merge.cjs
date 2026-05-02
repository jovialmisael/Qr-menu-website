const fs = require('fs');

const { GENERATED_ITEMS } = require('./menu_dump.js');
let mockDataText = fs.readFileSync('../src/mockData.ts', 'utf8');

const lines = mockDataText.split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('// === CLASSIC COFFEE (Strictly Unique IDs) ==='));
const endIdx = lines.findIndex(l => l.trim() === '].map(item => {');

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

// Convert GENERATED_ITEMS to a string that matches the format.
// Wait, GENERATED_ITEMS is an array of objects. We can serialize it.
// Actually, menu_dump.js already contains exactly the string we need in source format.
// Let's read menu_dump.js directly as a string to avoid stringifying issues (like functions or exact spacing).
let dumpText = fs.readFileSync('./menu_dump.js', 'utf8');
const match = dumpText.match(/export const GENERATED_ITEMS = \[\s*([\s\S]*)\s*\];/);
if (!match) {
  console.log('Could not parse menu_dump.js');
  process.exit(1);
}

const innerElements = match[1];

// We want to insert innerElements between startIdx (inclusive) and endIdx (exclusive).
const newLines = [
  ...lines.slice(0, startIdx),
  innerElements,
  ...lines.slice(endIdx)
];

fs.writeFileSync('../src/mockData.ts', newLines.join('\n'));
console.log('Successfully merged! ' + (endIdx - startIdx) + ' lines replaced.');
