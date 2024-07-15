<script setup>
defineProps({
  show: Boolean,
});
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <button
          @click="$emit('close')"
          class="w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-700 text-white text-2xl rounded-md float-right"
        >
          <i class="ai-x-small"></i>
        </button>
        <div class="modal-header">
          <slot name="header">Sample modal</slot>
        </div>
        <div class="modal-body">
          <slot name="body">Body of modal dialog</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  padding: 0 16px;
}
.modal-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
