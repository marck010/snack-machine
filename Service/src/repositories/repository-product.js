const ModelProduct = require('../models/product-model');


module.exports = class RepositoryProduct {

    constructor() { }

    getProduct(product_id) {

        return ModelProduct.findOne({ _id: product_id }).lean().exec();

    }

}

