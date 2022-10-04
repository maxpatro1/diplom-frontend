<template>
  <b-row class="height-for-auth">
    <b-col class="sign-in">
    <div class="sign-in-header">
      <h1><b>Sign In</b></h1>
      <p>Sign in to stay connected.</p>
    </div>

    <div class="sign-in-form">
      <b-form>
        <b-form-group id="input-group-email">
          <label for="input-email">Email</label>
          <b-form-input id="input-email" v-model="username" type="email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-password">
          <label for="input-password">Password</label>
          <b-form-input id="input-password" type="password"  v-model="password"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-checkbox">
          <b-form-checkbox-group id="checkbox" class="checkbox">
            <b-form-checkbox>Remember me?</b-form-checkbox>
            <a href="#">Forgot password?</a>
          </b-form-checkbox-group>
        </b-form-group>
      </b-form>
    </div>

    <div class="sign-in-submit-button">
      <b-button type="submit" @click="login" variant="primary" class="submit-button"
        >Sign In</b-button
      >
    </div>

    <div class="sign-in-other">
      <p>or sign in with other accounts</p>
      <p>google, facebook, instagram...</p>
      <p>Don't have an account? <a href="#">Click here to sign up.</a></p>
    </div>
  </b-col>
    <b-col class="picture"></b-col>
  </b-row>
</template>

<script>
import AuthResource from "../../resources/auth";

export default {
  name: "Authorization",
  data() {
    return {
      username: null,
      password: null,
      token: null,
      reg_username: null,
      reg_password: null
    }
  },
  methods: {
    async login() {
      // this.token = await AuthResource.login(this.username, this.password)
      //  this.$store.state.token = this.token.token
      // localStorage.setItem('username', this.username)
      // localStorage.setItem('token', this.token.token)
      await this.$store.dispatch('FETCH_USER')
      await this.$router.push('/student/courses')
    },
    register() {
      this.user = AuthResource.register(this.reg_username, this.reg_password).catch((error) => {
              if (error.response.status === 400) {
                return alert('Неверные данные')
              }
      })
    }
  }
}
</script>

<style scoped>
.sign-in {
  background-color: white;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign-in-header,
.sign-in-form,
.sign-in-submit-button,
.sign-in-other {
  width: 100%;
  margin: 2% 0;
}

.sign-in-header,
.sign-in-submit-button,
.sign-in-other {
  text-align: center;
}

.submit-button {
  height: 110%;
  width: 20%;
}

.checkbox {
  display: flex;
  justify-content: space-between;
}

.height-for-auth {
  height: 100vh;
}

.picture {
  background-color: #ccc;
  background-image: url('../../../public/sign_in.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>