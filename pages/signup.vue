<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h2>Únete a eCambuy</h2>
          <h4>Crea una cuenta para intercambiar tus productos ecológicos</h4>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-btn color="primary" nuxt @click="signup">
      Enviar
    </v-btn>
    <v-spacer></v-spacer>
    <p>Ya tienes una cuenta?</p>
    <v-btn color="primary" nuxt to="/login">
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
    usernameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => v.length >= 6 || 'Password must be at least 6 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    async signup() {
      // console.log(response)
      const data = {
        user_username: this.username,
        user_password: this.password,
        user_email: this.email,
      }
      await this.$axios.$post('/auth/signup', data)
      this.$auth.loginWith('local', { data })
      // const ip = await this.$axios.$post('/auth/signup', data )
      // this.ip = ip
      // console.log('->' + this.ip)
      // localStorage.setItem('token', this.ip.token)
      // localStorage.setItem('email', this.ip.email)
      // window.location.reload()
      this.$router.push('/productList')
    },
  },
}
</script>
