const mongoose = require('mongoose');
const dbUrl = '';


const articleSchema  = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    content: {
        type: String, 
        required: true
    },
    userID: {
        type: String,
        required: true
    }

})


articleSchema.path('title').validate(function (){
    return this.title.length>=1
}, 'Title should be more than 1 characters ')

articleSchema.path('content').validate(function (){
    return this.title.length>=10
}, 'Title should be more than 10 characters ')


const Article = mongoose.model('Article', articleSchema)


mongoose.connect(dbUrl).then(()=>{
    console.log('Connected to db');
    const article = new Article({title:'New article', content:'some text'});
    post.save().then(()=>{
        console.log('Article saved');

    }).catch(err=>{
        console.log(err);
    })
})