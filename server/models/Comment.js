const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommentSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        commentText: {
            type: String,
            required: 'You need to leave a comment',
            minlength: [1, 'Comment must be at least 1 character long'],
            maxlength: [500, 'Comment must be less than 500 characters long']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    });

    const Comment = model('Comment', CommentSchema);
    module.exports = Comment;

