import { pool } from '../database/bd.js';

export const getProducts = async ({ category, state }) => {
  if (category) {
    const products = await pool.query(
      'SELECT * FROM products JOIN categories ON products.category_id = categories.category_id JOIN states ON products.state_id = states.state_id WHERE categories.category_id = $1',
      [category]
    );
    return products.rows;
  }
  if (state) {
    const products = await pool.query(
      'SELECT * FROM products JOIN categories ON products.category_id = categories.category_id JOIN states ON products.state_id = states.state_id WHERE states.state_id = $1',
      [state]
    );
    return products.rows;
  }
  const products = await pool.query(
    'SELECT * FROM products JOIN categories ON products.category_id = categories.category_id JOIN states ON products.state_id = states.state_id'
  );
  return products.rows;
};

export const createProduct = async (productData) => {
  const {
    product_name,
    product_description,
    product_price,
    product_stock,
    product_image,
    category_id,
    state_id,
  } = productData;

  const result = await pool.query(
    'INSERT INTO products (product_name, product_description, product_price, product_stock, product_image, category_id, state_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [
      product_name,
      product_description,
      product_price,
      product_stock,
      product_image,
      category_id,
      state_id,
    ]
  );
  return result.rows[0];
};

export const getProductById = async (id) => {
  const product = await pool.query(
    'SELECT * FROM products WHERE product_id = $1',
    [id]
  );
  return product.rows[0];
};

export const updateProduct = async (id, updatedFields) => {
  const updateValues = [];
  const updateParams = [];

  Object.keys(updatedFields).forEach((key, index) => {
    updateValues.push(`${key} = $${index + 1}`);
    updateParams.push(updatedFields[key]);
  });

  updateParams.push(id);

  const updateQuery = `
    UPDATE products
    SET ${updateValues.join(', ')}
    WHERE product_id = $${updateParams.length}
    RETURNING *
  `;

  const { rows } = await pool.query(updateQuery, updateParams);
  return rows[0];
};

export const deleteProductById = async (id) => {
  const product = await pool.query(
    'DELETE FROM products WHERE product_id = $1 RETURNING *',
    [id]
  );
  return product.rows[0];
};
