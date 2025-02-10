//Task 1: Object Properties
const customer = { name:"John Pork", age: 42, email: "jpork649@gmail.com"} // Declaring Customer witn properties
console.log(`Customer name: ${customer.name}`); //Logging name
console.log(`Customer age: ${customer.age}`); //Logging age
console.log(`Customer email: ${customer.email}`); //Logging email

//Task 2: Object Methods 
const order = { orderId: 910, totalAmount: 690, status: "In progress",
    displayOrder: function()
    {console.log(`Order ID: ${this.orderId}, Total: ${this.totalAmount}, Status: ${this.status}`)}
 } // Declaring order with properties and adding method 
order.displayOrder(); // Calling the method 

//Task 3: Array Manipulation 

let cartItems = ["Chips", "Juice", "Water"]; //Declaring cart items
cartItems.push("cookies"); //Adding cookies to the cart
cartItems.pop(); //Removing the last item from the cart
cartItems.unshift("cereal"); // Adding cereal to the beginning
cartItems.shift(); // Removing the first item in cart
console.log(cartItems); // Logging final 

//Task 4: Map Method
let prices =[10, 30, 50];
let discount = discountedPrice = prices.map(price => price * 0.9)
console.log(`Discounted Price: ${discountedPrice}`);
