const RepositoryCard = require('../repositories/repository-card');


module.exports = class ServiceCard {

    constructor() {
        this.repositoryCard = new RepositoryCard()
    }


    insertCard(card) {

        this.repositoryCard.getCard(card._id).then(function (card) {

            if (date <= moment().startOf('date')) {

                card.balance = 10;
                card.date = moment().startOf('date');

                return this.repositoryCard.updateBalance(card).then(function () {
                    
                    return card.balance;

                });

            }

            return card.balance
        })

    }

}