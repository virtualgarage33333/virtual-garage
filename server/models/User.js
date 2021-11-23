const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        city: {
            type: String,
            required: true
        },
        comment: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
            }
        ],
        item: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Item'
            }
        ],
        order: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        },
    },
        // {
        // toJSON: {
        //     virtuals: true
        //     }
        // }
    
);

// set up middleware to create password
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(newPassword) {  
    return bcrypt.compare(newPassword, this.password);
};
// check password



const User = model('User', userSchema);
module.exports = User;
