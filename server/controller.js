module.exports = {
    createProduct: (req, res) => {
        console.log('Got POST request!')
        const db = req.app.get('db')
        const { product_name, product_imgurl, product_price } = req.body
        console.log(req.body)
        db.create_Product([ product_name, product_imgurl, product_price ])
          .then( product => {
            console.log(product)
            res.status(200).send(product)
          })
          .catch( () => res.status(500).send() );
      },
}