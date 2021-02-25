class EventEmitter {
  constructor() {
    this._events = {}
  }

  emit(eventName, value) {
    const event = this._events[eventName]
    if (typeof event !== 'undefined') {
      event.forEach(e => {
        try {
          e(value)
        } catch (error) {}
      })
    }
  }

  listen(eventName, fn) {
    if (typeof this._events[eventName] === 'undefined') {
      this._events[eventName] = []
    }

    this._events[eventName].push(fn)
  }
}
