const RepositoryProduct = require('../repositories/repository-produt');
const RepositoryCard = require('../repositories/repository-card');


module.exports = class ServiceProduct {

    constructor() {

        this.repositoryProduct = new RepositoryProduct()
        this.repositoryCard = new RepositoryCard()

    }

    buyProduct(produt_id, card_id) {

        this.repositoryProduct.getProdut(produt_id).then(function (produt) {

            return this.repositoryCard.getCard(card_id).then(function (card) {
                if (card.balance >= produt.price) {
                    card.balance -= produt.price;
                    return this.repositoryCard.updateBalance(card);
                }

                throw Error("Insufficient funds to make that purchase.")
            });

        })
    }



}