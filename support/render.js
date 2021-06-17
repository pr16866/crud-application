const express = require("express");
const router = new express.Router();

const employ_data = require("./schema.js");

router.use(express.urlencoded());
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        let fdata = await employ_data.find();
        console.log(fdata)
        res.render("data",{fdata})
    } catch (er) {
        console.log(er);
    }

});
router.get("/form", async(req, res)=>{
    try {

        res.render("form")
    } catch (er) {
        console.log(er);
    }

});

router.post("/form", async (req, res) => {
    try {
        let data = req.body;
     
        let var2 = await employ_data.insertMany([data]); 
          let fdata = await employ_data.find();
        res.render("data",{fdata});
    }
    catch (er) {
        res.status(404).send(er);
    }

});

router.get("/delete",async(req,res)=>{
    try {
        // const name =await req.params.n;
        const _id=req.query.id;
        console.log(_id);
        const delet_item=await employ_data.deleteOne({_id})
        let fdata = await employ_data.find();
        res.render("data",{fdata});
    
    } catch (e) {
        res.status(404).send(e);
    }
});

router.get("/edit",async(req,res)=>{
try{
     res.render("form");
    const _id=req.query.id;
    let fdata = await employ_data.find({_id});
  
    req.body.name=fdata[0].name;
     // const delet_item=await employ_data.updateOne({_id},{$set:{name:}}

}catch(er){
    console.log(er);
}
});










module.exports = router;