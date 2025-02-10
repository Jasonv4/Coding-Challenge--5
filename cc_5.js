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
