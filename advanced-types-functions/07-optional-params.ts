export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const product1 = createProduct(2, true, 10);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 14 ~ product1', product1);
const product2 = createProduct(3, false);
console.log('🚀 ~ file: 07-optional-params.ts ~ line 16 ~ product2', product2);
