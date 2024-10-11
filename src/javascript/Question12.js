import customerData from "./data";

export function flattenCustomerPurchases(customers) {
  const result = customers.reduce((acc, initialValue) => {
    const customer = initialValue["name"];
    const valuePurchase = initialValue["purchases"];
    const desiredObject = (valuePurchase || []).map(
      (ele) =>
        ele && {
          customer,
          ...(ele || {}),
        }
    );
    return [...acc, ...desiredObject];
  }, []);
  return result;
}

const transactions = flattenCustomerPurchases(customerData);
console.log(transactions);

//how to flatten array of nested objects

///test cases
// const assert = require('assert');
// import { flattenCustomerPurchases } from './index';

// describe('Complete Test Suite - Customer Data Flattener', () => {

//   // Test Case 1: Test with multiple customers and various products
//   it('should flatten multiple customers with various products', () => {
//     const input = [
//       { name: "John Doe", purchases: [{ product: "Laptop", price: 1200 }, { product: "Mouse", price: 25 }] },
//       { name: "Jane Smith", purchases: [{ product: "Smartphone", price: 800 }, { product: "Headphones", price: 50 }] },
//       { name: "Alice", purchases: [{ product: "Tablet", price: 400 }, { product: "Keyboard", price: 40 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop", price: 1200 },
//       { customer: "John Doe", product: "Mouse", price: 25 },
//       { customer: "Jane Smith", product: "Smartphone", price: 800 },
//       { customer: "Jane Smith", product: "Headphones", price: 50 },
//       { customer: "Alice", product: "Tablet", price: 400 },
//       { customer: "Alice", product: "Keyboard", price: 40 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 2: Test with additional customer properties
//   it('should handle customer records with additional properties', () => {
//     const input = [
//       { name: "John Doe", age: 30, purchases: [{ product: "Laptop", price: 1200 }] },
//       { name: "Jane Smith", age: 25, purchases: [{ product: "Smartphone", price: 800 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop", price: 1200 },
//       { customer: "Jane Smith", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 3: Test with empty purchases array for a customer
//   it('should handle empty purchases array for a customer', () => {
//     const input = [
//       { name: "John Doe", purchases: [] },
//       { name: "Jane Smith", purchases: [{ product: "Smartphone", price: 800 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "Jane Smith", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 4: Test with large dataset of customers and products
//   it('should handle a large dataset of customers and products', () => {
//     // Create a large dataset and test the function
//     // ...
//   });

//   // Test Case 5: Test with duplicate products for customers
//   it('should handle duplicate products for customers', () => {
//     const input = [
//       { name: "John Doe", purchases: [{ product: "Laptop", price: 1200 }, { product: "Laptop", price: 1200 }] },
//       { name: "Jane Smith", purchases: [{ product: "Smartphone", price: 800 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop", price: 1200 },
//       { customer: "John Doe", product: "Laptop", price: 1200 },
//       { customer: "Jane Smith", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 6: Test with special characters in product names
//   it('should handle products with special characters', () => {
//     const input = [
//       { name: "John Doe", purchases: [{ product: "Laptop - Pro", price: 1200 }] },
//       { name: "Jane Smith", purchases: [{ product: "Smartphone", price: 800 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop - Pro", price: 1200 },
//       { customer: "Jane Smith", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 7: Test with zero-priced products
//   it('should handle zero-priced products', () => {
//     const input = [
//       { name: "John Doe", purchases: [{ product: "Laptop", price: 0 }, { product: "Mouse", price: 25 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop", price: 0 },
//       { customer: "John Doe", product: "Mouse", price: 25 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 8: Test with negative-priced products
//   it('should handle negative-priced products', () => {
//     const input = [
//       { name: "John Doe", purchases: [{ product: "Laptop", price: -1200 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe", product: "Laptop", price: -1200 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 9: Test with null or undefined values
//   it('should handle null or undefined values', () => {
//     const input = [
//       { name: null, purchases: [{ product: "Laptop", price: 1200 }] },
//       { name: "Jane Smith", purchases: [{ product: "Smartphone", price: 800 }] },
//       { name: "Alice", purchases: null }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: null, product: "Laptop", price: 1200 },
//       { customer: "Jane Smith", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });

//   // Test Case 10: Test with various types of customer names
//   it('should handle customers with various types of names', () => {
//     const input = [
//       { name: "John Doe & Family", purchases: [{ product: "Laptop", price: 1200 }] },
//       { name: "Jane's Corporation", purchases: [{ product: "Smartphone", price: 800 }] }
//     ];
//     const result = flattenCustomerPurchases(input);
//     const expected = [
//       { customer: "John Doe & Family", product: "Laptop", price: 1200 },
//       { customer: "Jane's Corporation", product: "Smartphone", price: 800 }
//     ];
//     assert.deepStrictEqual(result, expected);
//   });
// });
