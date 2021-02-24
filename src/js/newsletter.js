/**
 * @typedef {{ target: string }} NewsletterDTO
 */

class Newsletter {
  constructor(/** @type {NewsletterDTO} */{ target }) {
    this.target = document.querySelector(target)

    this.target.addEventListener('submit', event => {
      event.preventDefault()

      const email = this.target.querySelector('input').value.trim()

      if (!email) return

      if (!(/[a-z0-9]+@[a-z]+.com$/gi.test(email))) return this.showError(email)

      this.showSuccess()
    })
  }

  showError(email) {
    alert(`O email "${email}" não é valido!`)
  }

  showSuccess() {
    alert('email registrado com sucesso')
    this.target.querySelector('input').value = ''
  }
}