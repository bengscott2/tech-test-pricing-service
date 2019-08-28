const Item = require('./item')

module.exports = class Order {

  constructor(orderId){
    this.orderId = orderId
    this.orderItems = []
    this.totalPrice = 0
    this.totalVat = 0
  }

  addItems(items) {
    items.forEach( (item, index) => {
      this.orderItems.push(new Item (item.product_id, item.quantity))
    })
    return this.items
  }

  printOrder() {
    this.totalPrice = this.orderItems.map((item) => item.totalPrice).reduce((a, b) => a + b , 0)
    this.totalVat = this.orderItems.map((item) => item.totalVat).reduce((a, b) => a + b, 0)
    let returnItems = this.orderItems.map( item => (
      {
      product_id: item.productId,
      quantity: item.quantity,
      item_total_price: item.totalPrice,
      item_total_vat: item.totalVat
      }
      ))
    return {
      "order": {
        "id": this.orderId,
        "total_price": this.totalPrice,
        "total_vat": this.totalVat,
        "items": returnItems
      }
    }
  }
}
