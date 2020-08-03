<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="mx-auto">
        <v-form v-model="valid">
          <h2>Únete a eCambuy</h2>
          <h4>Crea una cuenta para intercambiar tus productos ecológicos</h4>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn color="primary" nuxt @click="signup">
            Enviar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" class="mx-auto pt-3">
        <v-divider />
        <p class="mt-4">
          Ya tienes una cuenta?
          <v-btn color="primary" text nuxt to="/login">
            Login
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
    usernameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 40 || 'Name must be less than 40 characters',
      (v) => !v.includes(' ') || 'Name cannot contain spaces',
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
