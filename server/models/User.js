let mongoose = require('mongoose');

mongoose.model('User', new mongoose.Schema({
   username: {
       type: String,
       required: [true, "Must enter an username."],
       minlength: 1,
       maxlength: 255
   },
   password: {
       type: String, 
       required: [true, "Must enter a password."],
       minlength: 1,
       maxlength: 255
   },
    _questions:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    _answers:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
}, {timestamps:true}));
