import express from 'express';

const identityRouter = express.Router();

identityRouter.get('/api/v1/test/', (req,res)=>{
    res.status(200).send({message: 'hello'});
})

export default identityRouter;