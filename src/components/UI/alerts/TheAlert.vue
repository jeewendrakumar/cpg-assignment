<template>
  <div class="custom-success" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.custom-success {
  color: #0f5132;
  background: #d1e7dd;
  border-color: #badbcc;
  padding: 5px 10px;
  border-radius: 5px;
  border-radius: 5px;
  position: absolute;
  top: 1%;
  left: auto;
  right: 45%;
  z-index: 9999;
}
</style>
