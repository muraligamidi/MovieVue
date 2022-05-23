<template>


    <!-- <h4>{{ message }}</h4> -->
  <br>
      <v-row >
       
        <v-col col="5" sm="8">
            <v-text-field density="compact" clearable
              v-model="title"/>
        </v-col> 
         <v-col  cols="3" sm="2">
          <v-btn color = "success"
            @click="SearchMovies">
            Search
          </v-btn>
        </v-col>  
       <v-col  cols="3" sm="2">
          <v-btn color = "primary"
            @click="removeAllMovies">
            Remove All
          </v-btn>
        </v-col>
        <v-col  cols="3" sm="2">
          <v-btn @click="removeAllMovies" color = "danger" >
                Remove All
              </v-btn>
          </v-col> 
      </v-row>
      <!-- <v-row>
        <v-col  cols="9"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col  cols="9"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        
        <v-col  cols="9"
              sm="4">
            <span class="text-h6">Description</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">Edit</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">View</span>
        </v-col>
        <v-col  cols="9"
              sm="1">
            <span class="text-h6">Delete</span>
        </v-col>
      </v-row> -->
      <MovieDisplay
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @deleteMovie="goDelete(movie)"
        @updateMovie="goEdit(movie)"
        @viewMovie="goView(movie)"
    />
 

</template>
<script>
import MovieDataService from "../services/MovieDataService";
import MovieDisplay from '@/components/MovieDisplay.vue';
export default {
  name: "movies-list",
  data() {
    return {
      movies: [],
      currentMovie: null,
      currentIndex: -1,
      title: "",
      message : "Search, Edit or Delete Movies"
    };
  },
  components: {
        MovieDisplay
    },
  methods: {
    goEdit(movie) {
      this.$router.push({ name: 'edit', params: { id: movie.id } });
    },
    goView(movie) {
      this.$router.push({ name: 'view', params: { id: movie.id } });
    },
    goDelete(movie) {
      MovieDataService.delete(movie.id)
        .then( () => {
    
          this.retrieveMovies()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    retrieveMovies() {
      MovieDataService.getAll()
        .then(response => {
          this.movies = response.data;
          
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    refreshList() {
      this.retrieveMovies();
      this.currentMovie = null;
      this.currentIndex = -1;
    },
    setActiveMovie(movie, index) {
      this.currentMovie = movie;
      this.currentIndex = movie ? index : -1;
    },
    removeAllMovies() {
      MovieDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    
    SearchMovies() {
      MovieDataService.findByTitle(this.title)
        .then(response => {
          this.movies = response.data;
          this.setActiveMovie(null);
          
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    }
  },
  mounted() {
    this.retrieveMovies();
  }
};
</script>
<style>

</style>