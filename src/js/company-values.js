/**
 * @typedef {{ target: string; options: string[] }} CompanyValuesDTO
 */
class CompanyValues {
  constructor(/**@type {CompanyValuesDTO} */{ target, options }) {
    this.target = document.querySelector(target)
    this.options = options
  }

  run() {
    const maxIndex = this.options.length
    const index = Math.floor(Math.random() * maxIndex)

    const option = this.options[index]

    this.target.querySelector('strong').innerText = option

    console.log(option)
  }

  start() {
    this.index = 0
    this.stop()
    this.run()
  }

  stop() {
    console.log('stop')
  }
}