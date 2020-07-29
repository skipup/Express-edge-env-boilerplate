import express from 'express';
const app = express();

const router = express.Router();

router.use('/',(req,res,next)=>{
    res.render('home',{name:"MTK"})
})
router.get('/',(req,res)=>{
    res.send('from router')
})

router.get('/user/:id/:name',(req,res,next)=>{

    res.send('user id '+req.params.id+req.params.name)
})
export default router;