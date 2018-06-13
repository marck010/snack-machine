const config = require("../../config")
const moment = require('moment');

module.exports = class ServiceCard {

    constructor(repositoryCard) {
        this.repositoryCard = repositoryCard;
    }

    insertCard(card_number) {

        return this.getCard(card_number).then((card) => {

            if (!card) {
                throw new Error("Card not found.")
            }

            if (moment(card.lastDateAccess).isBefore(moment().startOf('date'))) {

                card.balance = config.defaultBalance;

                card.lastDateAccess = moment().startOf('date').toISOString();

                return this.updateBalance(card).then((nResult) => {

                    return card.balance;

                });

            }

            return card.balance

        })

    }

    getCard(card_number) {

        return this.repositoryCard.getCard(card_number);

    }

    getBalance(card) {
        if (moment(card.lastDateAccess).isBefore(moment().startOf('date'))) {
            return 0;
        }
        else {
            return card.balance;
        }
    }

    updateBalance(card) {
        return this.repositoryCard.updateBalance(card);
    }
}

