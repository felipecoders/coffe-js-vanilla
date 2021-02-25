/**
 * @typedef {{ target: string }} CartDTO
 * @typedef {{ id: number; name: string; amount: number; price: number }} CartItemDTO
 */

class Cart extends EventEmitter {
  constructor(/** @type {CartDTO} */ { target }) {
    super()
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
    this.amounts = {}
    const { format } = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    this.format = format

    this.load()
    this.render()
  }

  render() {
    this.container.innerHTML = ''
    this.items.forEach(item => {
      const element = this.getItemElement(item)
      this.container.append(element)
    })
    this.container.append(this.getFooterTotal())
  }

  load() {
    const items = sessionStorage.getItem('items')
    const amounts = sessionStorage.getItem('amounts')
    if (items !== null && amounts !== null) {
      this.items = JSON.parse(items)
      this.amounts = JSON.parse(amounts)
    }
  }

  /**
   *
   * @param {ProductItems} param0
   */
  getItemElement({ id, name, price }) {
    const li = document.createElement('li')
    li.dataset.id = id

    const button = document.createElement('button')
    const icon = document.createElement('i')
    icon.classList.add('fa', 'fa-minus')
    button.append(icon)

    button.onclick = () => this.emit('remove-product-from-cart', id)

    const strong = document.createElement('strong')
    strong.innerText = name

    const spanAmount = document.createElement('span')
    spanAmount.classList.add('amount')
    spanAmount.innerText = `${this.amounts[id]}X`

    const spanPrice = document.createElement('span')
    spanPrice.classList.add('price')
    spanPrice.innerText = this.format(price)

    li.append(button, strong, spanAmount, spanPrice)

    return li
  }

  /** @returns {HTMLElement} */
  getFooterTotal() {
    const footer = document.createElement('footer')
    footer.classList.add('cart-footer')

    const label = document.createElement('span')
    label.innerText = 'Total'

    const total = document.createElement('strong')
    const value = this.items
      .map(item => this.amounts[item.id] * item.price)
      .reduce((prev, next) => prev + next, 0)
    total.innerText = this.format(value)

    footer.append(label, total)

    return footer
  }

  /**
   *
   * @param {ProductItems} product
   */
  add(product) {
    const index = this.items.findIndex(item => item.id === product.id)
    if (index < 0) {
      this.items.push(product)
      this.amounts[product.id] = 1
    } else {
      // this.amounts[product.id] = this.amounts[product.id] + 1
      // this.amounts[product.id] += 1
      // this.amounts[product.id]++
      ++this.amounts[product.id]
    }

    sessionStorage.setItem('items', JSON.stringify(this.items))
    sessionStorage.setItem('amounts', JSON.stringify(this.amounts))
    this.render()
  }

  remove(id) {
    const index = this.items.findIndex(item => item.id === id)
    --this.amounts[id]

    if (this.amounts[id] === 0) {
      this.items.splice(index, 1)
    }

    sessionStorage.setItem('items', JSON.stringify(this.items))
    sessionStorage.setItem('amounts', JSON.stringify(this.amounts))
    this.render()
  }
}
