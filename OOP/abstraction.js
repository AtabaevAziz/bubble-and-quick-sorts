class User {
    constructor(email, deliveryAddress) {
        this.email = email;
        this.address = deliveryAddress;
    }

    placeOrder(productName) {
        console.log(`Order "${productName}" for ${this.email} in ${this.address} city.`);
    }
}

const customer = new User('user@gmail.com', 'Tashkent');
customer.placeOrder('iPhone 15');
