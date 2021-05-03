<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" v-model="email" placeholder="email" >
        <br>
        <input type="password" name="pass" v-model="password" placeholder="password">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        passworld: this.password
      })
    }
  },

  watch: {
    email (value) {
      console.log('email has changed value ', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
