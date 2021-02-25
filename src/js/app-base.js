class AppBase {
  constructor() {
    this.newsletter = new Newsletter({ target: 'form#subscribe' })
    this.cart = new Cart({ target: '#cart' })

    const products = [
      {
        id: 1,
        description:
          'A planta do café Conilon possui folhas enrugadas e grãos menores e arredondados.',
        name: 'Conilon',
        price: 10.5,
        stock: 10,
        unit: 'PC',
        url_image: 'images/banner-01.jpg',
      },
      {
        id: 2,
        description:
          'A planta do café Conilon possui folhas enrugadas e grãos menores e arredondados.',
        name: 'Marca P',
        price: 7.5,
        stock: 33,
        unit: 'PC',
        url_image: 'images/banner-02.jpg',
      },
    ]

    const amounts = sessionStorage.getItem('amounts')
      ? JSON.parse(sessionStorage.getItem('amounts'))
      : {}

    /**
       { id: 1, id: 2 }
       [['id', 1], ['id', 2]]
       */
    Object.entries(amounts).forEach(amount => {
      const product = products.find(({ id }) => id === Number(amount[0]))
      product.stock -= amount[1]
    })

    this.products = new ProductItems({
      target: 'section#products-list',
      products,
    })

    this.products.listen('add-product-to-cart', product => {
      this.cart.add(product)
    })

    this.cart.listen('remove-product-from-cart', id => {
      this.cart.remove(id)
      this.products.addToStock(id)
    })
  }
}
