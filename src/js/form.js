class Form {
  constructor() {
    this.name = document.getElementById('name')
    this.email = document.getElementById('email')
    this.phone = document.getElementById('phone')
    // this.description = document.getElementById('description')
    this.description = new Quill('#description', {
      theme: 'snow'
    })
    this.form = document.getElementById('contact-form')

    this.form.addEventListener('submit', event => {
      event.preventDefault()

      const name = this.name.value.trim()
      const email = this.email.value.trim()
      const phone = this.phone.value.trim().replace(/[^0-9]/g, '')
      const description = this.description.getContents()

      console.log({
        name,
        email,
        phone,
        description
      })
    })

    this.phone.addEventListener('keydown', event => {
      // permite digitar somente numeros
      const isNotNumber = !(/[0-9]/.test(event.key))
      const isClearButton = ['backspace', 'delete'].includes(event.key.toLowerCase())

      if (isNotNumber && !isClearButton) event.preventDefault()

    })

    this.phone.addEventListener('keyup', event => {
      const value = this.phone.value.trim().replace(/[^0-9]/g, '').split('')
      const { mask } = this.phone.dataset

      this.phone.value = ''
      for (let i = 0; i < mask.length; i += 1) {
        const piece = mask.charAt(i)

        if (value.length === 0) continue

        this.phone.value += piece === '#' ? value.shift() : piece
      }
    })
  }
}