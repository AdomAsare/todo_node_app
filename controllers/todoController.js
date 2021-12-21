
const res = require('express/lib/response');
const todo= require('../models/todo');

function insertTodo(req,res){
    console.log(req.body);
    todo.create(req.body)
    .then(function(){
        res.status(200).json('Data has been created');
    })
    .catch(function(error){
        res.status(401).json('Not created:',error.message);
      });
}

function updateTodoById(){
    const id= req.params.id
    const{isCompleted} = req.body;
    todo.findByIdAndUpdate(id)
    .then(function(){
        res.status(200).json({success:true, message:'Todo updated successfully', data})
    })
    .catch(function(error){
        res.status(404).json({success:false, message:'Todo cant update'})
    })
}
function deleteTodoById(req,res){
    const {id}= req.params.id;
    todo.findByIdAndDelete(id)
    .then(function(){
        res.status(200).json({success:true,message:'Todo is deleted successfully'});
    })
    .catch(function(error){
        res.status(404).json({success:false, message:'Todo cant delete'});
    })
} 
function getTodoById(){
    const {id}=req.paras.id;
    todo.findById(id)
    .then(function(data){
        res.status(200).json({
            success:true,data
        })
    })
}
function getAllTodos(req,res){
    todo.find(id)
    .then(function(data){
        res.status(200).json({success:true,data});
    })
    .catch(function(data){
        res.status(404)({success:false,message:'data not derived:'+error.message});
    })
}
module.exports={
    insertTodo,updateTodoById,deleteTodoById,getTodoById,getAllTodos
}