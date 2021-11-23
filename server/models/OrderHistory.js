
const { Schema, model } = require('mongoose');

const OrderHistorySchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
});