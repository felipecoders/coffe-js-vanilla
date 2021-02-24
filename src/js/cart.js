/**
 * @typedef {{ target: string }} CartDTO
 * @typedef {{ id: number; name: string; amount: number; price: number }} CartItemDTO
 */

class Cart {
  constructor(/** @type {CartDTO} */{ target }) {
    this.target = document.querySelector(target)
    this.button = this.target.querySelector('button')
    this.container = this.target.querySelector('ul')

    this.button.addEventListener('click', () => {
      this.container.classList.add('active')
    })

    this.target.addEventListener('mouseleave', () => {
      this.container.classList.remove('active')
    })

    /** @type {CartItemDTO[]} */
    this.items = []

    this.load()
    this.render()
  }

  render() {
    this.container.innerHTML = ''
    this.items.forEach(item => {
      const element = this.getItemElement(item)
      this.container.append(element)
    })
  }

  load() {
    const items = sessionStorage.getItem('items')
    if (items !== null) {
      this.items = JSON.parse(items)
    }

    this.items = [
      { id: 1, amount: 2, name: 'Product A', price: 10 },
      { id: 2, amount: 1, name: 'Product B', price: 7.55 },
      { id: 3, amount: 3, name: 'Product C', price: 9.99 },
    ]
  }

  getItemElement({ id, name, price, amount }) {
    const li = document.createElement('li')
    li.dataset.id = id

    const strong = document.createElement('strong')
    strong.innerText = name

    const spanAmount = document.createElement('span')
    spanAmount.classList.add('amount')
    spanAmount.innerText = amount

    const spanPrice = document.createElement('span')
    spanPrice.classList.add('price')
    spanPrice.innerText = price

    li.append(strong, spanAmount, spanPrice)

    return li
  }
}