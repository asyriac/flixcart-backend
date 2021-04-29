const faker = require('faker');
const Product = require('./models/products.model')
const initDB = require('./db')

require('dotenv').config()
initDB();

const seedProducts = async () => {    
    for(let i = 0 ; i < 50 ; i++) {
        await Product.create({
            name: faker.commerce.productName(),
            image: faker.random.image(),
            price: faker.commerce.price(),
            inStock: faker.datatype.boolean(),
            fastDelivery: faker.datatype.boolean(),
            rating: faker.random.arrayElement([1, 2, 3, 4, 5])
        })
    }
    console.log("Products added to db");
}

seedProducts();