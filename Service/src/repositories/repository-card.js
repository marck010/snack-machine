const ModelCard = require('../models/card-model');

module.exports = class RepositoryCard {
 
    constructor(){}

    getCard(card_number) {

        return ModelCard.findOne({ number: card_number }).lean().exec();

    }

    updateBalance(card) {

        return ModelCard.update({ '_id': card._id }, card);

    }

}

