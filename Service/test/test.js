const assert = require('assert');
const moment = require('moment');

const ServiceCard = require("../src/services/service-card");
const ServiceProduct = new require("../src/services/service-product");

describe('Tests Service Card', function () {

  describe('#insertCard()', function () {
    it('should return balance 10 when it is the first time in the day', function () {
      repositoryCard = {
        getCard: () => {
          return new Promise((resolve, reject) => {
            resolve({
              "number": "001",
              "active": true,
              "lastDateAccess": moment().add(-1, 'days').toDate(),
              "balance": 0
            })
          })

        }, updateBalance: () => {
          new Promise((resolve, reject) => {
            resolve()
          })
        }
      }
      var serviceCard = new ServiceCard(repositoryCard);

      serviceCard.insertCard().then((balance) => {
        
        assert.equal(balance, 10);

      })
    });
  });

});
