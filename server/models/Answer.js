let mongoose = require('mongoose');

mongoose.model('Answer', new mongoose.Schema({
    content:{
        type:String,
        required:[true, "Must enter an answer with at least 5 characters"],
        minlength:5,
        maxlength:255
    },
    details:{ type:String, default: "" },
    likes:{ type: Number, default: 0},
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
}, {timestamps:true}));
