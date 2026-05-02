const fs = require('fs');

const rawText = fs.readFileSync('raw.txt', 'utf8');

function generateId(catPrefix, index) {
  return `item-${catPrefix}-${index}`;
}

function parseChoices(line, prefix) {
  const parts = line.split('/').map(p => p.trim());
  return parts.map((p, i) => {
    let price = 0;
    let name = p;
    const match = p.match(/\(\+Rp([\d.]+)\)/);
    if (match) {
      price = parseInt(match[2].replace('.', ''), 10);
      name = p.replace(match[0], '').trim();
    }
    return {
      id: `${prefix}-${i}`,
      name: name,
      priceDelta: price,
      isAvailable: true
    };
  });
}

const items = [];
let currentCategory = 'cat-1';
let catPrefix = 'c';
const lines = rawText.split('\n');
let currentItem = null;

let catIndex = 1;

for (let line of lines) {
  line = line.trim();
  if (!line) continue;

  if (line.startsWith('Coffee —')) { currentCategory = 'cat-1'; catPrefix = 'cc'; catIndex = 1; continue; }
  if (line.startsWith('Cold Brew —')) { currentCategory = 'cat-1b'; catPrefix = 'cb'; catIndex = 1; continue; }
  if (line.startsWith('Non‑Coffee —')) { currentCategory = 'cat-2'; catPrefix = 'nc'; catIndex = 1; continue; }

  const titleMatch = line.match(/^\d+\.\s+(.*)/);
  if (titleMatch) {
    if (currentItem) items.push(currentItem);
    currentItem = {
      id: generateId(catPrefix, catIndex++),
      categoryId: currentCategory,
      name: titleMatch[1],
      description: '',
      image: 'https://images.unsplash.com/photo-1517701550927-30cfcb64db18?auto=format&fit=crop&w=800&q=80',
      basePrice: 0,
      tags: [],
      isAvailable: true,
      addOnGroups: []
    };
    if (currentCategory === 'cat-1') {
      currentItem.image = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80';
    } else if (currentCategory === 'cat-1b') {
      currentItem.image = 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80';
    } else if (currentCategory === 'cat-2') {
      currentItem.image = 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80';
    }
    continue;
  }

  if (!currentItem) continue;

  if (line.startsWith('Deskripsi:')) {
    currentItem.description = line.replace('Deskripsi:', '').trim();
  } else if (line.startsWith('Vessel Size:')) {
    const val = line.replace('Vessel Size:', '').trim();
    if (val !== 'None' && val.toLowerCase() !== 'n/a') {
      currentItem.addOnGroups.push({
        id: `${currentItem.id}-sz`,
        name: 'Vessel Size',
        minSelection: 1,
        maxSelection: 1,
        choices: parseChoices(val, 'sz')
      });
    }
  } else if (line.startsWith('Milk Base:')) {
    const val = line.replace('Milk Base:', '').trim();
    if (val !== 'None' && val.toLowerCase() !== 'n/a') {
      currentItem.addOnGroups.push({
        id: `${currentItem.id}-mk`,
        name: 'Milk Base',
        minSelection: 1,
        maxSelection: 1,
        choices: parseChoices(val, 'mk')
      });
    }
  } else if (line.startsWith('Sweetness:')) {
    const val = line.replace('Sweetness:', '').trim();
    if (val !== 'None' && val.toLowerCase() !== 'n/a') {
      currentItem.addOnGroups.push({
        id: `${currentItem.id}-sw`,
        name: 'Sweetness',
        minSelection: 1,
        maxSelection: 1,
        choices: parseChoices(val, 'sw')
      });
    }
  } else if (line.startsWith('Temperature:')) {
    const val = line.replace('Temperature:', '').trim();
    if (val !== 'None' && val.toLowerCase() !== 'n/a') {
      currentItem.addOnGroups.push({
        id: `${currentItem.id}-tp`,
        name: 'Temperature',
        minSelection: 1,
        maxSelection: 1,
        choices: parseChoices(val, 'tp')
      });
    }
  } else if (line.startsWith('Intensity (Shots):')) {
    const val = line.replace('Intensity (Shots):', '').trim();
    if (val !== 'None' && val.toLowerCase() !== 'n/a') {
      if (val.includes('+Rp8.000 per extra shot') || val.includes('per extra shot')) {
        currentItem.addOnGroups.push({
          id: `${currentItem.id}-sh`,
          name: 'Extra Shot',
          minSelection: 0,
          maxSelection: 2,
          choices: [
            { id: 'sh-1', name: '+1 Shot', priceDelta: 8000, isAvailable: true },
            { id: 'sh-2', name: '+2 Shots', priceDelta: 16000, isAvailable: true }
          ]
        });
      }
    }
  } else if (line.startsWith('Harga:')) {
    const priceStr = line.replace('Harga: Rp', '').replace('.', '').trim();
    currentItem.basePrice = parseInt(priceStr, 10);
  }
}
if (currentItem) items.push(currentItem);

const output = items.map(item => {
  const meta = {
    schema_version: '1.0',
    sku_code: `SKU-${item.id.toUpperCase()}`,
    category: item.categoryId === 'cat-1' ? 'Coffee' : item.categoryId === 'cat-1b' ? 'Cold Brew' : 'Non-Coffee',
    short_description: item.description,
    serve_temperature: item.addOnGroups.find(g => g.name === 'Temperature') ? 'various' : 'hot',
    allergens: [],
    prep_time_estimate_seconds: 60,
    recommended_pairings: [],
    barista_recipe: {
      coffee_origin_or_blend: 'House Blend',
      roast_level: 'Medium-Dark',
      dose_grams: 18,
      yield_ml: 40,
      extraction_time_seconds: 30,
      presentation_notes: 'Follow standard cafe protocols.'
    }
  };
  item.meta = meta;
  return JSON.stringify(item, null, 2);
}).join(',\n');

fs.writeFileSync('menu_dump.js', `export const GENERATED_ITEMS = [\n${output}\n];`);
console.log('Done mapping 60 items!');
