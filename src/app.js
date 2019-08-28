Order = require('./order')


module.exports =  function returnPrice (rawOrder) {
  let orderId = rawOrder.order.id
  let items = rawOrder.order.items
  let order = new Order(orderId)

  order.addItems(items)
  return order.printOrder()
}
