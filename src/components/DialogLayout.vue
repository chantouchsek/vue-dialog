<template>
  <transition name="vue-dialog-modal">
    <div class="vue-dialog-modal-mask" @click.self.prevent.stop="dismiss">
      <div class="vue-dialog-modal-container" :style="{ 'max-width': getWidth }">
        <dialog-child v-bind="$options.propsData" ref="dialog" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: undefined
    },
    persistent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .vue-dialog-modal-mask {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: 6;
    outline: none;
    background-color: rgba(0, 0, 0, .5);
  }

  .vue-dialog-modal-container {
    overflow-y: auto;
    max-height: 95%;
    background-color: #fff;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);
    border-radius: 2px;
    margin: 12px;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: inherit;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .vue-dialog-modal-enter {
    opacity: 0;
  }

  .vue-dialog-modal-leave-active {
    opacity: 0;
  }

  .vue-dialog-modal-enter .modal-container,
  .vue-dialog-modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
