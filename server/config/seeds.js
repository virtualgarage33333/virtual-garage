const db = require('./connection');
const { User, Item, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { categoryName: 'Electronics' },
        { categoryName: 'Furniture' },
        { categoryName: 'Clothing' },
        { categoryName: 'Books' },
        { categoryName: 'Household Supplies' }, 
        { categoryName: 'Bikes' },
        { categoryName: 'Toys' },
        { categoryName: 'Sports' },
        { categoryName: 'Other' }
    ]);

    console.log('categories seeded');

    await Item.deleteMany();
    const items = await Item.insertMany([
        { itemName: 'iPhone X', price: 999.99, description: 'The latest iPhone', category: categories[0]._id, image:"https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
        { itemName: 'Macbook Pro', price: 1999.99, description: 'The best laptop', category: categories[0]._id },
        { itemName: 'Apple Watch', price: 199.99, description: 'The best watch', category: categories[0]._id },
        { itemName: 'Chair', price: 99.99, description: 'The best chair', category: categories[1]._id },
        { itemName: 'Table', price: 199.99, description: 'The best table', category: categories[1]._id },
        { itemName: 'Bed', price: 299.99, description: 'The best bed', category: categories[1]._id },
        { itemName: 'Shirt', price: 19.99, description: 'The best shirt', category: categories[2]._id },
        { itemName: 'Pants', price: 29.99, description: 'The best pants', category: categories[2]._id },
        { itemName: 'Hat', price: 9.99, description: 'The best hat', category: categories[2]._id },
        { itemName: 'Book', price: 9.99, description: 'The best book', category: categories[3]._id },
        { itemName: 'Pen', price: 4.99, description: 'The best pen', category: categories[3]._id },
        { itemName: 'Pencil', price: 2.99, description: 'The best pencil', category: categories[3]._id },
        { itemName: 'Towel', price: 19.99, description: 'The best towel', category: categories[4]._id },
        { itemName: 'Bag', price: 29.99, description: 'The best bag', category: categories[4]._id },
        { itemName: 'Socks', price: 14.99, description: 'The best socks', category: categories[4]._id },
        { itemName: 'Bike', price: 229.99, description: 'The best bike', category: categories[5]._id },
        { itemName: 'Car', price: 299.99, description: 'The best car', category: categories[5]._id },
        { itemName: 'Toy', price: 22.99, description: 'The best toy', category: categories[6]._id },
        { itemName: 'Ball', price: 14.99, description: 'The best ball', category: categories[6]._id },
        { itemName: 'Golf Club', price: 23.99, description: 'The best golf club', category: categories[6]._id },
        { itemName: 'Baseball', price: 49.99, description: 'The best baseball', category: categories[7]._id },
        { itemName: 'Soccer Ball', price: 27.99, description: 'The best soccer ball', category: categories[7]._id },
        { itemName: 'Football', price: 39.99, description: 'The best football', category: categories[7]._id },
        { itemName: 'Other', price: 9.99, description: 'The best other', category: categories[8]._id }
    ]);
    console.log('items seeded');

    await User.deleteMany();

    await User.create({
        username: 'Pam',
        password: 'password',
        email: 'pam@gmail.com',
        city: 'Milton',
    
    });
    await User.create({
        username: 'Sam',
        password: 'password',
        email: 'sam@gmail.com',
        city: 'Toronto',
});
console.log("users created");
process.exit();

});