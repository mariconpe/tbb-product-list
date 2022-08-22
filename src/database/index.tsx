import data from 'assets/data.json';

export const PRODUCTS = data.data.nodes;
export const PRODUCT_MODEL = data.data.nodes[0];
export const CATEGORIES = [... new Set(data.data.nodes.map(x => x.category.name))];
export const CATEGORIES_KEYS = [... new Set(data.data.nodes.map(x => x.category._id))];
