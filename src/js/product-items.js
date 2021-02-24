class ProductItems {
    constructor({ target, products }) {
        this.target = document.querySelector(target)
        this.products = products

        const { format } = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        this.format = format
    }
    start() {
        const products = this.products.map(product => this.getProductElement(product))
        this.target.append(...products)


    }
    getProductElement(product) {
        const productItem = document.createElement('div')
        productItem.classList.add('product-item')

        const image = document.createElement('img')
        image.src = product.url_image

        const name = document.createElement('h5')
        name.innerText = product.name

        const description = document.createElement('p')
        description.innerText = product.description

        const stock = document.createElement('span')
        stock.innerText = `stock: ${product.stock}`

        const unit = document.createElement('sub')
        unit.innerText = product.unit

        const price = document.createElement('strong')
        price.innerText = this.getPriceByProduct(product.price)
        price.append(unit)

        const values = document.createElement('div')
        values.classList.add('values')
        values.append(stock, price)

        const button = document.createElement('button')
        const icon = document.createElement('i')
        icon.classList.add('fa', 'fa-plus')

        button.append(icon)

        const footer = document.createElement('footer')
        footer.append(name, description, values, button)

        productItem.append(image, footer)

        return productItem
    }

    getPriceByProduct(price) {
        return this.format(price)
    }
}