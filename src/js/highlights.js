/**
 * @typedef {{ id: number, name: string; description: string; image: string }} Products
 * @typedef {{ target: string; products: Products[], time: number }} HighlightsDTO
 */
class Highlights {
  constructor(/**@type {HighlightsDTO} */{ target, products, time }) {
    this.target = document.querySelector(target)
    this.products = products
    this.time = time
  }

  run() {
    const timeout = setTimeout(() => {
      const product = this.products[this.index]

      const image = this.target.querySelector('img')
      image.src = product.image.replace('./', '')

      const productName = this.target.querySelector('.details > strong')
      productName.innerText = product.name

      const productDescription = this.target.querySelector('.details > p')
      productDescription.innerHTML = product.description

      const productButton = this.target.querySelector('button')
      productButton.onclick = () => {
        location.href = `product.html?id=${product.id}`
      }

      this.index += 1
      if (typeof this.products[this.index] === 'undefined') this.index = 0

      this.timeout = this.run()
    }, this.time * 1000)

    return timeout
  }

  start() {
    this.index = 0
    this.stop()
    this.timeout = this.run()
  }

  stop() {
    clearTimeout(this.timeout)
  }
} 