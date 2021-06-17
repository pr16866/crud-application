const path=require("path");
const express=require("express");
const app=express();
const routter=require("./support/render");
require("./support/schema")


const pug_path=path.join(__dirname,"./frontend/pug");
const css_path=path.join(__dirname,"./frontend/css");
const js_path=path.join(__dirname,"./frontend/js");

app.use(express.static(css_path));
app.use(express.static(js_path));
app.use(routter);
app.set("view engine","pug");
app.set("views",pug_path);

let port=process.env.PORT || 80;

app.listen(port,()=>{
    console.log("your server is created at port 8050");
});
