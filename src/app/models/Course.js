const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

const Course = new Schema({
    name:{type:String,default:'',maxLength:255,required:true},
    description :{type:String,default:''},
    image:{type:String},
    videoId:{type:String,default:'',maxLength:255},
    level:{type:String,default:'',maxLength:255,required:true},
    slug: { type: String, slug: 'name',unique:true }


},{timestamps:true});

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{deletedAt:true,overrideMethods:'all'})
module.exports=mongoose.model('Courses', Course);