const express = require('express')
const { products } = require('./data')


const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Product</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return {id , name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/vi/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({sucess: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`)
})

// app.get()
// app.post()
// app.pull()
// app.delete()
// app.all()
// app.use()
// app.listen()
