export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
};

const product1 = createProduct(2, true, 3);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 14 ~ product1', product1);
const product2 = createProduct(3, false);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 16 ~ product2', product2);
const product3 = createProduct(4, false, 100);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 16 ~ product3', product3);
const product4 = createProduct(4);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 16 ~ product4', product4);
