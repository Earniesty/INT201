//หาโจทย์ของ method map เอาโจทย์กับตัวอย่างมา
// Problem: Transform an array of numbers by doubling each value using the map() method.

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Solution using the map() method
const doubledNumbers = numbers.map(function(number) {
  // Double each value
  return number * 2;
});

// Output the transformed array
console.log(doubledNumbers);

console.log('---------------------------------------------------');

// // Problem: Transform an array of products by adding sales tax to each product's price using the map() method.

// // Sample array of products
// const products = [
//     { name: "EyeShadow", price: 129 },
//     { name: "Concealer", price: 169 },
//     { name: "Cushion", price: 299 },
//   ];
  
//   // Sales tax rate (10%)
//   const salesTaxRate = 0.10;
  
//   // Solution using the map() method
//   const productsWithTax = products.map(function(product) {
//     // Calculate the price with sales tax
//     const priceWithTax = product.price * (1 + salesTaxRate);
  
//     // Return a new object with updated information
//     return {
//       name: product.name,
//       price: priceWithTax,
//       tax: priceWithTax - product.price,
//     };
//   });
  
//   // Output the transformed array
//   console.log(productsWithTax);

  console.log('===============================================');

  // Problem: Transform an array of products by applying a 15% discount to each product's price using the map() method.

// Sample array of products
const products = [
    { name: "EyeShadow", price: 129 },
    { name: "Concealer", price: 169 },
    { name: "Cushion", price: 299 },
  ];
  
  // Discount rate (15%)
  const discountRate = 15;
  
  // Solution using the map() method
  const productsWithDiscount = products.map(function(product) {
    // Calculate the discounted price
    const discountedPrice = product.price * (100 - discountRate) / 100;
  
    // Return a new object with updated information
    return {
        name: product.name,
        price: discountedPrice,
    };
  });
  
  // Output the transformed array
  console.log(productsWithDiscount);
  
  
