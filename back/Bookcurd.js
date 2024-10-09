const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksc = require('./Bookschema');
const cors=require('cors');

const connectionString = "mongodb+srv://vruta:vruta@cluster0.wry7s.mongodb.net/test";

mongoose.connect(connectionString)
    .then(() => {
        const app = express();
         app.use(cors());
        
        app.use(bodyParser.urlencoded({extended:false}))
         app.use(express.json())

        console.log("Connected to database");

        app.get('/Book', async (req, res) => {
            
                const ans = await booksc.find();
                res.json(ans);
            
        });

        app.get('/Book/:id',async(req,res)=>{
            const ans = await booksc.findOne({id:req.params.id});
            res.send(ans);
            });
        app.delete('/Book/:id',async(req,res)=>{
        const ans =await booksc.deleteOne({id:req.params.id})
        res.send(ans);
        });

        app.patch('/Book/:id',async(req,res)=>{
            const result= await booksc.findOneAndUpdate({id:req.params.id},req.body);
            res.send("object updated");
        })  
        app.post('/Book',async(req,res)=>{
            my=new booksc ({...req.body});
            const result=await my.save();
            res.send(result);
        })
    

        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        });
    })
            