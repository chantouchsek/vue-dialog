export default {
  name: 'Confirmable',
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: [String, Function],
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    actions: {
      type: [Array, Object, Function],
      default: () => {}
    }
  }
}
