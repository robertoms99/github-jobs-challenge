export const nth = (times, callback) => {
  for (let index = 0; index <= times; index++) callback.call(this, index)
}

export const compose = function (callbacks) {
  return function (...args) {
    return callbacks.reduceRight((args, callback) => callback.apply(this, args), args)
  }
}

export const debounce = function (callback, delay) {
  let timeoutId = 0
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => callback.apply(this, args), delay)
  }
}

export const throttle = function (callback, delay) {
  let isThrottled = false
  let lastArgs = null
  return function throttling( ...args) {
    if (!isThrottled) {
      setTimeout(() => {
        if (lastArgs !== null) throttling(lastArgs)
        isThrottled = false
        lastArgs = null
      }, delay)
      callback.apply(this, args)
    } else lastArgs = args
    isThrottled = true
  }
}

export const delayed = function (callback, delay) {
  return function (...args) {
    setTimeout(callback.bind(this, ...args), delay)
  }
}

export const curry = (callback) => {
  return function partial( ...args) {
    if (args.length === callback.length) return callback.apply(this, args)
    else return function ( ...restArgs) {
      return partial.apply(this, args.concat(restArgs))
    }
  }
}
