const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports = {
    createProduct: (request, response) => {
        Product.create(request.body) //This will use whatever the body of the client's request sends over
            .then(product => response.json(product))
            .catch(err => response.status(300).json(err));
    },

    getAllProducts: (request, response) => {
        Product.find({})
            .then(products => response.json(products))
            .catch(err => response.json(err));
    },

};
