<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-container>
        <v-layout v-if="isAuthenticated" mt-4 column align-center>
          <v-flex>
            <v-avatar size="100"
              ><v-img src="https://randomuser.me/api/portraits/men/85.jpg"
                >></v-img
              ></v-avatar
            >
          </v-flex>
          <v-flex>
            <p class="accent--text mt-3 headline">
              <nuxt-link to="/profile">{{ loggedInUser.username }}</nuxt-link>
            </p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container>
        <div v-if="isAuthenticated" class="text-center">
          <v-btn color="dark" dark @click="logout">
            <v-icon left>mdi-logout</v-icon>Desconectar</v-btn
          >
        </div>
        <div v-else>
          <div class="text-center mb-3">
            <v-btn color="success" to="/login">
              <v-icon left>mdi-login</v-icon>Iniciar sesión</v-btn
            >
          </div>
          <div class="text-center">
            <!--<v-btn color="success" to="/signup">Regístrate</v-btn>-->
          </div>
        </div>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>

      <!--<v-img src="~/static/01gloo.png"></v-img>-->
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only mt-6">
        <div class="mr-4">
          <v-btn color="success" to="/addProductForm">
            <v-icon left>mdi-currency-eur</v-icon> Vender
          </v-btn>
        </div>
        <div v-if="isAuthenticated">
          <v-btn class="mr-2" color="primary" to="/profile"
            ><v-icon left>mdi-account</v-icon>
            {{ loggedInUser.username }}</v-btn
          >
          <v-btn color="dark" dark @click="logout">
            <v-icon left>mdi-logout</v-icon>Desconectar</v-btn
          >
        </div>
        <div v-else>
          <v-btn color="success" to="/login">
            <v-icon left>mdi-login</v-icon>Iniciar sesión</v-btn
          >
          <!--<v-btn color="success" to="/signup">Regístrate</v-btn>-->
        </div>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/',
        },
        {
          icon: 'mdi-magnify',
          title: 'Buscar',
          to: '/productList',
        },
        {
          icon: 'mdi-format-list-checkbox',
          title: 'Lista de productos',
          to: '/productList',
        },
        {
          icon: 'mdi-currency-eur',
          title: 'Vender',
          to: '/addProductForm',
        },
      ],
      title: 'eCambuy',
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
