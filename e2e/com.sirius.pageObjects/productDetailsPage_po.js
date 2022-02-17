let productDetailsPage = function () {


    this.productdescription = element(by.css("#title"));
    this.productPrice = element(by.css('#tp_total_price_in .a-price-whole'));
    this.addToCartButton = element(by.id('add-to-cart-button'));
    this.proceedCheckout = element(by.xpath('//button[contains(text(),"Proceed to checkout")]'));    
};

module.exports = productDetailsPage ;