const mongoose=require("mongoose");
mongoose.connect('mongodb://pr16866:8529745331@cluster0-shard-00-00.bkcf8.mongodb.net:27017,cluster0-shard-00-01.bkcf8.mongodb.net:27017,cluster0-shard-00-02.bkcf8.mongodb.net:27017/employ-database?ssl=true&replicaSet=atlas-grxf4x-shard-0&authSource=admin&retryWrites=true&w=majority', {useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connected")).catch((err)=>console.log(err));
const var1=new mongoose.Schema({
name:{
    type:String,
    required:true
} ,
email:{
    type:String,
    required:true, 
    unique:true
},
phone:{
    type:Number,
    require:true,
    unique:true
},
state:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
}
});
const employ_data=mongoose.model('employ_data',var1);
module.exports=employ_data;