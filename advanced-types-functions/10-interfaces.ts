// Specific values
type Sizes = 'S' | 'M' | 'L' | 'XL';
type UserId = string | number;

// Type, primitivos y directos
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// };

// Can be extended
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Shirt',
  createdAt: new Date(),
  stock: 10,
  size: 'S',
});

const addProduct = (product: Product): void => {
  products.push(product);
};
