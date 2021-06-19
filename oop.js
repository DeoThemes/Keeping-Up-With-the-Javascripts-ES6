// Homework Assignment #12: Object Oriented Programming.

// User Object constructor
function User(username, password) {
	this.username = username;
	this.password = password;
	this.isLoggedIn = false;
}

User.prototype.login = function() {
	this.isLoggedIn = true;
	console.log("Logged in");
}

User.prototype.logout = function() {
	this.isLoggedIn = false;
	console.log("Logged out");
}

// Create new User
const userObj1 = new User("Tom", "12345");
userObj1.login();

// Customer Object constructor
function Customer(id, firstName, lastName, email, username, password) {
	User.call(this, username, password);

	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.shippingAddress = [];
	this.billingAddress = [];
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.register = function() {
	console.log(`${this.username} registered successfully.`);
}

Customer.prototype.updateProfile = function() {
	console.log(`Profile updated successfully.`);
}

Customer.prototype.setBillingAddress = function (billingAddress) {
	this.billingAddress.push(billingAddress);
	console.log(`Billing address updated successfully.`);
}

Customer.prototype.setShippingAddress = function (shippingAddress) {
	this.shippingAddress.push(shippingAddress);
	console.log(`Shipping address updated successfully.`);
}

// Create new Customer
const customerObj1 = new Customer(12, "Tom", "Hanks", "tom@gmail.com");

// register
customerObj1.register();

// update profile
customerObj1.updateProfile();

// Set billing address.
customerObj01.setBillingAddress(new Address("4632 Pinnick Street", "Sultan", "WA", "98294"));

// Set shipping address.
customerObj01.setShippingAddress(new Address("2032 Vine Street", "Buffalo Grove", "IL", "60089"));

// Address Object constructor
function Address(street, city, state, zipCode) {
	this.street = street;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
}


// Order Object constructor
function Order(id, purchaseDate, shippingDate, title, price, currency) {
	this.id = id;
	this.purchaseDate = purchaseDate;
	this.shippingDate = shippingDate;
	this.title = title;
	this.price = price;
	this.currency = currency;
}

const orderObj1 = new Order(3, "19-6-2021", "24-6-2021", "Gloves", 24, "USD");
const orderObj2 = new Order(4, "20-6-2021", "24-6-2021", "Hat", 14, "USD");


// Cart Object constructor
function Cart(items, dateVisited) {
	this.items = [];
	this.dateVisited = dateVisited;
}

Cart.prototype.addItem = function (item) {
	this.items.push(item);
	console.log("Item added successfully");
}

Cart.prototype.removeItem = function (id) {
	console.log(`Item ${id} removed successfully`);
}

Cart.prototype.updateItem = function (id) {
	console.log(`Item ${id} updated successfully`);
}

// Create new Cart
const cartObj1 = new Cart(0, new Date());

// Add items
cartObj1.addItem(orderObj1);
cartObj1.addItem(orderObj2);

// Remove item
cartObj1.removeItem(4);

// Update item
cartObj1.updateItem(3);