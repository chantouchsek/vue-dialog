export function destroyVueElement (vm) {
  if (vm && !vm._isDestroyed && (typeof vm.$destroy === 'function')) {
    vm.$destroy()
  }
}

export function findContainer (container) {
  let found
  if (typeof container === 'string') {
    found = document.querySelector(container)
  } else {
    found = container
  }
  if (!found) {
    found = document.body
  }
  return found
}

// todo
// export function middlewareSeries (promises, appContext) {
//   if (!promises.length || appContext._redirected || appContext._errored) {
//     return Promise.resolve()
//   }
//   return promisify(promises[0], appContext)
//     .then(() => {
//       return middlewareSeries(promises.slice(1), appContext)
//     })
// }
