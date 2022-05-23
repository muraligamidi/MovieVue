<template>
    <h2>Movie View</h2>
    <h4>{{ message }}</h4>
    <h3> {{movie.title}}</h3>
    <v-btn color="success" @click="goEditMovie()"
    >Edit</v-btn>
     <v-btn color="success" @click="goAddLesson(id)"
    >Add Lesson</v-btn>

     <v-row>
        <v-col  cols="8"
              sm="2">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col  cols="8"
              sm="4">
            <span class="text-h6">Description</span>
        </v-col>
        <v-col  cols="8"
              sm="1">
            <span class="text-h6">Edit</span>
        </v-col>
        <v-col  cols="8"
              sm="1">
            <span class="text-h6">Delete</span>
        </v-col>
      </v-row>
      <LessonDisplay
        v-for="lesson in lessons"
        :key="lesson.id"
        :lesson="lesson"
        @deleteLesson="goDeleteLesson(lesson)"
        @updateLesson="goEditLesson(lesson)"
    />

   
</template>
<script>
import MovieDataService from "../services/MovieDataService";
import LessonDataService from "../services/LessonDataService";
import LessonDisplay from '@/components/LessonDisplay.vue';
export default {
  name: "view-movie",
  props: ['id'],
    components: {
        LessonDisplay
    },
  data() {
    return {
      movie: {},
      lessons : [],
      message: "Add, Edit or Delete Lessons"
    };
  },
  methods: {
    retrieveLessons() {
      MovieDataService.get(this.id)
        .then(response => {
          this.movie= response.data;
          LessonDataService.getAllLessons(this.id)
            .then(response=> {
              this.lessons = response.data})
            .catch(e => {
                this.message = e.response.data.message;
              });
            })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
     goEditMovie() {
      this.$router.push({ name: 'edit', params: { id: this.id } });
    },
    goEditLesson(lesson) {
      this.$router.push({ name: 'editLesson', params: { movieId: this.id,lessonId: lesson.id} });
    },
    goAddLesson() {
      this.$router.push({ name: 'addLesson', params: { movieId: this.id } });
    },

    goDeleteLesson(lesson) {
      LessonDataService.deleteLesson(lesson.movieId,lesson.id)
        .then( () => {
          this.retrieveLessons()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel(){
        this.$router.push({ name: 'movies' });
    }
  },
    mounted() {
    this.retrieveLessons();
  }
}
</script>

<style>
</style>