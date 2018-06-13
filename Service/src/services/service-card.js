const RepositoryCard = require('../repositories/repository-card');

const config = require("../../config")

module.exports = class ServiceCard {

    constructor() {
        this.repositoryCard = new RepositoryCard()
    }


    insertCard(card_number) {

        this.repositoryCard.getCard(card_number).then(function (card) {

            if (date <= moment().startOf('date')) {

                card.balance = config.defaultBalance;
                
                card.date = moment().startOf('date');

                return this.repositoryCard.updateBalance(card).then(function () {
                    
                    return card.balance;

                });

            }

            return card.balance
        })

    }

}