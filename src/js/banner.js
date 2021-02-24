/**
 * @typedef {{ target: string; images: string[] }} BannerDTO
 */
class Banner {
  constructor(/**@type {BannerDTO} */{ target, images, time }) {
    this.target = document.querySelector(target)
    this.time = time * 1000
    this.images = images.map(image => {
      // <img src="" />
      const img = document.createElement('img')
      img.src = `./images/${image}`
      img.title = image
      img.alt = image

      return img
    })
  }

  run() {
    const timeout = setTimeout(() => {
      this.target.innerHTML = ''

      const image = this.images[this.index]

      this.index += 1
      if (typeof this.images[this.index] === 'undefined') {
        this.index = 0
      }

      this.target.append(image)

      this.timeout = this.run()
    }, this.time)

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