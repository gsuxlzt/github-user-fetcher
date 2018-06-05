<template>
    <div v-if="!hasError">
        <div>{{$route.params.user}}'s Projects</div>
        <hr/>
        <div v-if="!projects.length">
            This user has no repositories to be displayed.
        </div>
        <div v-else v-for="project in projects" v-bind:key="project.id">
            <router-link :to="{path: `/${$route.params.user}/${project.name}`}">{{project.name}}</router-link>
        </div>
    </div>
    <div v-else>
        ERROR
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user",
  data() {
    return {
      user: this.$route.params.user,
      projects: [],
      hasError: false
    };
  },
  created() {
    const api = "https://api.github.com";

    axios
      .get(`${api}/users/${this.user}/repos`)
      .catch(error => {
        this.hasError = true;
      })
      .then(response => {
        this.projects = response.data.map(repo => ({
          id: repo.id,
          name: repo.name
        }));
      });
  }
};
</script>