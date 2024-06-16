CREATE TABLE users (
   user_id              SERIAL PRIMARY KEY,
   user_name            VARCHAR(50) NOT NULL,
   user_last_name       VARCHAR(50) NOT NULL,
   user_email           VARCHAR(100) NOT NULL,
   user_nickname        VARCHAR(50) NOT NULL,
   user_phone           VARCHAR(15),
   password             VARCHAR(255) NOT NULL,
   user_image           VARCHAR(255),
   user_type            INT NOT NULL
);

-- Creación de la tabla "cart"
CREATE TABLE carts (
   cart_id              SERIAL PRIMARY KEY,
   user_id              INT NOT NULL,
   creation_date        VARCHAR(10) NOT NULL,
   total_price          DECIMAL(10, 2) NOT NULL,
   CONSTRAINT fk_cart_user FOREIGN KEY (user_id)
      REFERENCES users (user_id)
      ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- Creación de la tabla "product"
CREATE TABLE products (
   product_id           SERIAL PRIMARY KEY,
   cart_id              INT,
   user_id              INT NOT NULL,
   product_name         VARCHAR(255) NOT NULL,
   product_state        VARCHAR(50) NOT NULL,
   product_category     VARCHAR(255) NOT NULL,
   product_description  VARCHAR(255) NOT NULL,
   product_quantity     INT NOT NULL,
   product_price        DECIMAL(10, 2) NOT NULL,
   product_image        VARCHAR(255) NOT NULL,
   product_stock        INT NOT NULL,
   CONSTRAINT fk_product_cart FOREIGN KEY (cart_id)
      REFERENCES carts (cart_id)
      ON DELETE RESTRICT ON UPDATE RESTRICT,
   CONSTRAINT fk_product_user FOREIGN KEY (user_id)
      REFERENCES users (user_id)
      ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- Creación de la tabla "securityquestion"
CREATE TABLE securityquestions (
   question_id          VARCHAR(255) PRIMARY KEY,
   user_id              INT NOT NULL,
   question             VARCHAR(255) NOT NULL,
   answer               VARCHAR(255) NOT NULL,
   CONSTRAINT fk_securityquestion_user FOREIGN KEY (user_id)
      REFERENCES users (user_id)
      ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- Función para actualizar product_stock cuando se inserta o actualiza en cart
CREATE OR REPLACE FUNCTION update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
   UPDATE product
   SET product_stock = product_stock - (
      SELECT COALESCE(SUM(p.product_quantity), 0)
      FROM product p
      WHERE p.cart_id = NEW.cart_id
   )
   WHERE product.cart_id = NEW.cart_id;
   
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para ejecutar la función update_product_stock después de insertar o actualizar en cart
CREATE TRIGGER after_insert_or_update_cart
AFTER INSERT OR UPDATE ON cart
FOR EACH ROW
EXECUTE FUNCTION update_product_stock();

-- Trigger para calcular automáticamente el total_price en cart
CREATE OR REPLACE FUNCTION calculate_total_price()
RETURNS TRIGGER AS $$
DECLARE
   total DECIMAL(10, 2);
BEGIN
   SELECT SUM(product_price)
   INTO total
   FROM product
   WHERE product.cart_id = NEW.cart_id;

   UPDATE cart
   SET total_price = total
   WHERE cart.cart_id = NEW.cart_id;

   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para ejecutar la función calculate_total_price después de insertar o actualizar en product
CREATE TRIGGER after_insert_or_update_product
AFTER INSERT OR UPDATE ON product
FOR EACH ROW
EXECUTE FUNCTION calculate_total_price();

-- Script para inserción de datos de ejemplo
-- Insertar datos en la tabla "user"
INSERT INTO users (user_name, user_last_name, user_email, user_nickname, password, user_type)
VALUES
('John', 'Doe', 'john.doe@example.com', 'johnd', 'hashed_password1', 0),
('Jane', 'Smith', 'jane.smith@example.com', 'janes', 'hashed_password2', 1),
('Alice', 'Johnson', 'alice.johnson@example.com', 'alicej', 'hashed_password3', 1),
('Bob', 'Brown', 'bob.brown@example.com', 'bobb', 'hashed_password4', 1),
('Emily', 'Davis', 'emily.davis@example.com', 'emilyd', 'hashed_password5', 1);

-- Insertar datos en la tabla "cart"
INSERT INTO carts (user_id, creation_date, total_price)
VALUES
(1, '2024-06-15', 0),
(2, '2024-06-15', 0),
(3, '2024-06-15', 0),
(4, '2024-06-15', 0),
(5, '2024-06-15', 0);

-- Insertar datos en la tabla "product"
INSERT INTO products (cart_id, user_id, product_name, product_state, product_category, product_description, product_quantity, product_price, product_image, product_stock)
VALUES
(1, 1, 'PlayStation 5', 'new', 'Console', 'Latest Sony PlayStation 5', 1, 499.99, 'path/to/ps5.jpg', 10),
(1, 1, 'Xbox Series X', 'new', 'Console', 'Latest Microsoft Xbox Series X', 1, 499.99, 'path/to/xbox.jpg', 5);

-- Verificar que los datos se han insertado correctamente
SELECT * FROM users;
SELECT * FROM carts;
SELECT * FROM products;