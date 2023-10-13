<template>
  <div class="auth-form">
    <form class="auth-form__form">
      <h1 class="auth-form__title">{{ title }}</h1>
      <slot></slot>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "vHamburger",
  props: {
    title: {
      type: String
    }
  }  
});
</script>

<style lang="scss">
  .auth-form {
    box-shadow: 0px 0px 35px -12px $purple-2;
    width: 500px;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;
    margin: 64px 12px auto;

    &__form {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

    &__title {
      color: $grey-6;
      margin: 0 auto 12px;
    }

    &__note {
      margin: 24px auto;
      color: $grey-5;
      span {
        cursor: pointer;
        color: $purple-1;
        transition: .2s;
        &:hover {
          color: $purple-hover;
        }
      }
    }

    &__button {
      width: 150px;
      height: 40px;
      border-radius: 16px;
      border: none;
      outline: none;
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,95,255,1) 0%, rgba(6,56,190,1) 100%, rgba(19,20,227,1) 100%);
      box-shadow: 0px 5px 29px -7px $purple-1;
      margin: 24px auto 0;
      font-size: 18px;
      color: $white;
      cursor: pointer;
      transition: .2s;
      &:hover {
        opacity: .9;
      }
    }
  }

  .form-input {
    margin: 15px 0;
    height: 55px;
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
