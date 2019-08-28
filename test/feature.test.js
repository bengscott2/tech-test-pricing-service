const returnPrice = require('../src/app')

const mockOrder = {
    "order": {
        "id": 12345,
        "customer": {},
        "items": [
            {
                "product_id": 1,
                "quantity": 1
            },
            {
                "product_id": 2,
                "quantity": 5
            },
            {
                "product_id": 3,
                "quantity": 1
            }
        ]
    }
}

const expectedReturn = {
  "order": {
    "id": 12345,
    "total_price": 2099,
    "total_vat": 120,
    "items": [
      {
        "product_id": 1,
        "quantity": 1,
        "item_total_price": 599,
        "item_total_vat": 120
      },
      {
        "product_id": 2,
        "quantity": 5,
        "item_total_price": 1250,
        "item_total_vat": 0
      },
      {
        "product_id": 3,
        "quantity": 1,
        "item_total_price": 250,
        "item_total_vat": 0
      }
    ]
  }
}

describe('end to end feature test', () => {
  it('will return an object with price details given an order object', () => {
    expect(returnPrice(mockOrder)).toEqual(expectedReturn)
  })
})
