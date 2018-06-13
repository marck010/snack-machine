const ModelCard = require('../models/card-model');

module.exports = class RepositoryCard {

    
    getCard(card_number) {

        return ModelCard.findOne({ number: card_number });

    }

    updateBalance(balance) {

        return ModelCard.update({ _id: balance._id }, balance);

    }


}