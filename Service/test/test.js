const assert = require('assert');
const moment = require('moment');

const ServiceCard = require("../src/services/service-card");
const ServiceProduct = new require("../src/services/service-product");

describe('Tests Services', function () {

  process.env['DEFAULT_BALANCE'] = '5.50'

  describe('#insertCard()', function (done) {

    it('should return balance 5.5 when it is the first time in the day', async () => {
      let repositoryCard = {
        getCard: () => {
          return new Promise((resolve, reject) => {
            resolve({
              "number": "001",
              "lastDateAccess": moment().add(-1, 'days').toDate(),
              "balance": 0
            });
          });

        },
        updateBalance: () => {
          return new Promise((resolve, reject) => {
            resolve({});
          });
        }
      }

      var serviceCard = new ServiceCard(repositoryCard);
      let balance = await serviceCard.insertCard('002');
      assert.equal(balance, 5.5);

    });

  });

  describe('#buyProdut()', function (done) {

    it('should return error when balance is not suficient', async () => {
      let serviceCard = {
        getCard: () => {
          return new Promise((resolve, reject) => {
            resolve({
              "number": "001",
              "lastDateAccess": moment().toDate(),
              "balance": 3
            })
          })
        },
        getBalance: () => {
          return 3;
        }
      }

      let repositoryProduct = {
        getProduct: () => {
          return new Promise((resolve, reject) => {
            resolve({
              "_id": "5b208fd82b53778e5a78a70a",
              "name": "KitCat",
              "price": 4.5,
              "active": true
            })
          })

        }
      }

      var serviceProduct = new ServiceProduct(repositoryProduct, serviceCard);

      try {
        await serviceProduct.buyProduct('5b208fd82b53778e5a78a70a', '001');
      } catch (error) {
        assert.equal(error.message, 'Insufficient balance to make that purchase. Your balance is 3');
      }
    });

  });
});
