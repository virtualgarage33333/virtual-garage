const { Schema, model } = require('mongoose');

const OrderSchema = new Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
});

const Order = model('Order', OrderSchema);
module.exports = Order;
