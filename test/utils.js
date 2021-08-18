import { createWrapper } from '@vue/test-utils'
import Dialog from '../src/dialog'

export function sleep (ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function wrap (vm) {
  return createWrapper(vm, {
    attachedToDocument: true
  })
}

export async function mount (component, params) {
  const dialog = new Dialog(component)
  await dialog.show(params)
  const wrapper = wrap(dialog.vm)
  return {
    dialog,
    wrapper,
    element: dialog.element
  }
}
