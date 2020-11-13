class Writter {
  constructor(/** @type {string} */ target) {
    this.indexs = { letter: 0, word: 0, completed: 0 }
    this.lettherIndex = 0
    this.wordsIndex = 0
    this.words = ['<HTML>', '<CSS>', '<JAVASCRIPT>']
    this.handlerNumber = 0
    /** @type {HTMLSpanElement} */
    this.target = document.querySelector(target)
  }

  write() {
    const currentWord = this.words[this.indexs.word]

    if (!currentWord.charAt(this.indexs.letter)) {
      if (this.indexs.completed >= 5) {
        this.indexs.completed = 0
      } else {
        this.indexs.completed += 1
        return
      }

      this.indexs.letter = 0
      this.indexs.word += 1
      this.target.innerText = ''
    }

    if (typeof this.words[this.indexs.word] === 'undefined') {
      this.indexs.word = 0
    }

    const word = this.words[this.indexs.word]

    this.target.parentElement.className = word.replace(/<|>/g, '').toLowerCase()
    this.target.innerText += word[this.indexs.letter++]
  }

  start() {
    this.handlerNumber = setInterval(() => {
      this.write()
    }, 300)
  }

  stop() {
    clearInterval(this.handlerNumber)
  }
}

const writter = new Writter('[data-language]')
writter.start()
window.writter = writter
