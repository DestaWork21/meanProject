let mongoose = require('mongoose');

mongoose.model('Question', new mongoose.Schema({
   content: {
       type:String,
       required:[true, "Must enter a question with at least 10 character"],
       minlength:10,
       maxlength:255
   },description:{ type:String, default: "" },
    _answers:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps:true}));
