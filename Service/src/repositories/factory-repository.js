const RepositoryCard =  require('../repositories/repository-card');
const RepositoryProduct = require('../repositories/repository-product');

module.exports = class FactoryRepository {

    static get newRepositoryCard() {
        return new RepositoryCard();
    }

    static get newRepositoryProduct() {
        return new RepositoryProduct()
    }

}