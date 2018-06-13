const FactoryRepository = require('../repositories/factory-repository');

const ServiceCard = require("../services/service-card");
const ServiceProduct = new require("../services/service-product");


module.exports = class FactorService {

    static get newServiceCard() {
        return new ServiceCard(FactoryRepository.newRepositoryCard)
    }

    static get newServiceProduct() {
        return new ServiceProduct(FactoryRepository.newRepositoryProduct, FactorService.newServiceCard)
    }

}