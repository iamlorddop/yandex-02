class Api {
    getCurrency(currency) {
        this.currency = currency
        return this.currency
    }

    getPrice(datePrice) {
        this.datePrice = datePrice // ?

        if (datePrice === datePrice.toISOString().slice(0,10)) {
            // ?
        } else {
            return ''
        }
    }

    goodsQuantity(dateQuantity) {
        this.dateQuantity = dateQuantity // ?

        if (dateQuantity === dateQuantity.toISOString().slice(0,10)) {
            // ?
        } else {
            return ''
        }
    }

    shippingCost(cityId) {
        this.cityId = cityId
        // return число ?
    }

    converting(currentCurrency, convertingCurrency, num) {
        this.currentCurrency = currentCurrency
        this.convertingCurrency = convertingCurrency
        this.num = num

        return Math.ceil((num * currencyObj.currentCurrency) / currencyObj.convertingCurrency * 100) / 100
    }
}

const currencyObj = {
    'USD': 78,
    'EUR': 84.79,
    'RUB': 1
}

const db =  {
    'defaultCurrency': 'RUB',
        'prices': [
        {
            'articleId': 1,
            'price': 100,
            'date': '2023-03-01'
        },
        {
            'articleId': 2,
            'price': 200,
            'date': '2023-03-01'
        },
        {
            'articleId': 3,
            'price': 5,
            'date': '2023-03-01',
            'currency': 'USD'
        }
        ],
        'rests': [
        {
            'articleId': 1,
            'quantity': 5,
            'date': '2023-03-01',
            'lotNumber': 'L1/1'
        },
        {
            'articleId': 1,
            'quantity': 3,
            'date': '2023-03-01',
            'lotNumber': 'L1/2'
        },
        {
            'articleId': 2,
            'quantity': 10,
            'date': '2023-03-01',
            'lotNumber': 'L2/1'
        }
        ],
}

const cart = {
    'userId': 1,
    'orderDate': '2023-02-23',
    'items': [
        {
            'articleId': 1,
            'quantity': 5,
        },
        {
            'articleId': 1,
            'quantity': 3,
        },
    ],
    'cityId': 168,
    'currency': 'RUB',
}

module.exports = function (apiClient, cart) {
    let totalCost
    apiClient = new Api()

    totalCost = apiClient.shippingCost() + apiClient.converting()

    return totalCost
}
