<template>
    <h1>Movie Add</h1>
    <h4>{{ message }}</h4>
    <v-form>
       <v-text-field
            label="Title"
            v-model="movie.title"
        />
        <v-text-field
                  label="Year"
                  v-model="movie.published"
              />
        <v-text-field
            label="Poster"
            v-model="movie.poster"
        />
        <v-text-field
            label="Description"
            v-model="movie.description"
        />
         <v-text-field
            label="Tracks"
            v-model="movie.tracks"
        />
 
        <v-row justify="center">
            <v-col col="2"> </v-col>
            <v-col col="2">
                <v-btn color="success" @click="saveMovie()"
                    >Save</v-btn
                >
            </v-col>
            <v-col col="2">
                <v-btn color="info" @click="cancel()">Cancel</v-btn>
            </v-col>
            <v-col col="2"> </v-col>
        </v-row>
    </v-form>
</template>
<script>
import MovieDataService from "../services/MovieDataService";
export default {
  name: "add-movie",
  data() {
    return {
      movie: {
        id: null,
        title: "",
        published: 2022,
        poster:"",
        description: "",
        tracks:[]
      },
      message: "Enter data and click save"
    };
  },
  methods: {
    saveMovie() {
      var data = {
        title: this.movie.title,
        published: this.movie.published,
        poster: this.movie.poster,
        description: this.movie.description,
        tracks: this.movie.tracks
      };
      MovieDataService.create(data)
        .then(response => {
          this.movie.id = response.data.id;
          console.log("add "+response.data);
          this.$router.push({ name: 'movies' });
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'movies' });
    }
  }
}

</script>
<style>

</style>