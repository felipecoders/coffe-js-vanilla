class App {
  constructor() {
    this.newsletter = new Newsletter({ target: 'form#subscribe' })
    this.cart = new Cart({ target: '#cart' })

    new Form()

    this.start()
  }

  start() {
  }
}

window.app = new App()