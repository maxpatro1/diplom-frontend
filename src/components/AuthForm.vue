<template>
  <form class="auth" @submit.prevent>
    <h1 class="auth__title">Sign in</h1>
    <p class="auth__subtitle">Sign in to stay connected.</p>
    
    <base-input
      v-model="email"
      class="auth__input"
      label="Email"
      type="email"
      :is-gray-label="true"
    />
    <base-input
      v-model="password"
      class="auth__input"
      label="Password"
      type="password"
      :is-gray-label="true"
    />
    <div class="auth__panel">
      <base-checkbox
        v-model="isRemember"
        label="Remember me?"
        :is-gray-label="true"
      />
      <base-link to="/">
        Forgot Password
      </base-link>
    </div>
    <base-button class="auth__button">
      Sign in
    </base-button>
    <p class="auth__socials-title">or sign in with other accounts?</p>
    <div class="auth__socials-container">
      ...social
    </div>
    <p class="auth__register">
      Don’t have an account?
      <base-link to="/">
      Click here to sign up.
      </base-link>
    </p>
  </form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseLink from '@/components/base/BaseLink.vue';

export default {
  name: 'AuthForm',
  components: {
    BaseButton,
    BaseCheckbox,
    BaseInput,
    BaseLink,
  },
  data() {
    return {
      email: '',
      password: '',
      isRemember: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth {
  display: grid;
  justify-items: center;
  gap: 16px;
  width: 100%;
  max-width: calc(436px + 40px);
  padding: 0 20px;
  margin: 0 auto;
  align-self: center;
  @media (max-width: $screen-sm) {
    max-width: 100%;
  }

  &__panel {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 33px;
    font-weight: 600;
    line-height: 43px;
  }

  &__subtitle {
    color: $grey-primary;
  }

  &__button {
    width: 100%;
    max-width: 188px;
    @media (max-width: $screen-sm) {
      max-width: 100%;
    }
  }
}
</style>
