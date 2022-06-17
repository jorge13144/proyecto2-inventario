const express = require ("express");
const router = express.Router("");

const connection = require("./database/db");


router.get("/producto",(req,res)=>{
   
   
   
     connection.query("SELECT * FROM productos",(error,resultado)=>{
if(error){
    throw error;
}else{
    res.render("producto", {resultado:resultado});
}
    }) 
})


*// crear un registro //*


router.get("/create",(req,res)=>{
    res.render("create");
})


router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/menu",(req,res)=>{
    res.render("menu");
})

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/",(req,res)=>{
    res.render("index");
})

router.get("/cambiarcontrasena",(req,res)=>{
    res.render("cambiarcontrasena");
})

router.get("/paginavalida",(req,res)=>{
    res.render("paginavalida");
})










//ruta para editar 
router.get("/edit/:id", (req,res)=>{
    const id = req.params.id;
    connection.query("SELECT * FROM productos WHERE id = ?",[id],(error,resultado)=>{
        if(error){
            throw error;
        }else{
            res.render("edit", {productos:resultado[0]});
        }
    })
})


// ruta para eliminar un registro
router.get("/delete/:id",(req,res)=>{
    const id = req.params.id;
    connection.query("DELETE  FROM productos WHERE id = ?",[id],(error,resultado)=>{
        if(error){
            throw error;
        }else{
            res.redirect("/producto");
        }
    })
})

const crud = require("./controllers/crud");
const { Router } = require("express");
router.post("/save", crud.save)
router.post("/update", crud.update);









module.exports=router;






