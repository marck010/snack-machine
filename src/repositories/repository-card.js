const ModelCard = require('../models/card-model');

module.exports = class RepositoryCard {

    
    getCard(card_id) {

        return ModelCard.findOne({ _id: card_id });

    }

    updateBalance(balance) {

        return ModelCard.update({ _id: balance._id }, balance);

    }


}