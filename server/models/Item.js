const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default:0,
        },
        // image: {
        //     type: String,
        //     // required: true,
        // },
        category: {
            type: String,
            // required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Item = model('Item', ItemSchema);
module.exports = Item;


