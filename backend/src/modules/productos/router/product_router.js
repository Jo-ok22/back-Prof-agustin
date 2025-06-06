import express from 'express';
import { CreateProductHandler, DeleteProductHandler, GetAllProductHandler, GetByIdProductHandler, PutProductHandler } from '../handler/product_handler.js';

export const productsRouter = express.Router();

productsRouter.get('/',async(req,res)=>{
    try {
         const response = await GetAllProductHandler()
         res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});
productsRouter.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
       const response = await GetByIdProductHandler(id)
       res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

productsRouter.post('/',async(req,res)=>{
    try {
        const response = await CreateProductHandler(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

productsRouter.put('/:id',async (req,res)=>{
    const {id}= req.params;
    try {
        const response =  await PutProductHandler(id,req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

productsRouter.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
       const response = await DeleteProductHandler(id)
       res.status(204).send(response)
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});
