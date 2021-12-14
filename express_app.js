 const express = require('express');
 const mongoose = require('mongoose');

 const server= express();
const mongo_db_url='mongodb+srv://AdomAsare:dot3590.@cluster0.andw3.mo,,lllllllllllllllllllllllllllllkngodb.net/todos_db?retryWrites=true&w=majority'

 server.get('/ride-order', function(req, res){
     res.status(200).json('All ride-order account');
 });
 server.post('/ride-order', function(req, res){
     res.status(200).json('Create a new ride-order account')
 });
 server.put('/ride-order', function(req, res){
     res.status(200).json('Update ride-order account');
 });
 server.delete('/ride-order', function(req, res){
     res.status(200).json('Delete a ride-order account')
 });

 server.listen(4000, function(){
     console.log('Server has started to run in express')
 });