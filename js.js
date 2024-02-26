import express from 'express'
import 'dotenv/config'
import { Router } from 'express'
import cors from 'cors'
import product from './db.js'

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
const router = new Router()
app.use('/api', router)

router.get('/allproducts', (req,res)=>{
    res.send(product)})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


