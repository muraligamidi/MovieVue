<template>
<v-row>
  <v-col  cols="9"
        sm="2">
      <span >{{ movie.title }}</span>
  </v-col>
    <v-col  cols="9"
        sm="4">
      <span> {{ movie.published }}</span>
  </v-col>
    <v-col  cols="9"
        sm="4">
      <span> {{ movie.poster }}</span>
  </v-col>
    <v-col  cols="9"
        sm="4">
      <span> {{ movie.description }}</span>
  </v-col>

  <v-col  cols="9"
        sm="4">
      <span> {{ movie.tracks }}</span>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-pencil" @click="updateMovie"/>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-format-list-bulleted-type" @click="viewMovie"/>
  </v-col>
  <v-col  cols="9"
        sm="1">
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteMovie"/>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    tutorial: Object
  },
  data() {
    return {
      
    };
  },
  methods: {

    deleteMovie() {
      this.$emit("deleteMovie");
    },
    updateMovie() {
      this.$emit("updateMovie");
    },
    viewMovie() {
      this.$emit("viewMovie");
    }
  }
};
</script>

<style></style>
