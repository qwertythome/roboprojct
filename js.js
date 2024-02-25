import express from 'express'
import 'dotenv/config'
import { Router } from 'express'
import cors from 'cors'
export let product = [
    {
        title: "Banana",
        price: 2,
        id: 0
    },
    {
        title: "Orange",
        price: 3,
        id: 1
    },
    {
        title: "Chocolate Bar",
        price: 1.5,
        id: 2
    },
    {
        title: "Coffee Beans",
        price: 8,
        id: 3
    },
    {
        title: "Milk Chocolate",
        price: 4,
        id: 4
    },
    {
        title: "Cheese",
        price: 6,
        id: 5
    },
    {
        title: "Tomato",
        price: 1,
        id: 6
    },
    {
        title: "Spinach",
        price: 2.5,
        id: 7
    },
    {
        title: "Salmon",
        price: 12,
        id: 8
    },
    {
        title: "Peanut Butter",
        price: 5,
        id: 9
    },
    {
        title: "Bread",
        price: 2,
        id: 10
    },
    {
        title: "Yogurt",
        price: 3.5,
        id: 11
    }
]

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
const router = new Router()
app.use('/api', router)

router.get('/allproducts', (req,res)=>{
    res.send(product)
})

router.get('/products', (req, res) => {
    if (req.query.title) {
        const search = req.query.title;
        console.log('search', search);
        const searchByLetters = product.filter(e => e.title.includes(search));
        console.log(searchByLetters);
        res.send('ggg');
    } else {
        res.send('...You Suck...');
    }

});

router.post('/product', (req, res) => {
    const{title, price, id}= req.body
    console.log(title, price, id);
    res.json(title, price, id)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


