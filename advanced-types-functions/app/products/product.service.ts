import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const completeProducts = (product: CreateProductDto): Product => {
  const newProduct = {
    ...product,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  return newProduct;
};

export const addProduct = (product: CreateProductDto): Product => {
  const newProduct = completeProducts(product);
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string | number,
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((product) => product.id === id);
  const preData = products[index];
  const updatedProduct = { ...preData, ...changes };
  products[index] = updatedProduct;
  return updatedProduct;
};

export const deleteProduct = (id: string) => {
  products.map((product, index) => {
    if (product.id === id) products.splice(index, 1);
  });
};

export const findProducts = (dto: FindProductDto): Product[] => {
  const foundProducts = products.filter((product) => {
    let isFound = true;
    (Object.keys(dto) as Array<keyof typeof product>).forEach((key) => {
      if (product[key] !== dto[key]) isFound = false;
    });
    return isFound;
  });
  return foundProducts;
};
