import { faker } from '@faker-js/faker';
import { addProduct, findProducts } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid(),
  });
}

const foundProducts = findProducts({ size: 'S', isNew: true });
console.log('🚀 ~ file: main.ts ~ line 20 ~ foundProducts', foundProducts);
