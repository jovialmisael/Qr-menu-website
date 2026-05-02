const fs = require('fs');

const rawText = fs.readFileSync('food.txt', 'utf8');

function generateId(index) {
  return "item-fd-" + index;
}

function parseChoices(line, prefix) {
  const parts = line.split(/[;/]/).map(p => p.trim());
  return parts.map((p, i) => {
    let price = 0;
    let name = p;
    const match = p.match(/\(\+Rp([\d.]+)\)/);
    if (match) {
      price = parseInt(match[1].replace('.', ''), 10);
      name = p.replace(match[0], '').trim();
    }
    return {
      id: prefix + "-" + i,
      name: name,
      priceDelta: price,
      isAvailable: true
    };
  });
}

const items = [];
const lines = rawText.split(/\r?\n/);
let currentItem = null;
let itemIndex = 1;

for (let line of lines) {
  line = line.trim();
  if (!line) continue;

  if (!line.includes(':') && !line.startsWith('Deskripsi') && !line.startsWith('Porsi') && !line.startsWith('Level Pedas') && !line.startsWith('Dietary') && !line.startsWith('Sisi / Add') && !line.startsWith('Harga') && !line.startsWith('Penyajian')) {
    // This is a title!
    if (currentItem) items.push(currentItem);
    currentItem = {
      id: generateId(itemIndex++),
      categoryId: 'cat-4', // Main food
      name: line,
      description: '',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      basePrice: 0,
      tags: [],
      isAvailable: true,
      addOnGroups: [],
      meta: {
        schema_version: '1.0',
        category: 'Main Food',
        serve_temperature: 'hot',
        allergens: [],
        prep_time_estimate_seconds: 600,
        recommended_pairings: [],
        chef_recipe: {
          prep_method: '',
          key_ingredients: [],
          plating_style: '',
          dietary_flags: [],
          chef_notes: ''
        }
      }
    };
    continue;
  }

  if (!currentItem) continue;

  if (line.startsWith('Deskripsi:')) {
    currentItem.description = line.replace('Deskripsi:', '').trim();
    currentItem.meta.short_description = currentItem.description;
  } else if (line.startsWith('Porsi:')) {
    currentItem.meta.chef_recipe.prep_method = 'Porsi: ' + line.replace('Porsi:', '').trim();
  } else if (line.startsWith('Level Pedas:')) {
    const val = line.replace('Level Pedas:', '').trim();
    if (val.toLowerCase() !== 'tidak' && val !== 'None' && val !== '-') {
      currentItem.addOnGroups.push({
        id: currentItem.id + "-sp",
        name: 'Level Pedas',
        minSelection: 1,
        maxSelection: 1,
        choices: parseChoices(val, currentItem.id + '-sp')
      });
    }
  } else if (line.startsWith('Dietary:')) {
    const val = line.replace('Dietary:', '').trim();
    currentItem.meta.chef_recipe.dietary_flags.push(val);
  } else if (line.startsWith('Sisi / Add‑ons:') || line.startsWith('Sisi / Add-ons:')) {
    const val = line.replace(/Sisi \/ Add[-‑]ons:/, '').trim();
    if (val !== 'None' && val !== '-') {
      currentItem.addOnGroups.push({
        id: currentItem.id + "-ao",
        name: 'Add-ons',
        minSelection: 0,
        maxSelection: 5,
        choices: parseChoices(val, currentItem.id + '-ao')
      });
    }
  } else if (line.startsWith('Harga:')) {
    const priceStr = line.replace('Harga: Rp', '').replace('.', '').trim();
    currentItem.basePrice = parseInt(priceStr, 10);
  } else if (line.startsWith('Penyajian:')) {
    currentItem.meta.chef_recipe.plating_style = line.replace('Penyajian:', '').trim();
  }
}
if (currentItem) items.push(currentItem);

const output = items.map(item => {
  item.meta.sku_code = "SKU-" + item.id.toUpperCase();
  return JSON.stringify(item, null, 2);
}).join(',\n');

fs.writeFileSync('food_dump.js', "export const GENERATED_FOOD = [\n" + output + "\n];");
console.log('Done mapping ' + items.length + ' food items!');
