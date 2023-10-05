<template>
  <div class="form-input">
    <font-awesome-icon class="form-input__icon" :icon="icon" />
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vHamburger",
  props: {
    icon: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
});
</script>

<style lang="scss">
.form-input {
  margin: 15px 0;
  height: 40px;
  border-radius: 24px;
  box-shadow: 0px 5px 30px -7px rgba(86, 160, 250, 0.664);
  display: flex;
  align-items: center;

  input {
    outline: none;
    border: none;
    font-size: 18px;
    margin-left: 18px;
    height: 100%;
    width: 80%;
  }

  &__icon {
    color: $purple-2;
    background: transparent;
    margin-left: 16px;
    font-size: 24px;
  }
}
</style>
