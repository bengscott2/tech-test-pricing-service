Order = require('./order')


export function createOrder (rawOrder, currency) {
  let orderId = rawOrder.order.id
  let items = rawOrder.order.items
  let order = new Order(orderId)

  order.addItems(items)
  order.calculateCost(currency)
  return order.printOrder()
}
