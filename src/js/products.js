class App extends AppBase {
  constructor() {
    super()
    this.start()
  }

  start() {
    this.products.start()
  }
}

window.app = new App()
