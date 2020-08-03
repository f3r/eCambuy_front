<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar
            ><v-img src="https://randomuser.me/api/portraits/men/85.jpg"
              >></v-img
            ></v-avatar
          >
        </v-flex>
        <v-flex>
          <p class="accent--text mt-3 headline">Carmelo Cotón</p>
        </v-flex>
      </v-layout>
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
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn text to="/addProduct">€</v-btn>
      <div v-if="$auth.loggedIn">
        Hola, {{ $auth.user }}
        <v-btn text @click="logout">Logout</v-btn>
        <!-- username -->
        <!-- logout button -->
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/signup">Register</v-btn>
        <!-- login -->
        <!-- logout button -->
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
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
      ],
      title: 'eCambuy',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
