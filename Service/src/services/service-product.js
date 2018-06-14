
module.exports = class ServiceProduct {

    constructor(repositoryProduct, serviceCard) {
        this.repositoryProduct = repositoryProduct;
        this.serviceCard = serviceCard;
    }

    buyProduct(product_id, card_number) {


        return this.repositoryProduct.getProduct(product_id).then((product) => {

            return this.serviceCard.getCard(card_number).then((card) => {

                if (!card) {
                    throw new Error("Card not found.")
                }

                if (!product) {
                    throw new Error("Product not found.")
                }

                let balance = this.serviceCard.getBalance(card);

                if (balance < product.price) {
                    throw new Error(`Insufficient balance to make that purchase. Your balance is ${balance}`)
                }

                card.balance -= product.price;

                return this.serviceCard.updateBalance(card);
                

            });
        })
    }
}
