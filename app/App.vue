<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense class="pt-0">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/">Home</router-link>
            </v-list-tile-content>
          </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/about">About</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{appName}}</v-toolbar-title>
      </v-toolbar>
      <v-content>        
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer>
        <div>@2018</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>


export default {
  data: () => ({
    drawer: null,
    appName: "vue-gulp-template"
  })
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
