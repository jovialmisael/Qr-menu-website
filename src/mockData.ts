import { Category, MenuItem } from './types/menu';

export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Coffee', slug: 'coffee', sortOrder: 1 },
  { id: 'cat-1b', name: 'Cold Brew', slug: 'cold-brew', sortOrder: 1.5 },
  { id: 'cat-2', name: 'Non-Coffee', slug: 'non-coffee', sortOrder: 2 },
  { id: 'cat-3', name: 'Bakery', slug: 'bakery', sortOrder: 3 },
  { id: 'cat-4', name: 'Main Food', slug: 'main-food', sortOrder: 4 },
  { id: 'cat-5', name: 'Snack', slug: 'snack', sortOrder: 5 },
];

const RAW_MENU: MenuItem[] = [

  

{
  "id": "item-cc-1",
  "categoryId": "cat-1",
  "name": "Espresso Con Panna",
  "description": "Double espresso dengan whipped cream tipis.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 32000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-1-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Single",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Double",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-1-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Simple syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-1-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-1-sh",
      "name": "Extra Shot",
      "minSelection": 0,
      "maxSelection": 2,
      "choices": [
        {
          "id": "sh-1",
          "name": "+1 Shot",
          "priceDelta": 8000,
          "isAvailable": true
        },
        {
          "id": "sh-2",
          "name": "+2 Shots",
          "priceDelta": 16000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-1",
    "category": "Coffee",
    "short_description": "Double espresso dengan whipped cream tipis.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-2",
  "categoryId": "cat-1",
  "name": "Americano Classic",
  "description": "Espresso ditambah air panas, clean & bold.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 30000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-2-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-2-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Simple syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-2-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-2",
    "category": "Coffee",
    "short_description": "Espresso ditambah air panas, clean & bold.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-3",
  "categoryId": "cat-1",
  "name": "Cappuccino Signature",
  "description": "Espresso, steamed milk, microfoam; taburan cocoa.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 42000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-3-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-3-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        },
        {
          "id": "mk-2",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-3-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-3-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-3",
    "category": "Coffee",
    "short_description": "Espresso, steamed milk, microfoam; taburan cocoa.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-4",
  "categoryId": "cat-1",
  "name": "Latte Art",
  "description": "Espresso dengan steamed milk, latte art.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 45000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-4-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-4-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        },
        {
          "id": "mk-2",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-4-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Vanilla syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-4-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-4",
    "category": "Coffee",
    "short_description": "Espresso dengan steamed milk, latte art.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-5",
  "categoryId": "cat-1",
  "name": "Flat White",
  "description": "Ristretto shot + velvety microfoam, lebih pekat dari latte.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 46000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-5-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-5-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-5-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Brown sugar syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-5-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-5",
    "category": "Coffee",
    "short_description": "Ristretto shot + velvety microfoam, lebih pekat dari latte.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-6",
  "categoryId": "cat-1",
  "name": "Mocha",
  "description": "Espresso + chocolate syrup + steamed milk.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 50000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-6-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-6-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-6-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra chocolate",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-6-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-6",
    "category": "Coffee",
    "short_description": "Espresso + chocolate syrup + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-7",
  "categoryId": "cat-1",
  "name": "Caramel Macchiato",
  "description": "Vanilla syrup, steamed milk, espresso shot, caramel drizzle.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-7-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-7-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-7-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-7-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-7",
    "category": "Coffee",
    "short_description": "Vanilla syrup, steamed milk, espresso shot, caramel drizzle.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-8",
  "categoryId": "cat-1",
  "name": "Affogato Espresso",
  "description": "Single espresso dituangkan di atas scoop vanilla gelato.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 55000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-8-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Single serve",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-8-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Gelato manis",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-8-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot espresso + cold gelato",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-8",
    "category": "Coffee",
    "short_description": "Single espresso dituangkan di atas scoop vanilla gelato.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-9",
  "categoryId": "cat-1",
  "name": "Cortado",
  "description": "Espresso dan equal part steamed milk, seimbang.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-9-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Small (150 ml)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-9-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-9-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Simple syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-9-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-9",
    "category": "Coffee",
    "short_description": "Espresso dan equal part steamed milk, seimbang.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-10",
  "categoryId": "cat-1",
  "name": "Honey Cinnamon Latte",
  "description": "Espresso, steamed milk, honey drizzle, cinnamon dust.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 50000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-10-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-10-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-10-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey (default)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-10-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-10",
    "category": "Coffee",
    "short_description": "Espresso, steamed milk, honey drizzle, cinnamon dust.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-11",
  "categoryId": "cat-1",
  "name": "Irish‑Style Coffee (Non‑alcoholic option)",
  "description": "Espresso, brown sugar, whipped cream (non‑alcoholic).",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 52000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-11-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-11-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Whole",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-11-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Brown sugar",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-11-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-11",
    "category": "Coffee",
    "short_description": "Espresso, brown sugar, whipped cream (non‑alcoholic).",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-12",
  "categoryId": "cat-1",
  "name": "Hazelnut Latte",
  "description": "Espresso + hazelnut syrup + steamed milk.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 50000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-12-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-12-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-12-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-12-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-12",
    "category": "Coffee",
    "short_description": "Espresso + hazelnut syrup + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-13",
  "categoryId": "cat-1",
  "name": "Ginger Espresso Tonic",
  "description": "Espresso shot di atas tonic water dengan ginger syrup.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 55000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-13-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-13-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Ginger syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-13-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-13",
    "category": "Coffee",
    "short_description": "Espresso shot di atas tonic water dengan ginger syrup.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-14",
  "categoryId": "cat-1",
  "name": "Maple Pecan Latte",
  "description": "Maple syrup, pecan crumble, steamed milk, espresso.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 56000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-14-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-14-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-14-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-14-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-14",
    "category": "Coffee",
    "short_description": "Maple syrup, pecan crumble, steamed milk, espresso.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-15",
  "categoryId": "cat-1",
  "name": "Turkish Spiced Espresso",
  "description": "Espresso dengan campuran cardamom & cinnamon.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 40000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-15-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Small",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-15-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Sugar optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-15-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-15",
    "category": "Coffee",
    "short_description": "Espresso dengan campuran cardamom & cinnamon.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-16",
  "categoryId": "cat-1",
  "name": "Iced Brown Sugar Latte",
  "description": "Espresso, brown sugar syrup, milk, es batu.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-16-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-16-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-16-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Brown sugar (default)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-16-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-16",
    "category": "Coffee",
    "short_description": "Espresso, brown sugar syrup, milk, es batu.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-17",
  "categoryId": "cat-1",
  "name": "Cascara Espresso",
  "description": "Espresso dengan sirup cascara (buah kopi) aroma buah.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 54000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-17-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-17-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Splash milk optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-17-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Cascara syrup default",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-17-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-17",
    "category": "Coffee",
    "short_description": "Espresso dengan sirup cascara (buah kopi) aroma buah.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-18",
  "categoryId": "cat-1",
  "name": "Matcha Espresso Fusion",
  "description": "Layer matcha latte dengan shot espresso (dirty matcha).",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-18-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-18-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-18-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-18-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-18",
    "category": "Coffee",
    "short_description": "Layer matcha latte dengan shot espresso (dirty matcha).",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-19",
  "categoryId": "cat-1",
  "name": "Vanilla Bean Latte",
  "description": "Espresso + vanilla bean paste + steamed milk.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 49000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-19-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-19-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-19-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-19-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-19",
    "category": "Coffee",
    "short_description": "Espresso + vanilla bean paste + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cc-20",
  "categoryId": "cat-1",
  "name": "Seasonal Special — Pumpkin Spice Latte",
  "description": "(Seasonal) Espresso, pumpkin spice syrup, steamed milk, whipped cream.",
  "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  "basePrice": 60000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cc-20-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-20-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-20-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cc-20-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CC-20",
    "category": "Coffee",
    "short_description": "(Seasonal) Espresso, pumpkin spice syrup, steamed milk, whipped cream.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-1",
  "categoryId": "cat-1b",
  "name": "Classic Kyoto Cold Brew",
  "description": "12‑hour Kyoto cold drip, single‑origin Sumatra.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 55000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-1-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular (250 ml)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large (350 ml)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-1-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None (black)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Splash milk optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-1-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Simple syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-1-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-1-sh",
      "name": "Extra Shot",
      "minSelection": 0,
      "maxSelection": 2,
      "choices": [
        {
          "id": "sh-1",
          "name": "+1 Shot",
          "priceDelta": 8000,
          "isAvailable": true
        },
        {
          "id": "sh-2",
          "name": "+2 Shots",
          "priceDelta": 16000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-1",
    "category": "Cold Brew",
    "short_description": "12‑hour Kyoto cold drip, single‑origin Sumatra.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-2",
  "categoryId": "cat-1b",
  "name": "Vanilla Sweet Cream Cold Brew",
  "description": "Cold brew + vanilla syrup + vanilla sweet cream foam.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-2-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-2-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat  optional in foam",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-2-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal (2 pumps)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-2-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-2",
    "category": "Cold Brew",
    "short_description": "Cold brew + vanilla syrup + vanilla sweet cream foam.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-3",
  "categoryId": "cat-1b",
  "name": "Salted Caramel Cold Brew",
  "description": "Cold brew + caramel syrup + salted cream top.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 62000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-3-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-3-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat  optional",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-3-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-3-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-3",
    "category": "Cold Brew",
    "short_description": "Cold brew + caramel syrup + salted cream top.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-4",
  "categoryId": "cat-1b",
  "name": "Coconut Cold Brew",
  "description": "Cold brew blended with coconut milk & coconut syrup.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 60000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-4-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-4-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Coconut milk (default)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-4-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra coconut",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-4-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-4",
    "category": "Cold Brew",
    "short_description": "Cold brew blended with coconut milk & coconut syrup.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-5",
  "categoryId": "cat-1b",
  "name": "Nitro Cold Brew",
  "description": "Nitro‑infused cold brew, creamy mouthfeel, served without ice.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 65000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-5-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Tall",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Grande",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-5-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Optional vanilla syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-5-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold (no ice)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-5",
    "category": "Cold Brew",
    "short_description": "Nitro‑infused cold brew, creamy mouthfeel, served without ice.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-6",
  "categoryId": "cat-1b",
  "name": "Cold Brew Tonic",
  "description": "Cold brew concentrate + tonic water, lime garnish.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-6-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-6-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-6-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-6",
    "category": "Cold Brew",
    "short_description": "Cold brew concentrate + tonic water, lime garnish.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-7",
  "categoryId": "cat-1b",
  "name": "Honey Almond Cold Brew",
  "description": "Cold brew + almond milk + honey drizzle.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 62000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-7-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-7-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Almond milk",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-7-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-7-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-7",
    "category": "Cold Brew",
    "short_description": "Cold brew + almond milk + honey drizzle.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-8",
  "categoryId": "cat-1b",
  "name": "Mocha Cold Brew",
  "description": "Cold brew + chocolate syrup + splash milk.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 60000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-8-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-8-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-8-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra chocolate",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-8-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-8",
    "category": "Cold Brew",
    "short_description": "Cold brew + chocolate syrup + splash milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-9",
  "categoryId": "cat-1b",
  "name": "Citrus Cold Brew",
  "description": "Cold brew infused with orange slice & lemon zest.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 57000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-9-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-9-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-9-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-9",
    "category": "Cold Brew",
    "short_description": "Cold brew infused with orange slice & lemon zest.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-10",
  "categoryId": "cat-1b",
  "name": "Spiced Cold Brew",
  "description": "Cold brew + cinnamon & nutmeg; brown sugar syrup.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 63000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-10-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-10-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat  optional",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-10-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Brown sugar syrup",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-10-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-10",
    "category": "Cold Brew",
    "short_description": "Cold brew + cinnamon & nutmeg; brown sugar syrup.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-11",
  "categoryId": "cat-1b",
  "name": "Maple Cold Brew",
  "description": "Cold brew + maple syrup + light cream float.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 61000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-11-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-11-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat  optional",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-11-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Maple (default)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-11-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-11",
    "category": "Cold Brew",
    "short_description": "Cold brew + maple syrup + light cream float.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-12",
  "categoryId": "cat-1b",
  "name": "Vanilla Orange Cold Brew",
  "description": "Cold brew + vanilla syrup + orange peel garnish.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 59000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-12-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-12-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-12-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-12",
    "category": "Cold Brew",
    "short_description": "Cold brew + vanilla syrup + orange peel garnish.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-13",
  "categoryId": "cat-1b",
  "name": "Café Affogato Cold Brew",
  "description": "Cold brew concentrate poured over a scoop of gelato.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 70000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-13-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Single serve",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-13-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Gelato sweetness",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-13-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-13",
    "category": "Cold Brew",
    "short_description": "Cold brew concentrate poured over a scoop of gelato.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-14",
  "categoryId": "cat-1b",
  "name": "Rosemary Honey Cold Brew",
  "description": "Cold brew + rosemary‑infused honey syrup, citrus twist.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 64000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-14-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-14-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Splash milk optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-14-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey (default)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-14-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-14",
    "category": "Cold Brew",
    "short_description": "Cold brew + rosemary‑infused honey syrup, citrus twist.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-15",
  "categoryId": "cat-1b",
  "name": "Cascara Cold Brew",
  "description": "Cold brew with cascara syrup (buah kopi) aroma fruity.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 60000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-15-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-15-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Cascara syrup default",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-15-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-15",
    "category": "Cold Brew",
    "short_description": "Cold brew with cascara syrup (buah kopi) aroma fruity.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-16",
  "categoryId": "cat-1b",
  "name": "Iced Brown Sugar Cold Brew",
  "description": "Cold brew + brown sugar syrup + milk swirl.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 62000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-16-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-16-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-16-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Brown sugar (default)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-16-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-16",
    "category": "Cold Brew",
    "short_description": "Cold brew + brown sugar syrup + milk swirl.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-17",
  "categoryId": "cat-1b",
  "name": "Ginger Lime Cold Brew",
  "description": "Cold brew + ginger syrup + lime wedge.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-17-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-17-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Ginger syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-17-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-17",
    "category": "Cold Brew",
    "short_description": "Cold brew + ginger syrup + lime wedge.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-18",
  "categoryId": "cat-1b",
  "name": "Vanilla Sweet Cream Cold Brew (Oat)",
  "description": "Cold brew + vanilla sweet cream dibuat dengan oat milk.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 70000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-18-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-18-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-18-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Vanilla (default)",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-18-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-18",
    "category": "Cold Brew",
    "short_description": "Cold brew + vanilla sweet cream dibuat dengan oat milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-19",
  "categoryId": "cat-1b",
  "name": "Cardamom Cold Brew",
  "description": "Cold brew + cardamom infusion, floral & spicy.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 59000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-19-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-19-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Splash milk optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-19-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Simple syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-19-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-19",
    "category": "Cold Brew",
    "short_description": "Cold brew + cardamom infusion, floral & spicy.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-cb-20",
  "categoryId": "cat-1b",
  "name": "Seasonal Fruit Cold Brew",
  "description": "Cold brew + seasonal fruit purée (e.g., mango/berry) light.",
  "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80",
  "basePrice": 66000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-cb-20-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-20-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Coconut milk optional",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-20-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Fruit syrup default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-cb-20-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-CB-20",
    "category": "Cold Brew",
    "short_description": "Cold brew + seasonal fruit purée (e.g., mango/berry) light.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-1",
  "categoryId": "cat-2",
  "name": "Matcha Latte",
  "description": "Premium ceremonial matcha + steamed milk.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-1-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-1-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        },
        {
          "id": "mk-2",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-1-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "No sugar",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Honey",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-2",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-1-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-1",
    "category": "Non-Coffee",
    "short_description": "Premium ceremonial matcha + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-2",
  "categoryId": "cat-2",
  "name": "Chai Latte",
  "description": "Black tea blend + chai spices + steamed milk.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 46000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-2-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-2-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-2-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-2-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-2",
    "category": "Non-Coffee",
    "short_description": "Black tea blend + chai spices + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-3",
  "categoryId": "cat-2",
  "name": "Hot Chocolate Signature",
  "description": "Dark chocolate melted with steamed milk, whipped cream optional.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 45000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-3-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-3-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-3-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra chocolate",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-3-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-3",
    "category": "Non-Coffee",
    "short_description": "Dark chocolate melted with steamed milk, whipped cream optional.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-4",
  "categoryId": "cat-2",
  "name": "Iced Lemon Tea",
  "description": "Black tea brewed + fresh lemon + simple syrup.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 30000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-4-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-4-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-4-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-4",
    "category": "Non-Coffee",
    "short_description": "Black tea brewed + fresh lemon + simple syrup.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-5",
  "categoryId": "cat-2",
  "name": "Ginger Honey Lemon",
  "description": "Fresh ginger infusion + honey + lemon; soothing.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-5-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-5-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-5-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-5",
    "category": "Non-Coffee",
    "short_description": "Fresh ginger infusion + honey + lemon; soothing.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-6",
  "categoryId": "cat-2",
  "name": "Turmeric Golden Latte",
  "description": "Turmeric, ginger, cinnamon + steamed milk.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 50000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-6-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-6-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Oat",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-6-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-6-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Iced",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-6",
    "category": "Non-Coffee",
    "short_description": "Turmeric, ginger, cinnamon + steamed milk.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-7",
  "categoryId": "cat-2",
  "name": "Berry Smoothie",
  "description": "Mixed berries, banana, yogurt, honey.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 55000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-7-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular (350 ml)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-7-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Yogurt",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Almond milk",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-7-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-7-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Blended",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-7",
    "category": "Non-Coffee",
    "short_description": "Mixed berries, banana, yogurt, honey.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-8",
  "categoryId": "cat-2",
  "name": "Mango Lassi",
  "description": "Mango purée + yogurt + cardamom.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-8-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-8-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Yogurt",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-8-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-8-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-8",
    "category": "Non-Coffee",
    "short_description": "Mango purée + yogurt + cardamom.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-9",
  "categoryId": "cat-2",
  "name": "Sparkling Yuzu Soda",
  "description": "Yuzu citrus + soda water + mint garnish.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 42000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-9-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-9-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Yuzu syrup default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-9-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-9",
    "category": "Non-Coffee",
    "short_description": "Yuzu citrus + soda water + mint garnish.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-10",
  "categoryId": "cat-2",
  "name": "Kombucha House Brew",
  "description": "House‑fermented kombucha, rotating flavors.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-10-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Bottle",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Glass",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-10-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Naturally tart; syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-10-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-10",
    "category": "Non-Coffee",
    "short_description": "House‑fermented kombucha, rotating flavors.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-11",
  "categoryId": "cat-2",
  "name": "Iced Hibiscus Tea",
  "description": "Hibiscus infusion, floral & tart, served with lime.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-11-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-11-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-11-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-11",
    "category": "Non-Coffee",
    "short_description": "Hibiscus infusion, floral & tart, served with lime.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-12",
  "categoryId": "cat-2",
  "name": "Cucumber Mint Cooler",
  "description": "Fresh cucumber juice, mint, soda, lime.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 40000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-12-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-12-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Simple syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-12-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-12",
    "category": "Non-Coffee",
    "short_description": "Fresh cucumber juice, mint, soda, lime.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-13",
  "categoryId": "cat-2",
  "name": "Hot Lemon Ginger Honey (Wellness)",
  "description": "Fresh lemon, ginger, honey — immune boost.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 32000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-13-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-13-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey default",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-13-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-13",
    "category": "Non-Coffee",
    "short_description": "Fresh lemon, ginger, honey — immune boost.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-14",
  "categoryId": "cat-2",
  "name": "Vanilla Almond Milkshake",
  "description": "Vanilla ice cream + almond milk + whipped cream.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 52000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-14-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-14-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Almond milk",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-14-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Extra",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-14-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Blended",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-14",
    "category": "Non-Coffee",
    "short_description": "Vanilla ice cream + almond milk + whipped cream.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-15",
  "categoryId": "cat-2",
  "name": "Sparkling Apple Ginger",
  "description": "Fresh apple juice + ginger + sparkling water.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-15-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-15-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Apple natural",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Syrup optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-15-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-15",
    "category": "Non-Coffee",
    "short_description": "Fresh apple juice + ginger + sparkling water.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-16",
  "categoryId": "cat-2",
  "name": "Lavender Lemonade",
  "description": "House lemonade infused with lavender syrup.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-16-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-16-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Normal",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-16-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-16",
    "category": "Non-Coffee",
    "short_description": "House lemonade infused with lavender syrup.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-17",
  "categoryId": "cat-2",
  "name": "Chocolate Banana Smoothie",
  "description": "Cocoa, banana, milk/yogurt, honey.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 55000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-17-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-17-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "Whole",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Almond",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-17-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-17-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "tp-1",
          "name": "Blended",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-17",
    "category": "Non-Coffee",
    "short_description": "Cocoa, banana, milk/yogurt, honey.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-18",
  "categoryId": "cat-2",
  "name": "Herbal Tea Flight",
  "description": "Trio sampler: chamomile, peppermint, rooibos.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 45000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-18-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Flight (3 x small cups)",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-18-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Honey optional",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-18-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-18",
    "category": "Non-Coffee",
    "short_description": "Trio sampler: chamomile, peppermint, rooibos.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-19",
  "categoryId": "cat-2",
  "name": "Cocoa Affogato (Non‑coffee)",
  "description": "Hot chocolate shot poured over vanilla gelato.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 68000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-19-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Single serve",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-19-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Gelato sweetness",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-19-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Hot + Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-19",
    "category": "Non-Coffee",
    "short_description": "Hot chocolate shot poured over vanilla gelato.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-nc-20",
  "categoryId": "cat-2",
  "name": "Seasonal Fruit Cooler",
  "description": "Puree buah musiman + soda / still water + mint.",
  "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  "basePrice": 50000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-nc-20-sz",
      "name": "Vessel Size",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sz-0",
          "name": "Regular",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sz-1",
          "name": "Large",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-20-mk",
      "name": "Milk Base",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "mk-0",
          "name": "None",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "mk-1",
          "name": "Coconut milk optional",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-20-sw",
      "name": "Sweetness",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "sw-0",
          "name": "Fruit syrup default",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "sw-1",
          "name": "Less",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-nc-20-tp",
      "name": "Temperature",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "tp-0",
          "name": "Cold",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "sku_code": "SKU-ITEM-NC-20",
    "category": "Non-Coffee",
    "short_description": "Puree buah musiman + soda / still water + mint.",
    "serve_temperature": "various",
    "allergens": [],
    "prep_time_estimate_seconds": 60,
    "recommended_pairings": [],
    "barista_recipe": {
      "coffee_origin_or_blend": "House Blend",
      "roast_level": "Medium-Dark",
      "dose_grams": 18,
      "yield_ml": 40,
      "extraction_time_seconds": 30,
      "presentation_notes": "Follow standard cafe protocols."
    }
  }
},
{
  "id": "item-fd-1",
  "categoryId": "cat-4",
  "name": "Nasi Goreng Kampung Mini",
  "description": "Nasi goreng wangi dengan suwiran ayam, telur mata sapi kecil, bawang goreng.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-1-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-1-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-1-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-1-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-1-ao-0",
          "name": "Kerupuk",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-1-ao-1",
          "name": "acar timun",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Single plate (porsi kafe)",
      "key_ingredients": [],
      "plating_style": "Dihidangkan di piring keramik, garnish daun bawang.",
      "dietary_flags": [
        "Mengandung gluten (kecap)"
      ],
      "chef_notes": ""
    },
    "short_description": "Nasi goreng wangi dengan suwiran ayam, telur mata sapi kecil, bawang goreng.",
    "sku_code": "SKU-ITEM-FD-1"
  }
},
{
  "id": "item-fd-2",
  "categoryId": "cat-4",
  "name": "Rendang Slider Trio",
  "description": "Mini slider isi rendang empuk, acar, dan saus sambal manis.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 62000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-2-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-2-sp-0",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-2-sp-1",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-2-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-2-ao-0",
          "name": "Keripik singkong",
          "priceDelta": 8000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 3 pcs (sharing)",
      "key_ingredients": [],
      "plating_style": "Disusun di papan kayu, tusuk gigi dekoratif.",
      "dietary_flags": [
        "Non‑halal; bisa ganti ayam bumbu rendang"
      ],
      "chef_notes": ""
    },
    "short_description": "Mini slider isi rendang empuk, acar, dan saus sambal manis.",
    "sku_code": "SKU-ITEM-FD-2"
  }
},
{
  "id": "item-fd-3",
  "categoryId": "cat-4",
  "name": "Soto Ayam Bowl",
  "description": "Kuah bening aromatik, suwiran ayam, koya, tauge segar.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-3-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-3-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-3-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-3-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-3-ao-0",
          "name": "Nasi kecil",
          "priceDelta": 6000,
          "isAvailable": true
        },
        {
          "id": "item-fd-3-ao-1",
          "name": "sambal",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bowl medium",
      "key_ingredients": [],
      "plating_style": "Disajikan dengan piring kecil berisi garnish.",
      "dietary_flags": [
        "Halal; gluten‑free jika tanpa koya"
      ],
      "chef_notes": ""
    },
    "short_description": "Kuah bening aromatik, suwiran ayam, koya, tauge segar.",
    "sku_code": "SKU-ITEM-FD-3"
  }
},
{
  "id": "item-fd-4",
  "categoryId": "cat-4",
  "name": "Gado Gado Salad Jar",
  "description": "Sayuran segar, tahu, tempe, telur, saus kacang kental disajikan jar.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 42000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-4-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-4-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-4-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-4-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-4-ao-0",
          "name": "Kerupuk udang",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Individual jar (grab‑and‑go)",
      "key_ingredients": [],
      "plating_style": "Layered jar, saus terpisah agar tetap segar.",
      "dietary_flags": [
        "Vegetarian; opsi vegan tanpa telur"
      ],
      "chef_notes": ""
    },
    "short_description": "Sayuran segar, tahu, tempe, telur, saus kacang kental disajikan jar.",
    "sku_code": "SKU-ITEM-FD-4"
  }
},
{
  "id": "item-fd-5",
  "categoryId": "cat-4",
  "name": "Sate Madura Plate",
  "description": "6 tusuk sate ayam sapi, bumbu kacang, acar, lontong mini.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-5-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-5-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-5-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-5-sp-2",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-5-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-5-ao-0",
          "name": "Sambal kecap",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 6 tusuk",
      "key_ingredients": [],
      "plating_style": "Piring komposisi rapi dengan tusuk bambu.",
      "dietary_flags": [
        "Halal; opsi tempe untuk vegetarian"
      ],
      "chef_notes": ""
    },
    "short_description": "6 tusuk sate ayam sapi, bumbu kacang, acar, lontong mini.",
    "sku_code": "SKU-ITEM-FD-5"
  }
},
{
  "id": "item-fd-6",
  "categoryId": "cat-4",
  "name": "Nasi Uduk Bento",
  "description": "Nasi uduk porsi kafe, ayam suwir, tempe orek, sambal, lalapan.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 40000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-6-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-6-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-6-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-6-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-6-ao-0",
          "name": "Serundeng ekstra",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bento single",
      "key_ingredients": [],
      "plating_style": "Box kertas premium untuk take‑away.",
      "dietary_flags": [
        "Halal"
      ],
      "chef_notes": ""
    },
    "short_description": "Nasi uduk porsi kafe, ayam suwir, tempe orek, sambal, lalapan.",
    "sku_code": "SKU-ITEM-FD-6"
  }
},
{
  "id": "item-fd-7",
  "categoryId": "cat-4",
  "name": "Ayam Betutu Wrap",
  "description": "Isian ayam betutu suwir, sambal matah, sayur segar dalam tortilla.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-7-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-7-sp-0",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-7-sp-1",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-7-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-7-ao-0",
          "name": "Keripik kentang",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 wrap (potong 2)",
      "key_ingredients": [],
      "plating_style": "Dibungkus kertas, disajikan dengan tusuk.",
      "dietary_flags": [
        "Halal"
      ],
      "chef_notes": ""
    },
    "short_description": "Isian ayam betutu suwir, sambal matah, sayur segar dalam tortilla.",
    "sku_code": "SKU-ITEM-FD-7"
  }
},
{
  "id": "item-fd-8",
  "categoryId": "cat-4",
  "name": "Pempek Bites with Cuko Dip",
  "description": "Pempek kecil goreng & kapal selam mini, saus cuko terpisah.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 44000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-8-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-8-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-8-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-8-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-8-ao-0",
          "name": "Telur rebus",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 6 pcs",
      "key_ingredients": [],
      "plating_style": "Piring kecil, saus dalam cawan.",
      "dietary_flags": [
        "Mengandung ikan"
      ],
      "chef_notes": ""
    },
    "short_description": "Pempek kecil goreng & kapal selam mini, saus cuko terpisah.",
    "sku_code": "SKU-ITEM-FD-8"
  }
},
{
  "id": "item-fd-9",
  "categoryId": "cat-4",
  "name": "Bakso Malang Mini Bowl",
  "description": "Kuah kaldu ringan, bakso urat, pangsit, mie sedikit.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-9-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-9-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-9-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-9-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-9-ao-0",
          "name": "Sambal bawang",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bowl kecil",
      "key_ingredients": [],
      "plating_style": "Bowl keramik, sendok sup kayu.",
      "dietary_flags": [
        "Non‑vegetarian"
      ],
      "chef_notes": ""
    },
    "short_description": "Kuah kaldu ringan, bakso urat, pangsit, mie sedikit.",
    "sku_code": "SKU-ITEM-FD-9"
  }
},
{
  "id": "item-fd-10",
  "categoryId": "cat-4",
  "name": "Nasi Liwet Rice Plate",
  "description": "Nasi gurih santan porsi kafe, suwiran ayam, telur pindang.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 45000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-10-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-10-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-10-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-10-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-10-ao-0",
          "name": "Tahu tempe goreng",
          "priceDelta": 8000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Single plate",
      "key_ingredients": [],
      "plating_style": "Piring bundar, daun pisang kecil sebagai garnish.",
      "dietary_flags": [
        "Halal"
      ],
      "chef_notes": ""
    },
    "short_description": "Nasi gurih santan porsi kafe, suwiran ayam, telur pindang.",
    "sku_code": "SKU-ITEM-FD-10"
  }
},
{
  "id": "item-fd-11",
  "categoryId": "cat-4",
  "name": "Ikan Bakar Fillet Bento",
  "description": "Fillet ikan bakar bumbu kecap, sambal matah, nasi jasmine.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 78000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-11-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-11-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-11-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-11-sp-2",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-11-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-11-ao-0",
          "name": "Plecing kangkung",
          "priceDelta": 8000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Single bento",
      "key_ingredients": [],
      "plating_style": "Box rapi, lemon wedge.",
      "dietary_flags": [
        "Seafood"
      ],
      "chef_notes": ""
    },
    "short_description": "Fillet ikan bakar bumbu kecap, sambal matah, nasi jasmine.",
    "sku_code": "SKU-ITEM-FD-11"
  }
},
{
  "id": "item-fd-12",
  "categoryId": "cat-4",
  "name": "Lontong Sayur Cup",
  "description": "Lontong potong, gulai sayur santan, taburan bawang goreng.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-12-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-12-sp-0",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-12-sp-1",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-12-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-12-ao-0",
          "name": "Telur balado",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Cup single",
      "key_ingredients": [],
      "plating_style": "Cup kertas tebal, sendok kayu.",
      "dietary_flags": [
        "Halal; vegetarian opsi"
      ],
      "chef_notes": ""
    },
    "short_description": "Lontong potong, gulai sayur santan, taburan bawang goreng.",
    "sku_code": "SKU-ITEM-FD-12"
  }
},
{
  "id": "item-fd-13",
  "categoryId": "cat-4",
  "name": "Tinutuan Porridge Bowl",
  "description": "Bubur Manado modern dengan jagung, sayur, topping teri renyah.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-13-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-13-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-13-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-13-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-13-ao-0",
          "name": "Telur asin",
          "priceDelta": 7000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bowl medium",
      "key_ingredients": [],
      "plating_style": "Bowl hangat, taburan daun bawang.",
      "dietary_flags": [
        "Bisa vegetarian tanpa teri"
      ],
      "chef_notes": ""
    },
    "short_description": "Bubur Manado modern dengan jagung, sayur, topping teri renyah.",
    "sku_code": "SKU-ITEM-FD-13"
  }
},
{
  "id": "item-fd-14",
  "categoryId": "cat-4",
  "name": "Mie Aceh Stir Fry Plate",
  "description": "Mie kuning tumis rempah Aceh, udang atau sapi, acar bawang.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-14-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-14-sp-0",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-14-sp-1",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-14-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-14-ao-0",
          "name": "Kerupuk mie",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Plate kafe",
      "key_ingredients": [],
      "plating_style": "Piring lebar, garnish jeruk nipis.",
      "dietary_flags": [
        "Seafood/Non‑veg"
      ],
      "chef_notes": ""
    },
    "short_description": "Mie kuning tumis rempah Aceh, udang atau sapi, acar bawang.",
    "sku_code": "SKU-ITEM-FD-14"
  }
},
{
  "id": "item-fd-15",
  "categoryId": "cat-4",
  "name": "Mini Nasi Kuning Tumpeng",
  "description": "Nasi kuning porsi kecil, ayam suwir, serundeng, telur puyuh.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 42000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-15-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-15-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-15-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-15-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-15-ao-0",
          "name": "Sambal goreng",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Single mini tumpeng",
      "key_ingredients": [],
      "plating_style": "Piring kecil dengan hiasan daun.",
      "dietary_flags": [
        "Halal"
      ],
      "chef_notes": ""
    },
    "short_description": "Nasi kuning porsi kecil, ayam suwir, serundeng, telur puyuh.",
    "sku_code": "SKU-ITEM-FD-15"
  }
},
{
  "id": "item-fd-16",
  "categoryId": "cat-4",
  "name": "Bebek Goreng Rice Bowl",
  "description": "Irisan bebek goreng renyah, sambal korek, nasi uduk sedikit.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 72000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-16-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-16-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-16-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-16-sp-2",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-16-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-16-ao-0",
          "name": "Lalapan",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bowl single",
      "key_ingredients": [],
      "plating_style": "Bowl rustic, sambal terpisah.",
      "dietary_flags": [
        "Non‑vegetarian"
      ],
      "chef_notes": ""
    },
    "short_description": "Irisan bebek goreng renyah, sambal korek, nasi uduk sedikit.",
    "sku_code": "SKU-ITEM-FD-16"
  }
},
{
  "id": "item-fd-17",
  "categoryId": "cat-4",
  "name": "Karedok Crunch Plate",
  "description": "Sayuran mentah segar, bumbu kacang ringan, emping.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-17-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-17-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-17-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-17-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-17-ao-0",
          "name": "Tahu goreng",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Plate shareable",
      "key_ingredients": [],
      "plating_style": "Disusun rapi, saus kacang di cawan.",
      "dietary_flags": [
        "Vegan"
      ],
      "chef_notes": ""
    },
    "short_description": "Sayuran mentah segar, bumbu kacang ringan, emping.",
    "sku_code": "SKU-ITEM-FD-17"
  }
},
{
  "id": "item-fd-18",
  "categoryId": "cat-4",
  "name": "Siomay Bento",
  "description": "Siomay ikan & ayam 5 pcs, tahu, kol, saus kacang.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-18-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-18-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-18-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-18-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-18-ao-0",
          "name": "Lontong",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 5 pcs",
      "key_ingredients": [],
      "plating_style": "Box dengan kompartemen saus.",
      "dietary_flags": [
        "Mengandung ikan; gluten pada kulit"
      ],
      "chef_notes": ""
    },
    "short_description": "Siomay ikan & ayam 5 pcs, tahu, kol, saus kacang.",
    "sku_code": "SKU-ITEM-FD-18"
  }
},
{
  "id": "item-fd-19",
  "categoryId": "cat-4",
  "name": "Korean BBQ Mini Bowl",
  "description": "Bulgogi/ayam gochujang porsi kafe, nasi, kimchi, sayur panggang.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 58000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-19-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-19-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-19-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-19-sp-2",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-19-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-19-ao-0",
          "name": "Onsen egg",
          "priceDelta": 8000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Bowl single",
      "key_ingredients": [],
      "plating_style": "Bowl modern, taburan wijen.",
      "dietary_flags": [
        "Pilihan halal (ayam) tersedia"
      ],
      "chef_notes": ""
    },
    "short_description": "Bulgogi/ayam gochujang porsi kafe, nasi, kimchi, sayur panggang.",
    "sku_code": "SKU-ITEM-FD-19"
  }
},
{
  "id": "item-fd-20",
  "categoryId": "cat-4",
  "name": "Gyudon Mini Don",
  "description": "Irisan daging sapi manis di atas nasi hangat, acar jahe.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 60000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-20-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-20-ao-0",
          "name": "Miso soup",
          "priceDelta": 10000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Don single",
      "key_ingredients": [],
      "plating_style": "Mangkok don, garnish daun bawang.",
      "dietary_flags": [
        "Non‑halal; bisa ganti ayam"
      ],
      "chef_notes": ""
    },
    "short_description": "Irisan daging sapi manis di atas nasi hangat, acar jahe.",
    "sku_code": "SKU-ITEM-FD-20"
  }
},
{
  "id": "item-fd-21",
  "categoryId": "cat-4",
  "name": "Thai Green Curry Pot",
  "description": "Kari hijau ayam, santan ringan, sayur, nasi jasmine porsi kafe.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 62000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-21-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-21-sp-0",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-21-sp-1",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-21-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-21-ao-0",
          "name": "Nasi ekstra",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Pot single",
      "key_ingredients": [],
      "plating_style": "Pot kecil dengan tutup, aroma kuat saat dibuka.",
      "dietary_flags": [
        "Halal opsi; mengandung santan"
      ],
      "chef_notes": ""
    },
    "short_description": "Kari hijau ayam, santan ringan, sayur, nasi jasmine porsi kafe.",
    "sku_code": "SKU-ITEM-FD-21"
  }
},
{
  "id": "item-fd-22",
  "categoryId": "cat-4",
  "name": "Pho Cup Street Style",
  "description": "Pho daging ringkas, kaldu aromatik, herb platter kecil.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 56000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-22-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-22-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-22-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-22-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-22-ao-0",
          "name": "Extra beef",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Cup besar untuk dine‑in",
      "key_ingredients": [],
      "plating_style": "Disajikan dengan piring herb.",
      "dietary_flags": [
        "Non‑vegetarian; gluten‑free jika tanpa kecap"
      ],
      "chef_notes": ""
    },
    "short_description": "Pho daging ringkas, kaldu aromatik, herb platter kecil.",
    "sku_code": "SKU-ITEM-FD-22"
  }
},
{
  "id": "item-fd-23",
  "categoryId": "cat-4",
  "name": "Char Siu Bao Duo",
  "description": "2 pcs bakpao isi char siu manis, steam‑fresh.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 30000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-23-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-23-ao-0",
          "name": "Saus sambal manis",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 2 pcs",
      "key_ingredients": [],
      "plating_style": "Basket bambu kecil.",
      "dietary_flags": [
        "Mengandung pork (opsi ayam tersedia)"
      ],
      "chef_notes": ""
    },
    "short_description": "2 pcs bakpao isi char siu manis, steam‑fresh.",
    "sku_code": "SKU-ITEM-FD-23"
  }
},
{
  "id": "item-fd-24",
  "categoryId": "cat-4",
  "name": "Nasi Lemak Corner Plate",
  "description": "Nasi santan kecil, sambal, ikan bilis, telur, timun.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 48000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-24-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-24-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-24-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-24-sp-2",
          "name": "Pedas",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-24-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-24-ao-0",
          "name": "Ayam goreng berempah",
          "priceDelta": 18000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: Plate single",
      "key_ingredients": [],
      "plating_style": "Piring bundar, daun pisang sebagai alas.",
      "dietary_flags": [
        "Halal opsi; vegetarian tanpa ikan bilis"
      ],
      "chef_notes": ""
    },
    "short_description": "Nasi santan kecil, sambal, ikan bilis, telur, timun.",
    "sku_code": "SKU-ITEM-FD-24"
  }
},
{
  "id": "item-fd-25",
  "categoryId": "cat-4",
  "name": "Hainanese Chicken Rice Slider",
  "description": "Mini slider isi ayam poached, saus jahe, acar jahe.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "basePrice": 64000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-fd-25-sp",
      "name": "Level Pedas",
      "minSelection": 1,
      "maxSelection": 1,
      "choices": [
        {
          "id": "item-fd-25-sp-0",
          "name": "Tidak",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-fd-25-sp-1",
          "name": "Sedang",
          "priceDelta": 0,
          "isAvailable": true
        }
      ]
    },
    {
      "id": "item-fd-25-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-fd-25-ao-0",
          "name": "Sup ayam kecil",
          "priceDelta": 10000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Main Food",
    "serve_temperature": "hot",
    "allergens": [],
    "prep_time_estimate_seconds": 600,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 2–3 pcs (pilihan)",
      "key_ingredients": [],
      "plating_style": "Disajikan di papan kecil, saus terpisah.",
      "dietary_flags": [
        "Halal opsi; gluten‑free jika roti diganti nasi wrap"
      ],
      "chef_notes": ""
    },
    "short_description": "Mini slider isi ayam poached, saus jahe, acar jahe.",
    "sku_code": "SKU-ITEM-FD-25"
  }
},

{
  "id": "item-bk-1",
  "categoryId": "cat-3",
  "name": "Classic Butter Croissant",
  "description": "Croissant lapis bermentega, tekstur flaky dan aroma karamel ringan.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 28000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-1-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-1-ao-0",
          "name": "Butter",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-bk-1-ao-1",
          "name": "house jam",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Di atas kertas roti, garnish daun thyme.",
      "dietary_flags": [
        "Mengandung gluten & dairy; vegetarian."
      ],
      "chef_notes": ""
    },
    "short_description": "Croissant lapis bermentega, tekstur flaky dan aroma karamel ringan.",
    "sku_code": "SKU-ITEM-BK-1"
  }
},
{
  "id": "item-bk-2",
  "categoryId": "cat-3",
  "name": "Almond Croissant",
  "description": "Croissant isi almond frangipane, taburan almond panggang.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-2-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-2-ao-0",
          "name": "Dusting gula",
          "priceDelta": 2000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Disajikan di piring kecil, serutan almond.",
      "dietary_flags": [
        "Mengandung kacang, gluten, dairy."
      ],
      "chef_notes": ""
    },
    "short_description": "Croissant isi almond frangipane, taburan almond panggang.",
    "sku_code": "SKU-ITEM-BK-2"
  }
},
{
  "id": "item-bk-3",
  "categoryId": "cat-3",
  "name": "Pain au Chocolat",
  "description": "Puff pastry lapis dengan batang cokelat premium di tengah.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-3-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-3-ao-0",
          "name": "Extra chocolate dip",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Hangat atau suhu ruang, disajikan dengan serbet kain.",
      "dietary_flags": [
        "Mengandung gluten & dairy; vegetarian."
      ],
      "chef_notes": ""
    },
    "short_description": "Puff pastry lapis dengan batang cokelat premium di tengah.",
    "sku_code": "SKU-ITEM-BK-3"
  }
},
{
  "id": "item-bk-4",
  "categoryId": "cat-3",
  "name": "Apple Danish",
  "description": "Danish pastry dengan irisan apel karamel, crumble renyah.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-4-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-4-ao-0",
          "name": "Scoop vanilla gelato",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Piring keramik, saus karamel di sisi.",
      "dietary_flags": [
        "Mengandung gluten & dairy."
      ],
      "chef_notes": ""
    },
    "short_description": "Danish pastry dengan irisan apel karamel, crumble renyah.",
    "sku_code": "SKU-ITEM-BK-4"
  }
},
{
  "id": "item-bk-5",
  "categoryId": "cat-3",
  "name": "Cinnamon Roll Signature",
  "description": "Roti gulung kayu manis lembut, cream cheese frosting tipis.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 32000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-5-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-5-ao-0",
          "name": "Extra frosting",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Disajikan hangat, taburan gula halus.",
      "dietary_flags": [
        "Mengandung gluten & dairy."
      ],
      "chef_notes": ""
    },
    "short_description": "Roti gulung kayu manis lembut, cream cheese frosting tipis.",
    "sku_code": "SKU-ITEM-BK-5"
  }
},
{
  "id": "item-bk-6",
  "categoryId": "cat-3",
  "name": "Matcha White Chocolate Danish",
  "description": "Danish dengan lapisan matcha dan potongan white chocolate.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 40000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-6-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-6-ao-0",
          "name": "Dusting matcha",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Piring kecil, estetika minimalis.",
      "dietary_flags": [
        "Mengandung gluten & dairy; vegetarian."
      ],
      "chef_notes": ""
    },
    "short_description": "Danish dengan lapisan matcha dan potongan white chocolate.",
    "sku_code": "SKU-ITEM-BK-6"
  }
},
{
  "id": "item-bk-7",
  "categoryId": "cat-3",
  "name": "Pandan Kaya Croissant",
  "description": "Croissant twist Nusantara, isian kaya pandan lembut.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-7-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-7-ao-0",
          "name": "Kelapa parut panggang",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Disajikan dengan daun pandan kecil sebagai garnish.",
      "dietary_flags": [
        "Mengandung gluten, dairy, telur."
      ],
      "chef_notes": ""
    },
    "short_description": "Croissant twist Nusantara, isian kaya pandan lembut.",
    "sku_code": "SKU-ITEM-BK-7"
  }
},
{
  "id": "item-bk-8",
  "categoryId": "cat-3",
  "name": "Coconut Tartlet",
  "description": "Tart mini berisi krim kelapa dan serpihan kelapa karamel.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-8-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-8-ao-0",
          "name": "Scoop coconut sorbet",
          "priceDelta": 12000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Piring kecil, hiasan zest jeruk nipis.",
      "dietary_flags": [
        "Mengandung gluten & dairy; mengandung kelapa."
      ],
      "chef_notes": ""
    },
    "short_description": "Tart mini berisi krim kelapa dan serpihan kelapa karamel.",
    "sku_code": "SKU-ITEM-BK-8"
  }
},
{
  "id": "item-bk-9",
  "categoryId": "cat-3",
  "name": "Banana Bread Slice",
  "description": "Banana bread moist dengan kacang kenari, cocok untuk pairing kopi.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 30000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-9-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-9-ao-0",
          "name": "Butter",
          "priceDelta": 0,
          "isAvailable": true
        },
        {
          "id": "item-bk-9-ao-1",
          "name": "honey butter",
          "priceDelta": 5000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 slice",
      "key_ingredients": [],
      "plating_style": "Papan kayu, pisau kecil.",
      "dietary_flags": [
        "Mengandung gluten, telur, dairy; opsi vegan tersedia (permintaan)."
      ],
      "chef_notes": ""
    },
    "short_description": "Banana bread moist dengan kacang kenari, cocok untuk pairing kopi.",
    "sku_code": "SKU-ITEM-BK-9"
  }
},
{
  "id": "item-bk-10",
  "categoryId": "cat-3",
  "name": "Carrot Cake Slice",
  "description": "Cake wortel lembut, cream cheese frosting tipis, walnut.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 42000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-10-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-10-ao-0",
          "name": "Extra frosting",
          "priceDelta": 4000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 slice",
      "key_ingredients": [],
      "plating_style": "Piring dessert, taburan kayu manis.",
      "dietary_flags": [
        "Mengandung gluten, dairy, kacang."
      ],
      "chef_notes": ""
    },
    "short_description": "Cake wortel lembut, cream cheese frosting tipis, walnut.",
    "sku_code": "SKU-ITEM-BK-10"
  }
},
{
  "id": "item-bk-11",
  "categoryId": "cat-3",
  "name": "Klepon Tart Mini",
  "description": "Interpretasi pastry klepon: tart crust, isian gula merah & kelapa parut.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-11-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-11-ao-0",
          "name": "Extra kelapa",
          "priceDelta": 3000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Piring kecil, sentuhan gula palem.",
      "dietary_flags": [
        "Mengandung gluten; vegetarian."
      ],
      "chef_notes": ""
    },
    "short_description": "Interpretasi pastry klepon: tart crust, isian gula merah & kelapa parut.",
    "sku_code": "SKU-ITEM-BK-11"
  }
},
{
  "id": "item-bk-12",
  "categoryId": "cat-3",
  "name": "Onde‑Onde Cheesecake Bite",
  "description": "Mini cheesecake dengan lapisan onde‑onde (gula merah + kelapa).",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 34000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-12-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-12-ao-0",
          "name": "Extra crumb",
          "priceDelta": 2000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Disajikan dingin, topping kelapa.",
      "dietary_flags": [
        "Mengandung gluten & dairy."
      ],
      "chef_notes": ""
    },
    "short_description": "Mini cheesecake dengan lapisan onde‑onde (gula merah + kelapa).",
    "sku_code": "SKU-ITEM-BK-12"
  }
},
{
  "id": "item-bk-13",
  "categoryId": "cat-3",
  "name": "Lapis Legit Mini Slice",
  "description": "Lapis legit versi kafe, slice tipis untuk pairing teh.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 28000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-13-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-13-ao-0",
          "name": "Box 4 slices untuk take‑away",
          "priceDelta": 120000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 slice",
      "key_ingredients": [],
      "plating_style": "Piring kecil, hiasan serutan pala.",
      "dietary_flags": [
        "Mengandung telur, dairy, gluten."
      ],
      "chef_notes": ""
    },
    "short_description": "Lapis legit versi kafe, slice tipis untuk pairing teh.",
    "sku_code": "SKU-ITEM-BK-13"
  }
},
{
  "id": "item-bk-14",
  "categoryId": "cat-3",
  "name": "Cheese Danish",
  "description": "Danish lembut dengan isian cream cheese gurih.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 36000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-14-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-14-ao-0",
          "name": "Fruit compote",
          "priceDelta": 6000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Disajikan hangat, taburan gula halus.",
      "dietary_flags": [
        "Mengandung gluten & dairy."
      ],
      "chef_notes": ""
    },
    "short_description": "Danish lembut dengan isian cream cheese gurih.",
    "sku_code": "SKU-ITEM-BK-14"
  }
},
{
  "id": "item-bk-15",
  "categoryId": "cat-3",
  "name": "Savory Tuna Puff",
  "description": "Puff pastry isi tuna mayo, daun bawang, sedikit keju; opsi pedas.",
  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  "basePrice": 38000,
  "tags": [],
  "isAvailable": true,
  "addOnGroups": [
    {
      "id": "item-bk-15-ao",
      "name": "Add-ons",
      "minSelection": 0,
      "maxSelection": 5,
      "choices": [
        {
          "id": "item-bk-15-ao-0",
          "name": "Side salad kecil",
          "priceDelta": 8000,
          "isAvailable": true
        }
      ]
    }
  ],
  "meta": {
    "schema_version": "1.0",
    "category": "Bakery",
    "serve_temperature": "ambient",
    "allergens": [],
    "prep_time_estimate_seconds": 120,
    "recommended_pairings": [],
    "chef_recipe": {
      "prep_method": "Porsi: 1 pcs",
      "key_ingredients": [],
      "plating_style": "Piring kecil, saus sambal mayo di sisi.",
      "dietary_flags": [
        "Mengandung gluten, seafood, dairy; non‑vegetarian."
      ],
      "chef_notes": ""
    },
    "short_description": "Puff pastry isi tuna mayo, daun bawang, sedikit keju; opsi pedas.",
    "sku_code": "SKU-ITEM-BK-15"
  }
}
,
];

export const MOCK_MENU: MenuItem[] = RAW_MENU.map(item => {






  // ── Fallback ──────────────────────────────────────────────────────────────────
  return item;
});
