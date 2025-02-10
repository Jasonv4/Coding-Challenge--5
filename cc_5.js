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
let prices =[10, 30, 50]; //Declare array prices
let discount = discountedPrice = prices.map(price => price * 0.9); //applying 10% discount
console.log(`Discounted Price: ${discountedPrice}`); // Logging Discounted prices

//Task 5: Filter Method
let inventory = [0, 12, 13, 0, 15, 68]; //Declaring array inventory
let availableStock = inventory.filter(quantity => quantity > 0); //Removes products with zero stock
console.log(availableStock);// Logging Filtered array

//Task 6: Reduce Method

let sales = [114, 910, 920, 430]; // Declaring Array Sales
let totalRevenue = sales.reduce((total, sales) => total + sales, 0);// Using Reduce to calculate total revenut
console.log(`Total Revenue; $${totalRevenue}`);//Logging total revenue

//Task 7; find() Method

let customers = ["Peter","Gwen", "Miles", "Miguel"]; // declaring array of customers
let thisCustomer = customers.find(customer => customer === "Miles"); // Finding specific customer "Miles"
console.log(thisCustomer); // Logging search result

//Task 8 Function Declaration

function calculateTax(amount, taxRate) {
  let tax =  amount * taxRate; 
    console.log(`Calculated tax: $${tax}`)
};// Writing Function to calculate tax
    calculateTax(150, 0.07)

//Task 9 Function Expression 
let applyDiscount =function(price, discount)
{return price -(price * discount)}; // Declaring function
console.log(`Discounted Price : $${applyDiscount(420, 0.15)}`); //Returns discountec price

//Task 10 Arrow Function
const calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10);
console.log(`Total Points ${points}`)
return points;}
calculatePoints(780)


