const fs = require('fs');

const dataFile = '../src/mockData.ts';
let mockData = fs.readFileSync(dataFile, 'utf8');

const dumpFile = 'bakery_dump.js';
let dumpData = fs.readFileSync(dumpFile, 'utf8');

const itemsStr = dumpData.replace('export const GENERATED_BAKERY = [\n', '').slice(0, -2); // removes the final "];"

const insertionPoint = '];\n\nexport const MOCK_MENU: MenuItem[] = RAW_MENU.map(item => {';

if (mockData.includes(insertionPoint)) {
  mockData = mockData.replace(insertionPoint, itemsStr + ',\n' + insertionPoint);
  fs.writeFileSync(dataFile, mockData);
  console.log('Successfully injected bakery items into RAW_MENU');
} else {
  console.log('Insertion point not found');
}
