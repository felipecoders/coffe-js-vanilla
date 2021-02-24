class App {
  constructor() {
    this.newsletter = new Newsletter({ target: 'form#subscribe' })
    this.cart = new Cart({ target: '#cart' })

    this.products = new ProductItems({
      target: 'section#products-list',
      products: [
        {
          id: Date.now(),
          description:
            'A planta do café Conilon possui folhas enrugadas e grãos menores e arredondados.',
          name: 'Conilon',
          price: 10.5,
          stock: 10,
          unit: 'PC',
          url_image: 'images/banner-01.jpg',
        },
      ],
    })

    this.start()
  }

  start() {
    this.products.start()
  }
}

window.app = new App()
