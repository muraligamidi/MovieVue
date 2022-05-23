<template>
    <v-app>
      <v-app-bar  >
                <h1>MovieCraft</h1>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn 
                   
                    @click="goList" color="primary"
                    >
                  List
                </v-btn> &nbsp;&nbsp;
                <v-btn 
                    color="warning"
                    @click="goAdd"
                    >
                  Add
                </v-btn>
            </v-toolbar-items>
      </v-app-bar>
      <v-main >
        <v-container>
          <div class="feature-card">
      <router-link to="/">
        <img src="../src/assets/image/avengers_movie_posters.jpg" alt="MCU Poster" class="featured-img" />
        <div class="detail">
          <h3>Marvel Super Heros</h3>
          <p>The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics.</p>
        </div>
      </router-link>
    </div>
          <router-view />

        </v-container>
      </v-main>  
    </v-app>
</template>

<script>
import logo from './assets/oc-logo-white.png'
export default {
  name: 'App',

  data: () => ({
    logo,
  }),
  methods: {
    goAdd() {
      this.$router.push({ name: 'add' });
    },
    goList() {
      this.$router.push({ name: 'movies' });
    }
  },

}
</script>
<style style="scss">
.detail {
  text-decoration: none !important;
  margin-top: -95px;
  color:white;
}
p {
padding:5px;
text-decoration: none !important; 
  color:white;
  font-size: 16px !important;
}
.feature-card {
  margin-top:-10px !important;
}


</style>
